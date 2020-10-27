import React from 'react';
import { Carousel, Badge, Row, Col, Statistic } from 'antd';


import incidents from './incidents.json'

class QuickData extends React.Component {
    render(){

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
        resolvedIncidents.forEach(incident => {
            if (incident.duration !== null){
                differenceInTime.push(incident.duration)
            }
        });

        var total = 0;
        for(var i = 0; i < differenceInTime.length; i++) {
            total += differenceInTime[i];
        }
        var diffDays = Math.ceil(total / (60 * 60 * 24));
        var avgResolutionTime = diffDays / differenceInTime.length;
        avgResolutionTime = Math.round((avgResolutionTime + Number.EPSILON) * 100) / 100

        const contentStyle = {
            height: '120px',
            color: 'black',
            lineHeight: '160px',
            textAlign: 'center',
            background: 'white',
          };
        return <div> 
            {/* Pretty way to display this data */}
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
            </Carousel>
            {/* Practical way to display this data */}

            {/* <Row justify="center" gutter={24}>
                <Col span={4}>
                    <Statistic title="Resolved Issues" value={resolvedCount}/>
                </Col>
                <Col span={4}>
                    <Statistic title="Declared Issues" value={unresolvedCount} suffix="/ 100" />
                </Col>
            </Row>
            <br></br>
            <Row justify="center" gutter={24}>
                <Col span={4}>
                    <Statistic title="Issues Created in Last 30 Days" value={within30Days} />
                </Col>
                <Col span={4}>
                    <Statistic title="Average Resolution Time" value={avgResolutionTime} suffix="days" />
                </Col>
            </Row>
            <br></br> */}
            {/* Start of Experimental way to display this data */}
            {/* <Row justify="center">
                <Badge className="site-badge-count-109" size={"large"} count={unresolvedCount} style={{ backgroundColor: '#52c41a' }} />
            </Row> */}
        </div>
    } 
}
export default QuickData;
