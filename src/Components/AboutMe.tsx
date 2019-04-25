import * as React from "react";
import Card from "reactstrap/lib/Card";
import {CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Container} from "reactstrap";

class AboutMe extends React.Component {
    render(){
        return (

                <Card>
                    <CardBody >
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitais nisi ut aliquip ex \sse cillum dolore eu fugiat nulla pariatur. Exce\".</CardText>
                    </CardBody>
                </Card>

        )
    }
}
export default AboutMe;
