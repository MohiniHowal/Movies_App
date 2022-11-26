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
    <div className="container">
      <div id="header" className="col-md-12">
        <img
          src="https://stackblitz.com/files/react-hukszn/github/MohiniHowal/Movies_App/main/src/MoviesComponent/logo.png"
          alt="logo"
        />
      </div>
      <table className="table table-striped">
        <thead></thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Movies;
