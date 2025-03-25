// Create a new file called server.js in the mapa 1 project folder
const express = require('express');
const app = express();

// Assuming the tangled-tree-visualization API endpoint is /trees
app.get('/trees', (req, res) => {
  // TO DO: implement the API endpoint logic here
  // For now, let's just return a sample response
  res.json({
    "trees": [
      {
        "id": 1,
        "name": "Tree 1",
        "children": [
          {
            "id": 2,
            "name": "Child 1"
          },
          {
            "id": 3,
            "name": "Child 2"
          }
        ]
      },
      {
        "id": 4,
        "name": "Tree 2",
        "children": [
          {
            "id": 5,
            "name": "Child 3"
          },
          {
            "id": 6,
            "name": "Child 4"
          }
        ]
      }
    ]
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});