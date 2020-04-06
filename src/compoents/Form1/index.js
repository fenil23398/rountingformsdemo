import React, { Component } from 'react'
import Header from '../Header/index';
import { Form, FormGroup, Label, Col, Row, Button, FormFeed } from 'react-bootstrap';

export default class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            telNo: '',
            email: '',
            touched: {
                firstName: false,
                lastName: false,
                telNo: false,
                email: false
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    //field inside that event is necessary as event is necessary to call it only once
    handleBlur = (field) => {
        console.log("handleBlur field", field, "event ");
        this.setState({
            touched: {
                ...this.state.touched,
                [field]: true
            }
        })
    }
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        //console.log("Inside HandleInputChnage name ",name,"Value ",value);
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {

    }
    validate = (firstName, lastName, telNo, email) => {
        console.log("Inside Validate");
        const errors = {
            firstName: '',
            lastName: '',
            telNo: '',
            email: ''
        }
        const touched = { ...this.state.touched }
        if (touched.firstName && (firstName + "").length < 3)
            errors.firstName = 'First Name must be more than 3 Characters'
        console.log("Error Object ", errors)
        return errors;
    }
    render() {
        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.telNo, this.state.email);
        //{console.log("Inside Render Error ",errors.firstName)}
        return (
            <div className="row col-12">
                <h1> Form 1 </h1>
                <div className="row col-12">
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handleSubmit}>

                            {/* FirstName */}
                            {/* For OnBlur need to use ES6 syntax as i need to pass argument */}
                            <Form.Group as={Row} >
                                <Form.Label htmlFor="firstName" column sm="2">First Name</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" id="firstName"
                                        name="firstName"
                                        required
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        isValid={
                                            this.state.touched.firstName
                                            &&
                                            errors.firstName === ''}
                                        isInvalid={errors.firstName !== ''}
                                        onChange={this.handleInputChange}
                                        onBlur={() => this.handleBlur('firstName')}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Col>
                            </Form.Group>

                            {/* LastName */}
                            <Form.Group as={Row}>
                                <Form.Label htmlFor="lastName" column sm={2}>Last Name</Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" id="lastName" name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        onChange={this.handleInputChange}
                                        onBlur={() => this.handleBlur('lastName')}
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
                                        onChange={this.handleInputChange}
                                        onBlur={() => this.handleBlur('telNo')}
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
                                        onChange={this.handleInputChange}
                                        onBlur={() => this.handleBlur('email')}
                                    />
                                </Col>
                            </FormGroup>

                            <FormGroup as={Row}>
                                <Col md={{ size: 10, offset: 2 }}>
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
