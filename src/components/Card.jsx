import React from 'react'


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

export default Card;
