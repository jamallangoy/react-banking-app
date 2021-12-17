import React from 'react';
import ReactRouterDOM from 'react-dom'
import Template from './Template'


const Home = () => {
    
    // const context = React.useContext(UserContext)
    // console.log(context.users[0].name)

    const Link = ReactRouterDOM.Link
    


    return(
        <>
            <Template 
                title={(
                    <>
                        <h1 style={{fontSize:"8rem"}}> "The Biggest E-Bank Ever"</h1>
                    </>
                )}
                status={(<h4 style={{fontSize:"2rem"}}>Fortune Magazine, Aug 2021</h4>)}
                body={(
                    <>
                        
                        {(<Link to="/createaccount" style={{color: "white", textDecoration:"none"}}><button className="btn btn-light">Welcome</button></Link>)}
                    </>
                )}
                
            />
            
       </>
    )
}

export default Home;