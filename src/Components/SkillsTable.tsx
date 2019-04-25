import * as React from "react";
import {Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardTitle, Col, Row, Table} from "reactstrap";
import * as data from './../Resources/skills.json';

interface skills {
    name: string,
    rating: number,
    description: string,
    examples: string,


}
class SkillsTable extends React.Component {

    render() {
        return (
            <Row noGutters={true}>
            {data.skills.map(function(item: skills){
                return (
                 <Col sm='6'>
                    <Card>
                        <CardHeader>{item.name}</CardHeader>
                        <CardSubtitle>{item.examples}</CardSubtitle>
                        <CardBody>{item.description}</CardBody>
                        <CardFooter>{item.rating}/10</CardFooter>
                    </Card>
                 </Col>
                )
            })}
            </Row>
        )
    }
}

export default SkillsTable;
