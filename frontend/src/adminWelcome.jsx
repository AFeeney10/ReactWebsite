import React from "react";
import './admin.css';
import {NavBar, AdminNavBar} from './nav.jsx';

export function StudentInfo() {
  return (
    <main style={{ color: '#090503ff' }}>
      <AdminNavBar></AdminNavBar>
      <div className="aboutHeading">
        <h1 className="title">Welcome To The Admin Page</h1>
        <p>This page will allow you to add, delete, and edit products</p>
      </div>

      <div style={{ width: '100%', height: '20vw', backgroundColor: 'rgba(255, 192, 203, 0.3)', position: 'relative' }}>
        <img id="bear" src="../../images/characters/chefBearNoBG.png" alt="bear dressed as chef" style={{ height: '19vw', width: 'auto' }} />
        <img id="bear" src="../../images/characters/greenShirtBearNoBG.png" alt="bear dressed as chef" style={{ height: '19vw', width: 'auto' }} />
        <img id="bear" src="../../images/characters/coffeeBearNoBG.png" alt="bear dressed as chef" style={{ height: '19vw', width: 'auto' }} />
        <img id="bear" src="../../images/characters/chefBearNoBG.png" alt="bear dressed as chef" style={{ height: '19vw', width: 'auto' }} />
        <img id="bear" src="../../images/characters/greenShirtBearNoBG.png" alt="bear dressed as chef" style={{ height: '19vw', width: 'auto' }} />
        <img id="bear" src="../../images/characters/coffeeBearNoBG.png" alt="bear dressed as chef" style={{ height: '19vw', width: 'auto' }} />

      </div>

      <div className="aboutHeading">
      </div>
    </main>
  );
}