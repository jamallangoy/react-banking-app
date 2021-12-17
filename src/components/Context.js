import React from 'react';
import ReactRouterDOM from 'react-dom'
// import Navbar from './components/Navbar'
// import {  Card, Template, CreateUser, UserLogin, MakeDeposit, MakeWithdrawal  } from './components/context'

// const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
// const HashRouter = ReactRouterDOM.HashRouter
// const UserContext = React.createContext(null);

const Card = (props) => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    const fulldate = `${month + 1}/${day}/${year}`
    

    return(
        <>
            <div className="card text-center" style={{color: "white"}}>
                <div className="card-header" style={{backgroundColor:"#e61030", fontSize:"2rem", border: "2px solid white"}}>
                    Big Bank & Savings
                </div>
                <div className="card-body" style={{backgroundColor:"#117ace"}}>
                    <div className="card-title">{props.title}</div>
                    <br/>
                    <div className="card-status">{props.status}</div>
                   <div>
                       {props.body}
                   </div> 
                </div>
                <div className="card-footer text-muted">
                    {fulldate}
                </div>
            </div>
        </>
    )
}

const Template = (props) => {

    return(
        <>
            <Card 
                title={props.title}
                status={props.status}
                body={props.body}
                button={props.button}
               
            />
        </>
    )
}

const CreateUser = (props) => {
    const { useState } = React;
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(true);


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
   
        const createUser = () => {
        console.log(lname, fname,  password)
        if (!validate(fname,"fname")) return
        if (!validate(lname,"lname")) return
        if (!validate(email,"email")) return
        if (!validate(dob,"dob")) return
        if (!validate(password,"password")) return
        setShow(false)
    }

    const clearForm = () => {
        setFname('');
        setLname('');
        setEmail('');
        setDob('');
        setPassword('')
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
                            <form onSubmit={createUser}>
                                <br/>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fname"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter your First Name"
                                    value={fname}
                                    onChange={e => setFname(e.currentTarget.value)}
                                ></input>
                                <br/>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lname"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter your First Name"
                                    value={lname}
                                    onChange={e => setLname(e.currentTarget.value)}
                                ></input>
                                <br/>
                                    <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter your email address"
                                    value={email}
                                    onChange={e => setEmail(e.currentTarget.value)}
                                ></input>
                                <br/>
                                <label>Date of Birth</label>
                                <br/>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="dob"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter your Date of Birth"
                                    value={dob}
                                    onChange={e => setDob(e.currentTarget.value)}
                                ></input>
                                <br/>
                                <label>Password</label>
                                <br/>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter a secure password"
                                    value={password}
                                    onChange={e => setPassword(e.currentTarget.value)}
                                ></input>
                                <br/>
                                <button
                                    type="submit"
                                    className="btn btn-light"
                                    onClick={createUser}
                                >Join BigBank</button>
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
                                <h5 className="card-title">Congratulations</h5>
                                <p className="card-status">Always Remember that BigBank takes little bank</p>
                                <Link to="/login" ><button onClick={clearForm} className="btn btn-primary">Login</button></Link>
                            </div>
                            <div className="card-footer text-muted">
                                
                            </div>
                        </div>
            </>
        )}

    
        </>
    )
}


const UserLogin = (props) => {
    const { useState } = React;
    const [email, setEmail] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(true);


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
   
        const loginUser = () => {
        console.log(email, password)
        if (!validate(loginEmail,"login-email")) return
        if (!validate(password,"password")) return
        setShow(false)
    }

    const clearForm = () => {
        setLoginEmail('');
        setPassword('')
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
                            <form onSubmit={loginUser}>
                                <br/>
                                    <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="loginEmail"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter your email address"
                                    value={loginEmail}
                                    onChange={e => setEmail(e.currentTarget.value)}
                                ></input>
                                <br/>
                                <br/>
                                <label>Password</label>
                                <br/>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter a secure password"
                                    value={password}
                                    onChange={e => setPassword(e.currentTarget.value)}
                                ></input>
                                <br/>
                                <button
                                    type="submit"
                                    className="btn btn-light"
                                    onClick={loginUser}
                                >Welcome Back</button>
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
                                <h5 className="card-title">Login Successful</h5>
                                <p className="card-status">Always Remember that BigBank takes little bank</p>
                                <Link to="/account" ><button onClick={clearForm} className="btn btn-primary">Go To Account</button></Link>
                            </div>
                            <div className="card-footer text-muted">
                                
                            </div>
                        </div>
            </>
        )}

    
        </>
    )
}

const MakeDeposit = (props) => {
    const { useState } = React;
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
        e.preventDefault()
         if (!validate(deposit,"deposit")) {
             console.log(balance, deposit)
             setBalance(balance + deposit)
         }
         setShow(false)
        setBalance(+balance + deposit)
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

const MakeWithdrawal = (props) => {
    const { useState } = React;
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
    const [withdraw, setWithdraw] = useState();
    const [status, setStatus] = useState('');  //--For Error handling
    const [show, setShow] = useState(true); //--For Ternary Operator (What screen to show)
    const [balance, setBalance] = useState(currentBalance);

    

    
//---ToDo:  Make sure Balance can never be a negative number

    const validate = (withdraw, label, balance) => {
        if (!withdraw) {
            console.log(withdraw, label, balance)
            setStatus(`Error: ${label}`)  //Fix This (Need to see the status in the console)
            console.log(status)
            setTimeout(() => setStatus(''), 3000)
            return false
        }
        
        if (withdraw > +balance) {
            console.log(balance)
            alert(`Your withdrawal of $${withdraw} is more than your Current Balance of $${balance}`);
            // setStatus(`Error: ${label}`)  //Fix This (Need to see the status in the console)
            // console.log(status)
            // setTimeout(() => setStatus(''), 3000)
            // return false
        }
        
        return true
    }

    const makeWithdraw = (e) => {
        e.preventDefault()
         if (!validate(withdraw,"withdraw", balance)) {
             setBalance(+balance - withdraw)
         }
         setBalance(+balance - withdraw)
         setWithdraw('')
         setShow(true)
        
    }

    const clearForm = () => {
        setWithdraw('');
        setShow(true)
    }

    return(
        <>

        {show ? (
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
                    
                            <form onSubmit={makeWithdraw}>
                                    <label>How much would you like?</label>
                                <input
                                    type="number"
                                    className="form-control deposit"
                                    id="withdraw"
                                    style={{width:"60%", margin:"0 auto"}}
                                    placeholder="Please enter amount"
                                    value={withdraw}
                                    onChange={e => setWithdraw(Number(e.currentTarget.value))}
                                ></input>
                                <br/>

                                <br/>
                                <button
                                    type="submit"
                                    className="btn btn-light"
                                    onClick={makeWithdraw}
                                >Collect Funds</button>
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
                                 <h5 className="card-title">Congratulations! You collected ${withdraw}!</h5>
                                 <p className="card-status">Would you like to make another transaction?</p>
                                 <Link to="/withdraw" ><button onClick={clearForm} className="btn btn-primary">Get More Funds</button></Link>
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

                        
export  { Card, Template, CreateUser, UserLogin, MakeDeposit, MakeWithdrawal }