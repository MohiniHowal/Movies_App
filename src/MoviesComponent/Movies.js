import * as React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
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
    MoviesData.results.sort((a, b) => a.release_date - b.release_date);
  };

  const [search, setSearch] = React.useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  /*const [sorting, setSorting] = useState({
    key: 'episode_id',
    ascending: true,
  });
  const [currentEpisode, setCurrentEpisode] = useState(MoviesData.results);

  useEffect(() => {
    const currentEpisodeCopy = [...currentEpisode];

    const sortedCurrentEpisode = currentEpisodeCopy.sort((a, b) => {
      currentEpisode.sort((a,b) => a.episode_id - b.episode_id)
    });

    setCurrentEpisode(
      sorting.ascending ? sortedCurrentEpisode : sortedCurrentEpisode.reverse()
    );
  }, [currentEpisode, sorting]);

  function applySorting(key, ascending) {
    setSorting({ key: key, ascending: ascending });
  }*/

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
          No Movie selected
        </div>
      </div>
    </div>
  );
}

export default Movies;
