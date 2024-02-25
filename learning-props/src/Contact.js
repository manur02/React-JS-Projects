import React from 'react';
import './Contact.css';


function Contact(props){
    //console.log(props);
return(
    
    <div className='contacts'>
        <div className='contact-card'>
            <img src={props.img} className='person-img'></img>
            <h4>{props.pname}</h4>
            <p>{props.phone}</p>
        </div>
        <div className='info-group'>
            <img src='./email-icon.png' className='email-icon'></img>
            <p className='email-id'>{props.email}</p>
        </div>
    </div>

)
}

export default Contact;