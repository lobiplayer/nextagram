import React, { useState } from 'react'
import SignUpModal from './SignUpModal'
import { Button } from 'reactstrap'

function SignUpButton() {

    const [show, setShow] = useState(false)

    return (
        <div className='signinbutton'>
            <Button outline color="primary" type="button" onClick={() => { setShow(true); console.log(show)}}>
                Sign Up
        </Button>
            <SignUpModal show={show} setShow={setShow} />
        </div>
    );
}

export default SignUpButton;