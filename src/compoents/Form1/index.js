import React, { Component } from 'react'
import Header from '../Header/index';
import { Form, FormGroup, Label, Col, Row,Button } from 'react-bootstrap';

export default class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telNo: '',
            email : ''
        }
    }
    render() {
        return (
            <div className="row col-12">
                <h1> Form 1 </h1>
                <div className="row col-12">

                    <div className="col-12 col-md-9">

                        <Form onSubmit={this.handleSubmit}>

                            {/* FirstName */}
                            <Form.Group as={Row} >
                                <Form.Label htmlFor="firstName" column sm="2">First Name</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" id="firstName" name="firstName"
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                    // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Form.Group>

                            {/* LastName */}
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="lastName" column sm={2}>Last Name</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                    // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Form.Group>

                            {/* Mobile No */}
                            <FormGroup as={Row}>
                                <Form.Label htmlFor="telePhone" column sm={2}>Telephone No.</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="tel" id="telePhone" name="telNo"
                                        placeholder="Telephone No"
                                        value={this.state.telNo}
                                    //onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            {/* Email */}
                            <FormGroup as={Row}>
                                <Form.Label htmlFor="email" column sm={2}>Email.</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="email" id="email" name="email"
                                        placeholder="Email Address"
                                        value={this.state.email}
                                    //onChange={this.handleInputChange}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Submit Application
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
