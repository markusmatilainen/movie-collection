import './App.css';

function App() {

  const render = () => {
    const searchTitle = document.getElementById('searchTitle').value;
    const searchYear = document.getElementById('searchYear').value;
    const apiData = {
      url: 'http://www.omdbapi.com',
      title: searchTitle,
      year: searchYear,
      key: '62c49227'
    }

    const {url, title, year, key} = apiData
    const apiUrl = `${url}/?t=${title}&y=${year}&apikey=${key}`

    fetch(apiUrl)
    .then( (data) => data.json() )
    .then( (movie) => createHtml(movie) )

    const createHtml = (data) => {
      const html = `
        <img src=${data.Poster}>
        <div class="info">
          <p class="title">${data.Title}</p>
          <p class="year">${data.Year}</p>
          <p class="genre">${data.Genre}</p>
          <p class="runtime">${data.Runtime}</p>
          <p class="plot">${data.Plot}</p>
        </div>
      `
      
      const movieDiv = document.querySelector('.movie')
      movieDiv.innerHTML = html
    }
  }

  return (
    <div className="App">
      <div class="inputs">
        <input type="text" id="searchTitle" name="searchTitle" placeholder="Movie title" />
        <input type="text" id="searchYear" name="searchYear" placeholder="Release year (optional)" />
        <input type="button" onClick={render} value="Search" />
      </div>
      <div class="movie"></div>
    </div>
  );
}

export default App;