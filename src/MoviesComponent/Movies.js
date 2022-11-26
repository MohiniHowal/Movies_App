import React from 'react';
import MoviesData from './MoviesData.json';
import { intToRoman } from './Common.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movies.css';
function Movies() {
  const DisplayData = MoviesData.results.map((info) => {
    let episodeId = intToRoman(info.episode_id);
    return (
      <tr>
        <td>EPISODE {info.episode_id}</td>
        <td>
          Episode {intToRoman(info.episode_id)} - {info.title}
        </td>
        <td>{info.release_date}</td>
      </tr>
    );
  });

  return (
    <div class="container">
      <div id="header"><img src={"https://www.google.com/imgres?imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F62%2F873%2Fpng-transparent-computer-icons-hollywood-film-directory-art-movie-icon-miscellaneous-television-film.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-ngpmk&tbnid=jKFupQP9424DlM&vet=12ahUKEwjoprGB0Mz7AhVGErcAHZqgCBQQMygXegUIARD1AQ..i&docid=e1LubnT9XMK8AM&w=920&h=512&q=movies%20icon%20png&ved=2ahUKEwjoprGB0Mz7AhVGErcAHZqgCBQQMygXegUIARD1AQ"} alt="BigCo Inc. logo"/></div>
      <table className="table table-striped">
        <thead></thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Movies;
