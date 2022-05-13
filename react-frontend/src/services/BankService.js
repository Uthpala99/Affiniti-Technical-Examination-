import axios from "axios";

const BANK_API_BASE_URL = "http://localhost:8080/api/v1/banks";

class BankService  {

    getBanks(){
        return axios.get(BANK_API_BASE_URL);
    }

    createBank(bank){
        return axios.post(BANK_API_BASE_URL , bank);
    }

    getBankById(bankId){
        return axios.get(BANK_API_BASE_URL + '/' + bankId );
    }

    updateBank(bank , bankId){
        return axios.put(BANK_API_BASE_URL + '/' + bankId , bank );
    }

    deleteBank(bankId){
        return axios.delete(BANK_API_BASE_URL + '/' + bankId );
    }
}

export default new  BankService();