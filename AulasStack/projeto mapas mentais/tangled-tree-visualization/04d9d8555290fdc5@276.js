// https://observablehq.com/@nitaku/tangled-tree-visualization@276
function _1(md){return(
md`# Tangled tree visualization (simple)`
)}

function _2(md){return(
md`*(See also an improved version in [this newer notebook](https://beta.observablehq.com/@nitaku/tangled-tree-visualization-ii).)*`
)}

function _3(md){return(
md`A tree with multiple inheritance (sometimes called *tangled tree*) cannot be represented by using a classic tree visualization. It is technically a directed acyclic graph (DAG) with one (or more) nodes identified as root. Using a graph visualization technique solves the issue, but poorly represents some peculiarities of a quasi-tree structure.

This visualization tries to address the representation of a tangled tree (a genealogy in this specific example). The layout and basic technique is the same underlying [Geneaquilts](https://aviz.fr/Research/Geneaquilts), but with curved links instead of matrices.

The intention is for the graphic to be more readily understood, while losing some of the advantages of Geneaquilts (e.g., representing a union without children).

The technique can also be applied to other types of tangled trees. Such structures are commonly found in computational linguistics (thesauri, some ontologies, wordnets).`
)}

function _4(svg,width,data,color)
{
  const c = 16
  return svg`<svg width="${width}" height="${data.layout.height}">
    <style>
      text {
        font-family: sans-serif;
        font-size: 12px;
      }
    </style>
    ${ data.links.map(l => `<path
      d="M${ l.xt } ${ l.yt }
         L${ l.xb-c } ${ l.yt }
         A${ c } ${ c } 90 0 1 ${ l.xb } ${ l.yt+c }
         L${ l.xb } ${ l.ys-c }
         A${ c } ${ c } 90 0 0 ${ l.xb+c } ${ l.ys }
         L${ l.xs } ${ l.ys }"
      fill="none"
      stroke="${ color(l.bundle.id) }"
      stroke-width="2"
    />`)}
    ${ data.nodes.map(n => `
      <text x="${ n.x }" y="${ n.y }" dy="0.35em" stroke="white" stroke-width="6">${ n.id }</text>
      <text x="${ n.x }" y="${ n.y }" dy="0.35em">${ n.id }</text>
    `)}
  </svg>`
}


function _data()
{
  var levels = [
    [{id: 'Chaos'}],
    [
      {id: 'Gaea', parents: ['Chaos']},
      {id: 'Uranus'}
    ],
    [
      {id: 'Oceanus', parents: ['Gaea', 'Uranus']},
      {id: 'Thethys', parents: ['Gaea', 'Uranus']},
      {id: 'Pontus'},
      {id: 'Rhea', parents: ['Gaea', 'Uranus']},
      {id: 'Cronus', parents: ['Gaea', 'Uranus']},
      {id: 'Coeus', parents: ['Gaea', 'Uranus']},
      {id: 'Phoebe', parents: ['Gaea', 'Uranus']},
      {id: 'Crius', parents: ['Gaea', 'Uranus']},
      {id: 'Hyperion', parents: ['Gaea', 'Uranus']},
      {id: 'Iapetus', parents: ['Gaea', 'Uranus']},
      {id: 'Thea', parents: ['Gaea', 'Uranus']},
      {id: 'Themis', parents: ['Gaea', 'Uranus']},
      {id: 'Mnemosyne', parents: ['Gaea', 'Uranus']}
    ],
    [
      {id: 'Doris', parents: ['Oceanus', 'Thethys']},
      {id: 'Neures', parents: ['Pontus', 'Gaea']},
      {id: 'Dionne'},
      {id: 'Demeter', parents: ['Rhea', 'Cronus']},
      {id: 'Hades', parents: ['Rhea', 'Cronus']},
      {id: 'Hera', parents: ['Rhea', 'Cronus']},
      {id: 'Alcmene'},
      {id: 'Zeus', parents: ['Rhea', 'Cronus']},
      {id: 'Eris'},
      {id: 'Leto', parents: ['Coeus', 'Phoebe']},
      {id: 'Amphitrite'},
      {id: 'Medusa'},
      {id: 'Poseidon', parents: ['Rhea', 'Cronus']},
      {id: 'Hestia', parents: ['Rhea', 'Cronus']}
    ],
    [
      {id: 'Thetis', parents: ['Doris', 'Neures']},
      {id: 'Peleus'},
      {id: 'Anchises'},
      {id: 'Adonis'},
      {id: 'Aphrodite', parents: ['Zeus', 'Dionne']},
      {id: 'Persephone', parents: ['Zeus', 'Demeter']},
      {id: 'Ares', parents: ['Zeus', 'Hera']},
      {id: 'Hephaestus', parents: ['Zeus', 'Hera']},
      {id: 'Hebe', parents: ['Zeus', 'Hera']},
      {id: 'Hercules', parents: ['Zeus', 'Alcmene']},
      {id: 'Megara'},
      {id: 'Deianira'},
      {id: 'Eileithya', parents: ['Zeus', 'Hera']},
      {id: 'Ate', parents: ['Zeus', 'Eris']},
      {id: 'Leda'},
      {id: 'Athena', parents: ['Zeus']},
      {id: 'Apollo', parents: ['Zeus', 'Leto']},
      {id: 'Artemis', parents: ['Zeus', 'Leto']},
      {id: 'Triton', parents: ['Poseidon', 'Amphitrite']},
      {id: 'Pegasus', parents: ['Poseidon', 'Medusa']},
      {id: 'Orion', parents: ['Poseidon']},
      {id: 'Polyphemus', parents: ['Poseidon']}
    ],
    [
      {id: 'Deidamia'},
      {id: 'Achilles', parents: ['Peleus', 'Thetis']},
      {id: 'Creusa'},
      {id: 'Aeneas', parents: ['Anchises', 'Aphrodite']},
      {id: 'Lavinia'},
      {id: 'Eros', parents: ['Hephaestus', 'Aphrodite']},
      {id: 'Helen', parents: ['Leda', 'Zeus']},
      {id: 'Menelaus'},
      {id: 'Polydueces', parents: ['Leda', 'Zeus']}
    ],
    [
      {id: 'Andromache'},
      {id: 'Neoptolemus', parents: ['Deidamia', 'Achilles']},
      {id: 'Aeneas(2)', parents: ['Creusa', 'Aeneas']},
      {id: 'Pompilius', parents: ['Creusa', 'Aeneas']},
      {id: 'Iulus', parents: ['Lavinia', 'Aeneas']},
      {id: 'Hermione', parents: ['Helen', 'Menelaus']}
    ]
  ]
  
  // precompute level depth
  levels.forEach((l,i) => l.forEach(n => n.level = i))
  
  var nodes = levels.reduce( ((a,x) => a.concat(x)), [] )
  var nodes_index = {}
  nodes.forEach(d => nodes_index[d.id] = d)
  
  // objectification
  nodes.forEach(d => {
    d.parents = (d.parents === undefined ? [] : d.parents).map(p => nodes_index[p])
  })
  
  // precompute bundles
  levels.forEach((l, i) => {
    var index = {}
    l.forEach(n => {
      if(n.parents.length == 0) {
        return
      }
      
      var id = n.parents.map(d => d.id).sort().join('--')
      if (id in index) {
        index[id].parents = index[id].parents.concat(n.parents)
      }
      else {
        index[id] = {id: id, parents: n.parents.slice(), level: i}
      }
      n.bundle = index[id]
    })
    l.bundles = Object.keys(index).map(k => index[k])
    l.bundles.forEach((b, i) => b.i = i)
  })
  
  var links = []
  nodes.forEach(d => {
    d.parents.forEach(p => links.push({source: d, bundle: d.bundle, target: p}))
  })
  
  var bundles = levels.reduce( ((a,x) => a.concat(x.bundles)), [] )
  
  // layout
  const node_height = 16
  const node_width = 80
  const bundle_width = 16
  const level_y_padding = 16
  
  var x_offset = 0
  var y_offset = 0
  levels.forEach(l => {
    x_offset += l.bundles.length*bundle_width
    y_offset += level_y_padding
    l.forEach((n, i) => {
      n.x = n.level*node_width + x_offset + node_height/2
      n.y = i*node_height + y_offset
    })
    y_offset += l.length*node_height
  })
  
  var i = 0
  levels.forEach(l => {
    l.bundles.forEach(b => {
      b.x = b.parents[0].x + node_width + (l.bundles.length-1-b.i)*bundle_width
      b.y = i*node_height
    })
    i += l.length
  })
    
  links.forEach(l => {
    l.xt = l.target.x
    l.yt = l.target.y
    l.xb = l.bundle.x
    l.yb = l.bundle.y
    l.xs = l.source.x
    l.ys = l.source.y
  })
  
  var layout = {
    height: nodes.length * node_height + levels.length * level_y_padding,
    node_height,
    node_width,
    bundle_width
  }
  
  return {levels, nodes, nodes_index, links, bundles, layout}
}


function _color(d3){return(
d3.scaleOrdinal(d3.schemeDark2)
)}

function _d3(require){return(
require('d3-scale', 'd3-scale-chromatic')
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  main.variable(observer()).define(["md"], _2);
  main.variable(observer()).define(["md"], _3);
  main.variable(observer()).define(["svg","width","data","color"], _4);
  main.variable(observer("data")).define("data", _data);
  main.variable(observer("color")).define("color", ["d3"], _color);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  return main;
}
