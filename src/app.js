import React, { useEffect, useState, useReducer } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import { Router } from '@reach/router';
import axios from 'axios';

const App = () => {
  return (
    <div>
      <div>App</div>
    </div>
  );
};

// ReactDOM.render(<App />, document.getElementById('app'));

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
