import React from 'react';
import MapView from './MapView'
import { Statistic, Card, Row, Col } from 'antd';
import { Progress } from 'antd';
import { Button } from 'antd'
export default function InCardData(schoolObj){
    
    let satColor = ''
    if (schoolObj.schoolObj.SAT_AVG === "NULL"){
      schoolObj.schoolObj.SAT_AVG = "No Data"
    }
    if (schoolObj.schoolObj.SAT_AVG < 1060){
      satColor = '#cf1322'
    }
    if (schoolObj.schoolObj.SAT_AVG > 1060){
      satColor = '#3f8600'
    }

    let actualADMRate;
    if (schoolObj.schoolObj.ADM_RATE === "NULL"){
      actualADMRate = "No Data"
    }
    else{
      actualADMRate = schoolObj.schoolObj.ADM_RATE*100
    }
    let admColor = "#000000";
    let showInfo = false
    if (actualADMRate > 50){
      admColor = '#3f8600'
      showInfo = true
    }
    if (actualADMRate < 50){
      admColor = '#cf1322'
      showInfo = true
    }

    let degree = ""
    if(schoolObj.schoolObj.HIGHDEG === "0"){
      degree = "Non-Degree Granting"
    }else if(schoolObj.schoolObj.HIGHDEG === "1"){
      degree = "Certificate Degree"
    }else if(schoolObj.schoolObj.HIGHDEG === "2"){
      degree = "Associate Degree"
    }else if(schoolObj.schoolObj.HIGHDEG === "3"){
      degree = "Bachelor's Degree"
    }else if(schoolObj.schoolObj.HIGHDEG === "4"){
      degree = "Graduate Degree"
    }
    let localDescription = ""
    if (schoolObj.schoolObj.LOCALE === "11"){
      localDescription = "A large city, with a population of 250,000 or more"
    }else if (schoolObj.schoolObj.LOCALE === "12"){
      localDescription = "A mid-sized city, with a population of at least 100,000 but less than 250,000"
    }else if (schoolObj.schoolObj.LOCALE === "13"){
      localDescription = "A small city, with a population of less than 100,000"
    }else if (schoolObj.schoolObj.LOCALE === "21"){
      localDescription = "A large suburb, with a population of 250,000 or more"
    }else if (schoolObj.schoolObj.LOCALE === "22"){
      localDescription = "A mid-sized suburb, with a population of at least 100,000 but less than 250,000"
    }else if (schoolObj.schoolObj.LOCALE === "23"){
      localDescription = "A small suburb, with a population of less than 100,000"
    }else if (schoolObj.schoolObj.LOCALE === "31"){
      localDescription = "A town, in urban clusters up to 10 miles from an urbanized area"
    }else if (schoolObj.schoolObj.LOCALE === "32"){
      localDescription = "A town, in urban clusters more than 10 miles and up to 35 miles from an urbanized area"
    }else if (schoolObj.schoolObj.LOCALE === "33"){
      localDescription = "A town, in urban clusters more than 35 miles from an urbanized area"
    }else if (schoolObj.schoolObj.LOCALE === "41"){
      localDescription = "A rural area, close to but not in an ubranized cluster or area"
    }else if (schoolObj.schoolObj.LOCALE === "42"){
      localDescription = "A rural area, distant but up to 25 miles from an urabnized cluster or area "
    }else if (schoolObj.schoolObj.LOCALE === "43"){
      localDescription = "A rural area, far and at least 25 miltes from an urbanized cluster or area"
    }
    
    return (
      <div className="site-statistic-demo-card">
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <Statistic
                title="Average SAT Scores"
                value={schoolObj.schoolObj.SAT_AVG}
                precision={0}
                valueStyle={{ color: satColor }}
              />
            </Card>
            <Card>
              <Statistic
                title="Acceptance Rate (%)"
                value={actualADMRate}
                precision={2}
                valueStyle={{color: admColor}}
              />
               <Progress 
               type="circle" 
               percent={Math.round((actualADMRate + Number.EPSILON) * 100) / 100} 
               width={60}
               strokeColor={admColor}
               showInfo={false}/>
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <Statistic
                title="Highest Degree Awarded"
                value={degree}
                precision={0}
                // valueStyle={{ fontWeight: 'bold' }}
              />
            </Card>
            <Card>
              <Statistic
                title="Surrounding Area"
                value={localDescription}
                precision={0}
              />
            </Card>
          </Col>
        </Row>
        <br></br>
        <Row gutter={10} type="flex">
            <Col span={24}>
                <MapView
                schoolObj={schoolObj.schoolObj}/>
            </Col>
        </Row>
        <br></br>
        <Row justify="center">
            <Button href={"http://"+schoolObj.schoolObj.INSTURL} target="_blank">Check out {schoolObj.schoolObj.INSTNM}'s Website</Button>
        </Row>
      </div>
    )
  }