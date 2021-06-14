import React, { useState } from 'react'
import SignInModal from './SignInModal'
import {Button} from 'reactstrap'

function SignInButton() {

    const [show, setShow] = useState(false)

    return (
        <div className='signinbutton'>
            <Button color="primary" type="button" onClick={() => { setShow(true); console.log(show)}}>
                Sign In
        </Button>
            <SignInModal show={show} setShow={setShow} />
        </div>
    );
}

export default SignInButton;