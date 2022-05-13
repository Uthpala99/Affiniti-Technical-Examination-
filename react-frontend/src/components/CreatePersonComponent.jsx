import React, { Component } from 'react'
import PersonService from '../services/PersonService';
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

export default class CreatePersonComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            dob: '',
            phoneNum: '',
            nic: '',
            gender: '',
            address: ''

        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeDOBHandler = this.changeDOBHandler.bind(this);
        this.changePhoneNumHandler = this.changePhoneNumHandler.bind(this);
        this.changeNICHandler = this.changeNICHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.savePerson = this.savePerson.bind(this);
    }

    savePerson = (e) => {
        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');
        const dob = document.getElementById('dob');
        const phoneNum = document.getElementById('phoneNum');
        const phoneNum1 = document.getElementById('phoneNum').value;
        const nic = document.getElementById('nic');
        const nic1 = document.getElementById('nic').value;
        const address = document.getElementById('address');

        if (firstName.value === '' || firstName.value == null) {
            alert('Please enter Your  First Name !')
            return false;
        }
        else if (lastName.value === '' || lastName.value == null) {
            alert("Please enter Your Last Name !")
            return false;
        }
        else if (dob.value === '' || dob.value == null) {
            alert('Please enter Your Date of Birth !')
            return false;
        }
        else if (phoneNum.value === '' || phoneNum.value == null) {
            alert('Please enter Your Phone Number !')
            return false;
        }
        else if (nic.value === '' || nic.value == null) {
            alert('Please enter Your NIC Number !')
            return false;
        }
        else if (nic1.length < 10) {
            alert('Please enter a valid NIC Number !')
            return false;
        }
        else if (phoneNum1.length < 9) {
            alert('Please enter a valid Phone Number!')
            return false;
        }
        else if (address.value === '' || address.value == null) {
            alert('Please enter Address!')
            return false;
        }
        else {
            e.preventDefault();
            let person = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                dob: this.state.dob.substring(0, 10),
                phoneNum: this.state.phoneNum,
                nic: this.state.nic,
                gender: this.state.gender,
                address: this.state.address
            };
            console.log('person =>' + JSON.stringify(person));

            PersonService.createPerson(person).then(res => {
                this.props.history.push('/persons')
            });
        }

    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeDOBHandler = (event) => {
        this.setState({ dob: event.target.value });
    }

    changePhoneNumHandler = (event) => {
        this.setState({ phoneNum: event.target.value });
    }

    changeNICHandler = (event) => {
        this.setState({ nic: event.target.value });
    }

    changeGenderHandler = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }

    render() {
        return (
            <div><br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' >
                            <h3 className='text-center'>Add Person</h3>
                            <div className='card-body'>
                                <Form>
                                    <div className='form-group'>

                                        <input type="text"
                                            placeholder='First Name'
                                            name="firstName"
                                            id="firstName"
                                            value={this.state.firstName}
                                            className='form-control'
                                            onChange={this.changeFirstNameHandler}
                                            required="required"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input type="text"
                                            placeholder='Last Name'
                                            name="lastName"
                                            id="lastName"
                                            value={this.state.lastName}
                                            className='form-control'
                                            onChange={this.changeLastNameHandler}
                                            required="required"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input type="date"
                                            placeholder='Date of Birth'
                                            name="dob"
                                            id="dob"
                                            value={this.state.dob}
                                            className='form-control'
                                            onChange={this.changeDOBHandler}
                                            required
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input type="text"
                                            placeholder='Phone Number'
                                            name="phoneNum"
                                            id="phoneNum"
                                            value={this.state.phoneNum}
                                            className='form-control'
                                            onChange={this.changePhoneNumHandler}
                                            required="required"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <input type="text"
                                            placeholder='NIC'
                                            name="nic"
                                            id="nic"
                                            value={this.state.nic}
                                            className='form-control'
                                            onChange={this.changeNICHandler}
                                            required="required"
                                        />
                                    </div>

                                    <div className='form-group text-left mt-1'>
                                        <input type="radio"
                                            name="gender"
                                            id="gender"
                                            value="Male"
                                            checked
                                            className='ml-2 mr-2'
                                            onChange={this.changeGenderHandler}
                                        /><label className='mr-2' >Male</label>
                                        <input type="radio"
                                            name="gender"
                                            id="gender"
                                            value="Female"
                                            className='ml-2 mr-2'
                                            onChange={this.changeGenderHandler}
                                        /><label className='mr-2 ' >Female</label>
                                    </div>

                                    <div className='form-group'>
                                        <input type="text"
                                            placeholder='Address'
                                            name="address"
                                            id="address"
                                            value={this.state.address}
                                            className='form-control'
                                            onChange={this.changeAddressHandler}
                                            required="required"
                                        />
                                    </div>
                                    <button type="submit" className='btn btn-success' onClick={this.savePerson} >Save</button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
