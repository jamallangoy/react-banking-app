import React from 'react';
import ReactRouterDOM from 'react-dom';
// import Navbar from './components/Navbar';
import Home from './Home';
// import CreateAccount from './components/CreateAccount';
// import Login from './components/Login';
// import Account from './components/Account';
// import Deposit from './components/Deposit';
// import Withdraw from './components/Withdraw';
// import AllData from './components/AllData';
// import Context from './components/Context'


const Router = () => {

    const Route = ReactRouterDOM.Route
    const HashRouter = ReactRouterDOM.HashRouter

    // const context = React.useContext(UserContext)
    // console.log(UserContext)

    return (
        <>
            <HashRouter>
                {/* <Navbar /> */}
                {/* <UserContext.Provider
                    value={{users:[{
                        name: "Jamall",
                        email:"jamallangoy@gmail.com",
                        password: "secret",
                        balance: 100
                    }]}}
                > */}
                    <Route path="/" exact component={Home} />
                    {/* <Route path="/createaccount" component={CreateAccount} />
                    <Route path="/login"  component={Login} />
                    <Route path="/account"  component={Account} />
                    <Route path="/deposit"  component={Deposit} />
                    <Route path="/withdraw"  component={Withdraw} />
                    <Route path="/alldata"  component={AllData} /> */}
            
                {/* </UserContext.Provider> */}
            </HashRouter>
            
        </>
    )
};


export default Router;
