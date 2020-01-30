import * as React from "react";
import Card from "reactstrap/lib/Card";
import {CardBody, CardHeader, CardImg, CardSubtitle, CardText, CardTitle, Col, Container} from "reactstrap";

class AboutMe extends React.Component {
    render(){
        return (

                <Card>
                    <CardBody >
                        <CardTitle>Welcome to my Ramblings</CardTitle>
                        <CardSubtitle>Yep, that's right.</CardSubtitle>
                        <CardText>On this website I ramble about all 
                            manner of things including (but not limited to):
                            <br/>
                            <ul>
                            <li>Tech</li>
                            <li>Spicy food </li>
                            <li>Memes</li>
                            </ul>
                            <br/>
                            <small>NB: My ramblings are coherent. I have the right to move, 
                                remove, dislocate and discombombulate any content that it's
                                deemed fit to do so at my discretion. By continuing to view
                                my website, you agree that this is just so.</small>
                        </CardText>
                    </CardBody>
                </Card>

        )
    }
}
export default AboutMe;
