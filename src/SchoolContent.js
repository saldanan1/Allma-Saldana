import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { PageHeader } from 'antd';

import './App.css';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';

export default function SchoolContent(props){
    return(
        <div>
            <PageHeader
                className="site-page-header"
                title={props.name}
                subTitle= {props.city}
            />
            <Card  style={{ width: 600 }}>
                <p>ZIP: {props.zipCode}</p>
                <p>SAT: {props.SATAverage}</p>
                <p>ADMIN RATE: {props.admissionsRate}</p>
            </Card>
        </div>
    )
}