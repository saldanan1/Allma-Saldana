import React from 'react';
// import Mongoose from 'mongoose'

import './App.css';
import 'antd/dist/antd.css';

import TableView from './TableView'
import MapView from './MapView'

// const Mongoose = require('mongoose')
// Mongoose.connect('mongodb+srv://paperlessparts:4G40BaeB7GBCScfS@cluster0.5syzy.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

function App (){
    return (
      <div>
        <TableView/>
      </div>
    );
  }
  export default App;
  
