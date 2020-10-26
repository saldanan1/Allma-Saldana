import React from 'react';
import { Carousel } from 'antd';

import incidents from './incidents.json'
import { within } from '@testing-library/react';

class QuickData extends React.Component {
    render(){

        console.log(incidents)
        var today = new Date()
        today.setDate(today.getDate()-30)
        var resolvedCount = 0;
        var unresolvedCount = 0;
        var within30Days = 0;
        var resolvedIncidents = []
        incidents.incidents.forEach((v) => (v.incidentStatusId === "RESOLVED" && resolvedIncidents.push(v) && resolvedCount++));
        incidents.incidents.forEach((v) => (v.incidentStatusId === "DECLARED" && unresolvedCount++));
        incidents.incidents.forEach((v) => (new Date(v.createdOn) > today && within30Days++));
        
        var differenceInTime = [];
        var someArr =[];
        resolvedIncidents.forEach(incident => {
            if (incident.duration !== null){
                differenceInTime.push(incident.duration)
            }
        });

        var total = 0;
        for(var i = 0; i < differenceInTime.length; i++) {
            total += differenceInTime[i];
        }
        const diffDays = Math.ceil(total / (60 * 60 * 24));
        var avgResolutionTime = diffDays / differenceInTime.length;
        var avgResolutionTime = Math.round((avgResolutionTime + Number.EPSILON) * 100) / 100

        const contentStyle = {
            height: '120px',
            color: 'black',
            lineHeight: '160px',
            textAlign: 'center',
            background: 'white',
          };
        return <div> 
            <Carousel autoplay dots={false}>
                <div>
                <h3 style={contentStyle}>Resolved Issues: {resolvedCount}</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Declared Issues: {unresolvedCount}</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Issues Created in Last 30 Days: {within30Days}</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Average Resolution Time: {avgResolutionTime} (days)</h3>
                </div>
            </Carousel>,
        </div>
    } 
}
export default QuickData;
