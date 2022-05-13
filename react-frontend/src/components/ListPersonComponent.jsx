import React, { Component } from 'react';
import PersonService from '../services/PersonService';

class ListPersonComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: []
    }
    this.addPerson = this.addPerson.bind(this);
    this.editPerson = this.editPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  deletePerson(personID) {
    PersonService.deletePerson(personID).then(res => {
      this.setState({ persons: this.state.persons.filter(person => person.personID !== personID) });
    });
  }

  editPerson(personID) {
    this.props.history.push(`/update-person/${personID}`);
  }

  componentDidMount() {
    PersonService.getPersons().then((res) => {
      this.setState({ persons: res.data });
    });
  }

  addPerson() {
    this.props.history.push('/add-person');
  }

  render() {
    return (
      <div><br />
        <h2 className='text-center'> Person List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addPerson}> Add Person</button>
        </div><br />
        <div className=''>
          <table className='table table-striped table-bordered text-left'>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Date of Birth</th>
                <th>Phone Number</th>
                <th>NIC</th>
                <th>Gender</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.persons.map(
                  person =>
                    <tr key={person.personID}>
                      <td>{person.firstName}</td>
                      <td>{person.lastName}</td>
                      <td>{person.dob.substring(0, 10)}</td>
                      <td>{person.phoneNum}</td>
                      <td>{person.nic}</td>
                      <td>{person.gender}</td>
                      <td>{person.address}</td>
                      <td>
                        <button onClick={() => this.editPerson(person.personID)} className='btn btn-info' ><i className='fa fa-edit m-1'></i></button>
                        <button onClick={() => this.deletePerson(person.personID)} style={{ margin: '10px' }} className='btn btn-danger' ><i className='fa fa-trash m-1'></i></button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListPersonComponent;