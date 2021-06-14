import React, { useState } from 'react'
import SignUpComponent from './SignUpComponent'


function SignUpModal({ show, setShow }) {

    

    const showHideClassName = () => {
        
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
                <SignUpComponent />
                <button onClick={() => { setShow(false); console.log(show) }}>close</button>
            </section>
        </div>
    );
}

export default SignUpModal;