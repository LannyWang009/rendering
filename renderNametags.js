
function renderNametags (nametags) {
  var canvas = ''
  for (var i = 0; i < nametags.length; i++) {
    canvas += `
        <div style="display:flex; 
        flex-direction: column;
        width: 200px;
        height: 100px;
        background-color: white;
        border: 1px solid black;
        ">
          <div style="flex:1; 
          text-align: center; 
          background-color: blue; 
          color: white;
          border: 1px solid black;">
          Hello, my name is</div>
          <div style="color: black; 
          text-align: center;
          border: 1px solid black;
          flex: 2">${nametags[i]}</div>
        </div>
        <br/>
    
    `
  }
  return canvas
}

function nametags () {
  var content = document.getElementById('content')

  var nametagsAbstraction = [
    'Kamilah',
    'Kim',
    'Stuart',
    'Ron',
    'Krissy'
  ]

  content.innerHTML = renderNametags(nametagsAbstraction)
}
