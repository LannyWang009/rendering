
function renderCircles (circles) {
  var draw = ''
  // HINT: You probably need to write a for loop!
  //       Or, if you're feeling fancy, use .map()
  for (var i = 0; i < circles.length; i++) {
    draw += `
        <div class="text-center mt-5">
            <div style="height: ${circles[i].radius}px; 
            width: ${circles[i].radius}px; 
            border-radius: 50%; 
            background-color: ${circles[i].color}; 
            display:block;
            margin:0 auto 0 auto;"></div>
        </div>
    `
  }

  return draw
}

function circles () {
  var content = document.getElementById('content')

  var circlesAbstraction = [
    {
      radius: 50,
      color: '#FF00FF'
    },
    {
      radius: 30,
      color: '#FF99AA'
    },
    {
      radius: 60,
      color: '#0000FF'
    },
    {
      radius: 10,
      color: '#000000'
    }
  ]

  content.innerHTML = renderCircles(circlesAbstraction)
}
