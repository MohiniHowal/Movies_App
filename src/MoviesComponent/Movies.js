import React from 'react';
import MoviesData from './MoviesData.json';
import { intToRoman } from './Common.js';
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
      <table className="table table-striped">
        <thead></thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Movies;
