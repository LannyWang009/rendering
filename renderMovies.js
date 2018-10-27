
function renderMovies (movies) {
  var board = ''
  for (var i = 0; i < movies.length; i++) {
    board += `
    <br/>
      <div style=" display: flex;
      flex-direction: row;
      width: 400px;
      height: 200px;
      background-color: grey;
      border-radius:5%;
      ">
        <div style="flex:1;
        background-image: url(${movies[i].poster});
        background-position: center center;
        background-repeat: no-repeat;
        background-size: contain;
        margin:10px 10px 10px 10px;">
        </div>

        <div style="flex:1.7;
        background-color: rgba(228,224,216,0.71);
        border-radius:5%;
        margin:10px 10px 10px 10px;
        display:flex;
        flex-direction:column;
        justify-content: between;">
          <div style="flex:1;
          color:black;
          margin-left:20px;
          margin-top:10px;">
            <p style="font-size:15px; line-height:20%;">${movies[i].title}</p>
            <p style="font-size:8px; line-height:20%;">${movies[i].year}</p>
          </div>
          <div style="flex:1;
          color:grey;
          font-size:20px;
          margin-left:20px;
          margin-top:5px;">
            <p style="line-height:20%;">IMDB:<p>
            <p style="line-height:20%;">${movies[i].imdbRating}/10<p>
          </div>
          <div style="flex:1;
          color:grey;
          font-size:20px;
          margin-left:20px;
          margin-top:5px;">
            <p style="line-height:20%;">Rotten Tomatoes:<p>
            <p style="line-height:20%;">${movies[i].rottenTomatoesRating * 100}%<p>
          </div>


        </div>
        </div>
        
        

    <br/>
    <br/>
    `
  }
  return board;
}

function movies () {
  var content = document.getElementById('content')

  var moviesAbstraction = [
    {
      title: 'The Dark Knight',
      year: 2008,
      imdbID: 'tt0468569',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.94
    },
    {
      title: 'The Dark Knight Rises',
      year: 2012,
      imdbID: 'tt1345836',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg',
      imdbRating: 8,
      rottenTomatoesRating: 0.82
    },
    {
      title: 'The Incredibles',
      year: 2004,
      imdbID: 'tt0317705',
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg',
      imdbRating: 9,
      rottenTomatoesRating: 0.91
    }
  ]

  content.innerHTML = renderMovies(moviesAbstraction)
}
