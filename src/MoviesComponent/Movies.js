import React from 'react';
import { useEffect, useRef } from 'react';
import MoviesData from './MoviesData.json';
import { intToRoman } from './Common.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Dropdown from 'react-bootstrap/Dropdown';
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

  const trigger = () => {};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Dropdown
            trigger={<button>Dropdown</button>}
            menu={[
              <button onClick={handleMenuOne}>Menu 1</button>,
              <button onClick={handleMenuTwo}>Menu 2</button>,
            ]}
          />
          <div className="dropdown">
            {React.cloneElement(trigger, {
              onClick: handleOpen,
            })}
            {open ? (
              <ul className="menu">
                {menu.map((menuItem, index) => (
                  <li key={index} className="menu-item">
                    {React.cloneElement(menuItem, {
                      onClick: () => {
                        menuItem.props.onClick();
                        setOpen(false);
                      },
                    })}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
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
