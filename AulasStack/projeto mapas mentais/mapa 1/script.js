// --- Make a node draggable ---
function makeDraggable(node) {
    if (!node) {
        console.error('Node is null or undefined');
        return;
    }

    node.draggable = true;

    // Handle the start of a drag event
    node.addEventListener('dragstart', (event) => {
        if (!event || !event.target) {
            console.error('Event or target is null or undefined');
            return;
        }

        try {
            event.dataTransfer.setData('text/plain', event.target.id);
        } catch (error) {
            console.error('Error setting data transfer data', error);
        }
    });

    // Handle the end of a drag event
    node.addEventListener('dragend', (event) => {
        if (!event || !event.target) {
            console.error('Event or target is null or undefined');
            return;
        }

        try {
            const containerRect = document.querySelector('.container').getBoundingClientRect();
            const nodeRect = node.getBoundingClientRect();

            // Calculate the relative position of the node inside the container
            const relativeX = event.clientX - containerRect.left - (nodeRect.width / 2);
            const relativeY = event.clientY - containerRect.top - (nodeRect.height / 2);

            // Set the new position of the node
            node.style.left = `${relativeX}px`;
            node.style.top = `${relativeY}px`;

            // Redraw all lines
            redrawLines();
        } catch (error) {
            console.error('Error setting node position', error);
        }
    });
}

// --- Criar elemento SVG dinamicamente ---
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.style.position = "absolute";
svg.style.width = "100%";
svg.style.height = "100%";
svg.style.pointerEvents = "none";
document.querySelector('.container').appendChild(svg);

// --- Fun o para desenhar linhas CURVAS ---
function drawCurvedLine(parentNode, childNode) {
    if (!parentNode || !childNode) {
        console.error('Parent or child node is null or undefined');
        return;
    }

    const pathElement = document.createElementNS("http://www.w3.org/2000/svg", "path");
    try {
        // Obt m coordenadas relativas ao container
        const parentNodeRect = parentNode.getBoundingClientRect();
        const childNodeRect = childNode.getBoundingClientRect();
        const containerRect = document.querySelector('.container').getBoundingClientRect();

        const parentNodeCenterX = parentNodeRect.left - containerRect.left + parentNodeRect.width / 2;
        const parentNodeCenterY = parentNodeRect.top - containerRect.top + parentNodeRect.height / 2;
        const childNodeCenterX = childNodeRect.left - containerRect.left + childNodeRect.width / 2;
        const childNodeCenterY = childNodeRect.top - containerRect.top + childNodeRect.height / 2;

        // Cria curva B zier
        const controlPointX = (parentNodeCenterX + childNodeCenterX) / 2;
        const controlPointY = (parentNodeCenterY + childNodeCenterY) / 2 - 50;
        const pathData = `M ${parentNodeCenterX} ${parentNodeCenterY} Q ${controlPointX} ${controlPointY}, ${childNodeCenterX} ${childNodeCenterY}`;

        pathElement.setAttribute("d", pathData);
        pathElement.setAttribute("stroke", "#000");
        pathElement.setAttribute("fill", "none");
        pathElement.setAttribute("stroke-width", "2");

        svg.appendChild(pathElement);
    } catch (error) {
        console.error('Error drawing curved line', error);
    }
}

// --- Redraw all lines ---
function redrawLines() {
    try {
        svg.innerHTML = ''; // Clear old lines

        document.querySelectorAll('.node').forEach(node => {
            const parentId = node.dataset.parentId;
            if (parentId) {
                const parentNode = document.getElementById(parentId);
                if (parentNode) drawCurvedLine(parentNode, node);
            }
        });
    } catch (error) {
        console.error('Error redrawing lines', error);
    }
}

// --- Restante do código permanece igual ---