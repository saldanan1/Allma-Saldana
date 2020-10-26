import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import Participants from './Participants';

export default function InCardData(incidentObj){

    //Data Sanitization
    let severity;
    if (incidentObj.incidentObj.severity !== null){
      severity = incidentObj.incidentObj.severity.name
    }else{
      severity = "No Data"
    }

    let participants;
    var people =[]
    if (incidentObj.incidentObj.participants.length > 0){
      participants = incidentObj.incidentObj.participants
      for (var i = 0; i < participants.length; i++) {
        people.push(<Participants participants = {participants[i]}/>);
      }
    }else{
      participants = "No Participants"
    }

    let channelName;
    if (incidentObj.incidentObj.channelName !== null){
      channelName = incidentObj.incidentObj.channelName
    }else{
      channelName = "No Channel Name"
    }

    let createdOn;
    if (incidentObj.incidentObj.createdOn !== null){
      var date = new Date(incidentObj.incidentObj.createdOn)
      createdOn = date.toString()
    }else{
      createdOn = "No Time Data"
    }

    let duration;
    if (incidentObj.incidentObj.duration !== null){
      var seconds = Number(incidentObj.incidentObj.duration);
      var d = Math.floor((seconds % 31536000) / 86400); 
      var m = Math.floor(seconds % 3600 / 60);
      var s = Math.floor(seconds % 3600 % 60);

      var hDisplay = d > 0 ? d + (d === 1 ? " day, " : " days, ") : "";
      var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
      var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

      duration = hDisplay + mDisplay + sDisplay; 
    }else{
      createdOn = "No Time Data"
    }


    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Severity"
                value={severity}
                precision={0}
                valueStyle={{ color: "black" }}
              />
            </Card>
            <Card>
              <Statistic
                title="Duration"
                value={duration}
                precision={0}
                valueStyle={{ color: "black" }}
              />
            </Card>
            <Card >
              {people}
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Channel Name"
                value={channelName}
                precision={0}
                valueStyle={{color: "black"}}
              />
            </Card>
            <Card>
              <Statistic
                title="Created On"
                value={createdOn}
                precision={0}
                valueStyle={{color: "black"}}
              />
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row gutter={10} type="flex">
            <Col span={24}>
                {/* <MapView
                incidentObj={incidentObj.incidentObj}/> */}
            </Col>
        </Row>
        <br></br>
        <Row justify="center">
            {/* <Button href={"http://"+incidentObj.incidentObj.INSTURL} target="_blank">Check out {incidentObj.incidentObj.INSTNM}'s Website</Button> */}
        </Row>
      </div>
    )
  }