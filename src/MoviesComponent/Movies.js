import React from 'react';
import MoviesData from './MoviesData.json';
function Movies() {
  const DisplayData = MoviesData.results.map((info) => {
    return (
      <tr>
        <td>EPISODE {info.episode_id}</td>
        <td>Episode - {info.title}</td>
        <td>{info.release_date}</td>
      </tr>
    );
  });

  return (
    <div>
      <table class="table table-striped">
        <thead></thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Movies;
