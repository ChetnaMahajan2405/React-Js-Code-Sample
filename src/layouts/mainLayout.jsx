/**
 *  Imports
 */
import React from 'react';
import { Header, Tile } from '../components/common';
import { data } from '../constants';
import '../components/index.css';


/**
 *  Parent container for all child routes with header and footer fixed
 */
const MainLayout = ({ children }) => ({
  render() {
    return (
      <div className="container-fluid" style={{ backgroundColor: 'black', height: '100%', width: '100%' }}>
        <Header />
        {children}
        <div className="carousel">
          {data.map((d, key) => (
            <Tile header={d.header} text={d.text} key={d.header} path={`tile${key+1}`}/>
          ))}
        </div>
      </div>
    );
  }
});

export default MainLayout;
