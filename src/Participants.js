import React from 'react';
import { Statistic, Image, Row, Col } from 'antd';

export default function Participants(participants){
    let participantsRole;
    let participantsName;
    let participantsAvatar;
        if (participants.participants.role !== null){
                participantsRole = participants.participants.role.name
                participantsName = participants.participants.user.realName
                if (participants.participants.role.id === 1){
                    participantsAvatar = participants.participants.user.avatarUrl
                }
        }else{ 
            participantsName = "No Participant" 
            participantsRole = "No Role" 
        }
    return (
        <div>
            <Row gutter={16}>
                <Col span={12}>
            <Statistic
                    title={participantsRole}
                    value={participantsName}
                    precision={0}
                    valueStyle={{color: "black"}}
            />
            </Col>
            <Col span ={12}>
            <Image
                src={participantsAvatar}
            />
            </Col>
            </Row>
            
        </div>
    )
}