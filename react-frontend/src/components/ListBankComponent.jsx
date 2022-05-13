import React, { Component } from 'react';
import BankService from '../services/BankService';

class ListBankComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banks: []
    }
    this.addBank = this.addBank.bind(this);
    this.editBank = this.editBank.bind(this);
    this.deleteBank = this.deleteBank.bind(this);
  }

  deleteBank(bankID){
    BankService.deleteBank(bankID).then(res =>{
      this.setState({banks :this.state.banks.filter(bank => bank.bankID !== bankID )});
    });
  }

  editBank(bankID){
    this.props.history.push(`/update-bank/${bankID}`);
  }

  componentDidMount() {
    BankService.getBanks().then((res) => {
      this.setState({ banks: res.data });
    });
  }

  addBank(){
    this.props.history.push('/add-bank');
  }

  render() {
    return (
      <div><br/>
        <h2 className='text-center'> Bank List</h2>
        <div className='row'>
          <button className='btn btn-primary' onClick={this.addBank}> Add Bank</button>
        </div><br/>
        <div className='row'>
          <table className='table table-striped table-bordered text-left'>
            <thead>
              <tr>
                <th>Bank Id</th>
                <th>Bank Name</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {
                this.state.banks.map(
                  bank =>
                    <tr key={bank.bankID}>
                      <td>{bank.bankID}</td>
                      <td>{bank.bankName}</td>
                      <td>
                        <button onClick={()=>this.editBank(bank.bankID)} className='btn btn-info' ><i className='fa fa-edit m-1'></i></button>
                        <button onClick={()=>this.deleteBank(bank.bankID)} style={{margin:'10px'}} className='btn btn-danger' ><i className='fa fa-trash m-1'></i></button>
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

export default ListBankComponent;