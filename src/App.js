import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import SchoolContent from './SchoolContent'

import programsData from '../college-search-frontend/programs.json';
import schoolsData from '../college-search-frontend/ma_schools.json'
import { Space, Card, Button } from 'antd';
import { Radio } from 'antd';
import { Table } from 'antd';

const columns = [
  {
    title: 'School Name',
    dataIndex: 'INSTNM',
    key: 'INSTNM',
  },
  {
    title: 'Location',
    dataIndex: 'CITY',
    key: 'CITY',
  },
  {
    title: 'Zip Code',
    dataIndex: 'ZIP',
    key: 'ZIP',
  },
];

function App (){
    return (
      <div>
        <div className="Radio Group">
          {/* <Radio.Group onChange={this.onChange} value={this.state.value}>
            <Radio value={1}>School Name</Radio>
            <Radio value={2}>ZipCode</Radio>
            <Radio value={3}>SAT Average</Radio>
            <Radio value={4}>Admissions Rate</Radio>
          </Radio.Group> */}
        </div>
        <TableView></TableView>
        <div className="SpaceGroup">
          {/* <Space direction="vertical" size="large">
          {DataToDisplay[0].map((school)=>(
            <SchoolContent 
            key = {school.INSTNM}
            name = {school.INSTNM}
            admissionsRate = {school.ADM_RATE}
            city = {school.CITY}
            website = {school.INSTURL}
            SATAverage = {school.SAT_AVG}
            zipCode = {school.ZIP}
            programs = {school.PROGRAMS}
            CCClassification = {school.CCSIZSET}
            />
          ))}
          </Space> */}
        </div>
      </div>
    );
  }

  export default App;

  function TableView(){
    return <div>
      <Table 
        columns={columns} 
        expandable={{
        expandedRowRender: school =>
         <p style={{ margin: 0 }}>
           <Button href={school.INSTURL} target="_blank" rel="noopener noreferrer" size="medium" variant="outlined">
            Click me
           </Button>
           
         </p>,
        }}
        dataSource={schoolsData} 
        rowKey={"INSTNM"}
        />
    </div>;
  }