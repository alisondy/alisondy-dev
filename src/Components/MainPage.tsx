import React from "react";
import {Container, Row, Col, CardBody, Card, CardImg} from 'reactstrap';
import AboutMe from "./AboutMe";
import SkillsTable from "./SkillsTable";

class MainPage extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row noGutters={false}>
                    <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Card>
                            <CardImg src="https://media.licdn.com/dms/image/C4E03AQHYA7Jp9HFc5w/profile-displayphoto-shrink_200_200/0?e=1560988800&v=beta&t=akYMwrvYPCyFg7Miu6lY9SF-tQRRqxhzjlCmvF75sDQ" alt="Card image cap" />
                        </Card>
                    </Col>
                    <Col>
                        <AboutMe/>
                    </Col>
                </Row>
                <br/>
                <SkillsTable/>
            </Container>

        )
    }
}

export default MainPage
