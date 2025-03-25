// script.js

let rootNode = {
    name: "root",
    children: [
        { name: "child1" },
        { name: "child2", children: [{ name: "grandchild1" }, { name: "grandchild2" }] },
    ]
};

const svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

const g = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

const tree = d3.tree()
    .size([2 * Math.PI, 500]);

const update = () => {
    const root = d3.hierarchy(rootNode);
    tree(root);

    const link = g.selectAll(".link")
        .data(root.links());

    link.enter().append("path")
        .attr("class", "link")
        .merge(link)
        .attr("d", d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y));

    link.exit().remove();

    const node = g.selectAll(".node")
        .data(root.descendants(), d => d.data.name);

    const nodeEnter = node.enter().append("g")
        .attr("class", d => "node node--level" + d.depth)
        .attr("transform", d => "translate(" + radialPoint(d.x, d.y) + ")");

    nodeEnter.append("circle")
        .attr("r", 5);

    nodeEnter.append("text")
        .attr("dy", "0.31em")
        .attr("x", d => d.x < Math.PI === !d.children ? 6 : -6)
        .attr("text-anchor", d => d.x < Math.PI === !d.children ? "start" : "end")
        .attr("transform", d => "rotate(" + (d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) + ")")
        .text(d => d.data.name);

    node.merge(nodeEnter)
        .attr("transform", d => "translate(" + radialPoint(d.x, d.y) + ")");

    node.exit().remove();
};

const radialPoint = (x, y) => {
    return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
};

const addNode = () => {
    const name = prompt("Enter node name:");
    if (name) {
        rootNode.children.push({ name });
        update();
    }
};

const editNode = () => {
    const name = prompt("Enter node name to edit:");
    const node = findNode(rootNode, name);
    if (node) {
        const newName = prompt("Enter new name:");
        if (newName) {
            node.name = newName;
            update();
        }
    }
};

const removeNode = () => {
    const name = prompt("Enter node name to remove:");
    const node = findNode(rootNode, name);
    if (node) {
        rootNode.children = rootNode.children.filter(d => d.name !== name);
        update();
    }
};

const findNode = (node, name) => {
    if (node.name === name) return node;
    if (node.children) {
        for (let child of node.children) {
            const found = findNode(child, name);
            if (found) return found;
        }
    }
    return null;
};

update();
