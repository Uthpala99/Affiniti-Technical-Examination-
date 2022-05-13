import React, { Component } from 'react'
import BankService from '../services/BankService';

export default class UpdateBankComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            bankName: '',
        }
        this.changeBankNameHandler = this.changeBankNameHandler.bind(this);
        this.updateBank = this.updateBank.bind(this);
    }

    componentDidMount() {
        BankService.getBankById(this.state.id).then((res) => {
            let bank = res.data;
            this.setState({
                bankName: bank.bankName,
            });
        })
    }

    updateBank = (e) => {
        const bankName = document.getElementById('bankName');

        if (bankName.value === '' || bankName.value == null) {
            alert('Please enter Bank Name !')
            return false;
        } else {
            e.preventDefault();
            let bank = {
                bankName: this.state.bankName,
            };
            console.log('bank =>' + JSON.stringify(bank));

            BankService.updateBank(bank, this.state.id).then(res => {
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
                            <h3 className='text-center'>Update Person</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
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

                                    <button type="submit" className='btn btn-success' onClick={this.updateBank} >Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
