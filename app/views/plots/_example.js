function trisurf(Tri, X, Y, Z, C) {
  var data = {
    type: 'mesh3d',
    x: X,
    y: Y,
    z: Z,
    i: Tri.map(function(f) { return f[0] }),
    j: Tri.map(function(f) { return f[1] }),
    k: Tri.map(function(f) { return f[2] }),
    facecolor: C,
    flatshading: true,
  }
  
  Plotly.newPlot('pomp', [data])
}


//Example usage
trisurf(
  [
    [0, 1, 2],
    [0, 2, 3],
    [0, 3, 1],
    [1, 2, 3]
  ], 
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1],
  [ 
    'rgb(0, 0, 0)',
    'rgb(255, 0, 0)',
    'rgb(0, 255, 0)',
    'rgb(0, 0, 255)'
  ])

