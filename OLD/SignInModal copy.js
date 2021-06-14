import React, { useState } from 'react'
import SignInComponent from './SignInComponent'


function SignInModal({ show, setShow }) {



    const showHideClassName = () => {
        // show ? return "modal display-block" : return "modal display-none";
        if (show === true) {
            return "display-block"
        }
        else {
            return "display-none"
        }
    }

    return (
        
        <div className={showHideClassName()}>
            {console.log(show)}
            <section className="modal-main">
                <SignInComponent />
                <button onClick={() => { setShow(false); console.log(show) }}>close</button>
                <p>Not a user yet? <a href='/signup' >click here</a> to make an account</p>
            </section>
        </div>
    );
}

export default SignInModal;