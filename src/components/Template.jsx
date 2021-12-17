import React from 'react'
import  Card  from '../components/Card'

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

export default Template;