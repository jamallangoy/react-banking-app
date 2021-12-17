import React from 'react';
import ReactRouterDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import CreateAccount from './components/CreateAccount';
// import Login from './components/Login';
// import Account from './components/Account';
// import Deposit from './components/Deposit';
// import Withdraw from './components/Withdraw';
// import AllData from './components/AllData';
// import Context from './components/Context'
import Template from './components/Template'


const App = (props) => {
    const { useState } = React;

    const Link = ReactRouterDOM.Link

    const users = [
        {
            id: "0",
            name: "Jamall",
            balance: 100
        }
    ]
    const currentBalance = users.map((account) => {
        return account.balance
    })
    const [deposit, setDeposit] = useState('');
    const [status, setStatus] = useState('');  //--For Error handling
    const [show, setShow] = useState(true); //--For Ternary Operator (What screen to show)
    const [balance, setBalance] = useState(currentBalance);

    

    


    const validate = (field, label) => {
        if (!field) {
            console.log(field, label)
            setStatus(`Error: ${label}`)  //Fix This (Need to see the status in the console)
            console.log(status)
            setTimeout(() => setStatus(''), 3000)
            return false
        }

        return true
    }
   
    const makeDeposit = (e) => {
        e.preventDefault();
        // api.createItem(value).then((persistedItem) => {
            if (!validate(deposit,"deposit")) {
                console.log(balance, deposit)
                setBalance(balance + deposit)
                setShow(true)
                setBalance(+balance + deposit)
                clearForm();
            }
           
        // })
        
    }

    const clearForm = () => {
        setDeposit('');
        setShow(true)
    }

    return(
        <>

        {show ?(
            <>
            <Template 
                
                title={props.title}
                status={props.status}
                body={(
                    <>
                        
                        <>

                            <div style={{fontSize:"12rem"}}>
                                ${balance}
                            </div>
                    
                            <form onSubmit={makeDeposit}>
                                    <label>Make your deposit</label>
                                <input
                                    type="number"
                                    className="form-control deposit"
                                    id="deposit"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter amount"
                                    value={deposit}
                                    onChange={e => setDeposit(Number(e.currentTarget.value))}
                                ></input>
                                <br/>

                                <br/>
                                <button
                                    type="submit"
                                    className="btn btn-light"
                                    onClick={makeDeposit}
                                >Submit Deposit</button>
                            </form>
                        </>
                    
                    </>
                )}
            />
            </>
         ) : (
             <>
                         <div className="card text-center">
                             <div className="card-header">
                                 Big Bank & Savings
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title">Congratulations! Your Deposit of ${deposit} was Successful!</h5>
                                 <p className="card-status">Would you like to make another transaction?</p>
                                 <Link to="/deposit" ><button onClick={clearForm} className="btn btn-primary">Make Another Deposit</button></Link>
                                 <Link to="/account" ><button onClick={clearForm} className="btn btn-dark">Go to Account</button></Link>
                             </div>
                             <div className="card-footer text-muted">
                                
                             </div>
                         </div>
             </>
        )}

    
        </>
    )
}



export default App;
