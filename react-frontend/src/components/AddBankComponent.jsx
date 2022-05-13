import React, { Component } from 'react'
import BankService from '../services/BankService';

export default class AddBankComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bankName: ''
        }
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.saveBank = this.saveBank.bind(this);
    }

    saveBank = (e) => {
        const bankName = document.getElementById('bankName');

        if (bankName.value === '' || bankName.value == null) {
            alert('Please enter Bank Name !')
            return false;
        } else {
            e.preventDefault();
            let bank = {
                bankName: this.state.bankName
            };
            console.log('bank =>' + JSON.stringify(bank));

            BankService.createBank(bank).then(res => {
                this.props.history.push('/banks')
            });
        }
    }

    changeBankNameHandler = (event) => {
        this.setState({ bankName: event.target.value });
    }

    render() {
        return (
            <div><br />
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' ><br />
                            <h3 className='text-center'>Add Bank</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group text-left'>
                                        <label>Bank Name : </label>
                                        <input type="text"
                                            placeholder='Bank Name'
                                            name="bankName"
                                            id="bankName"
                                            value={this.state.bankName}
                                            className='form-control'
                                            onChange={this.changeBankNameHandler}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className='btn btn-success' onClick={this.saveBank} >Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
