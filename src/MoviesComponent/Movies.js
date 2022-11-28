import * as React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Moment from 'moment';
import MoviesData from './MoviesData.json';
import { intToRoman } from './Common.js';
import './Movies.css';

function Movies() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleMenuOne = () => {
    setOpen(false);
    MoviesData.results.sort((a, b) => a.episode_id - b.episode_id);
  };

  const handleMenuTwo = () => {
    setOpen(false);
    MoviesData.results.sort(
      (a, b) =>
        new Moment(a.release_date).format('YYYYMMDD') -
        new Moment(b.release_date).format('YYYYMMDD')
    );
  };

  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const DisplayData = MoviesData.results
    .filter(
      (row) =>
        row.episode_id
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        row.title
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase()) ||
        row.release_date
          .toString()
          .toLowerCase()
          .includes(search.toString().toLowerCase())
    )
    .map((info) => {
      let episodeId = intToRoman(info.episode_id);

      const fetchDetails = (e) => {
        e.preventDefault();
        const h1 = document.getElementById('tab-content');
        h1.remove();
        const node = document.createElement('div');
        var br = document.createElement('br');
        var br2 = document.createElement('br');
        var bold = document.createElement('strong');
        node.setAttribute('id', 'tab-content');
        const textnode1 = document.createTextNode(
          'Episode' + intToRoman(info.episode_id) + ' - ' + info.title
        );
        const textnode2 = document.createTextNode(info.opening_crawl);
        const textnode3 = document.createTextNode(
          'Directed By:    ' + info.director
        );
        bold.appendChild(textnode1);
        node.appendChild(bold);
        node.appendChild(br);
        node.appendChild(textnode2);
        node.appendChild(br2);
        node.appendChild(textnode3);
        document.getElementById('rightSideContainer').append(node);
      };

      return (
        <tr onClick={fetchDetails} data-tab={info.episode_id}>
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
        <div className="col-md-1 padding-left-5">
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
        <div className="col-md-11 padding-left-5">
          <input
            id="searchableTable"
            name="searchTable"
            type="text"
            className="form-control"
            placeholder="Type to Search..."
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="row">
        <div id="leftSideContainer" className="col-md-6">
          <table className="table table-striped" id="movieTable">
            <thead></thead>
            <tbody>{DisplayData}</tbody>
          </table>
        </div>
        <div id="rightSideContainer" className="col-md-6">
          <div id="tab-content">
            <span className="noMovieSelected">No Movie selected</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
