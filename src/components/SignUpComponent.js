import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Button, Label, Input } from 'reactstrap';

function SignUpComponent() {

    const [username, changeUsername] = useState("")
    const [email, changeEmail] = useState('')
    const [password, changePassword] = useState("")

    const SignUp = () => {
        axios.post("https://insta.nextacademy.com/api/v1/users/", { username, email, password })
            .then((resp) => {
                changeUsername("")
                changeEmail("")
                changePassword("")
                console.log('the user has been successfully added to  the database')
                toast.success(`Dear ${username}, welcome to Nextagram!`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch(error => {
                console.error(error.response)
                toast.error('There was an error signing you up. Try another username, emailadress or password', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }); // so that we know what went wrong if the request failed
            })
            
    }



    return(
        <div>
            <>
                <Label for="userName">Username</Label>
                <Input type="text" id='username' placeholder="username" value={username} onChange={(e) => { changeUsername(e.target.value) }} />
                <Label for="email">Email</Label>
                <Input type="text" id='email' placeholder="email" value={email} onChange={(e) => { changeEmail(e.target.value) }} />
                <Label for="password">Password</Label>
                <Input type="text" id='password' placeholder="password" value={password} onChange={(e) => { changePassword(e.target.value) }} />
                <br />
                <Button color="success" onClick={SignUp}>Create account</Button>
            </>
        </div>

    )

}

export default SignUpComponent;