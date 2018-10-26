
function renderStudents (students) {
  var canvas = '<h1>Roll Call</h1> '
  for (var i = 0; i < students.length; i++) {
    if (students[i].isPresent === true) {
      canvas += `
        <div style="
        width: 200px;
        height: 100px;
        background-color: green;
        border: 1px solid black;
        color: black;
        text-align: center;
        display: block;
        ">
        <p style="font-size: 30px">${students[i].name}</p>
        <p style="font-size: 20px"> Present </p>
        <br/>
        `
    } else {
      canvas += `
        <div style="
        width: 200px;
        height: 100px;
        border: 1px solid black;
        color: black;
        background-color: red;
        display: block;
        text-align: center;
        ">
        <p style="font-size: 30px">${students[i].name}</p>
        <p style="font-size: 20px"> Absent </p>
        <br/>
        `
    }
  }
  return canvas
}

function students () {
  var content = document.getElementById('content')

  var studentsAbstraction = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  content.innerHTML = renderStudents(studentsAbstraction)
}
