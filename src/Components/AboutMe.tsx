import * as React from "react";
import Card from "reactstrap/lib/Card";
import {CardBody, CardSubtitle, CardText, CardTitle, Col} from "reactstrap";
import * as data from './../Resources/aboutme.json';

class AboutMe extends React.Component {
    render(){
        return (
                <Col>
                <Card>
                    <CardBody>
                        <CardTitle>{data.name}</CardTitle>
                        <CardSubtitle>{data.location}</CardSubtitle>
                        <CardText>{data["about me"]}</CardText>
                    </CardBody>
                </Card>
                </Col>

        )
    }
}
export default AboutMe;
