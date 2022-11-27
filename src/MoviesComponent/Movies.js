import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import MoviesData from './MoviesData.json';
import { intToRoman } from './Common.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import './Movies.css';

function Movies() {
  const options = ['one', 'two', 'three'];

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
      <div className="row">
        <div className="col-md-12">
          <Dropdown options={options} value="" placeholder="Select an option" />
        </div>
      </div>
      <table className="table table-striped">
        <thead></thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default Movies;
