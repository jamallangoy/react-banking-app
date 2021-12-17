import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Navbar from './components/Navbar';
// import Home from './components/Home;
// import CreateAccount from './components/CreateAccount';
// import Login from './components/Login';
// import Account from './components/Account';
// import Deposit from './components/Deposit';
// import Withdraw from './components/Withdraw';
// import AllData from './components/AllData';
// import Card from './components/Card'
// import Template from './components/Template'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    
    {/* <Card/>,
    <Template/>,
    <Account/>,
    <AllData/>,
    <CreateAccount/>,
    <Deposit/>,
    <Home/>,
    <Login/>,
    <Navbar/>,
    <Withdraw/>, */}
    <App />

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
