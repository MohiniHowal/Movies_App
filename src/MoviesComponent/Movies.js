import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import MoviesData from './MoviesData.json';
import { intToRoman } from './Common.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
import './Movies.css';

function Movies() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    // do something
    setOpen(false);
  };

  const handleMenuTwo = () => {
    // do something
    setOpen(false);
  };

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
    <div id="movieContainer" className="container-fluid">
      <div className="row filterRow">
        <div className="col-md-1">
          <button id="dropdownSortBy" onClick={handleOpen}>
            Sort by...
          </button>
          {open ? (
            <ul className="menu">
              <li className="menu-item">
                <button onClick={handleMenuOne}>Episode</button>
              </li>
              <li className="menu-item">
                <button onClick={handleMenuTwo}>Year</button>
              </li>
            </ul>
          ) : null}
        </div>
        <div className="col-md-11">
          <input id="searchableTable" name="searchTable" type="text" className="form-control" />
        </div>
      </div>
      <div className="row">
        <div id="leftSideContainer" className="col-md-6">
          <table className="table table-striped">
            <thead></thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        <div id="rightSideContainer" className="col-md-6">
          No Movie selected
        </div>
      </div>
    </div>
  );
}

export default Movies;
