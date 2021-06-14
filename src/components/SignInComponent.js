import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Button, Label, Input } from 'reactstrap';

function SignInComponent({ toggleNested }) {


    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")
    const [currentUser, updateCurrentUser] = useState(undefined)

    const fetchUserInfo = () => {
        axios.get("https://insta.nextacademy.com/api/v1/users/me", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(resp => { updateCurrentUser(resp.data); console.log(resp.data); localStorage.setItem("userID", resp.data.id) })
    }

    const login = () => {
        axios.post("https://insta.nextacademy.com/api/v1/login", { username, password })
            .then((resp) => {
                changeUsername("")
                changePassword("")
                localStorage.setItem("token", resp.data.auth_token)
                fetchUserInfo()
                toast.success(`Welcome back ${username}!`, {
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
                toast.error('Login unsuccessful. Please make sure that yout username and password are correct.', {
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

    // visit page -> does browser have token? -> no -> login -> show user info
    //                          |-> yes -> show user info

    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchUserInfo()
        }
    }, [])

    const logOut = () => {
        localStorage.removeItem("token")
        updateCurrentUser(undefined)
        localStorage.setItem('userID', '')
    }

    if (currentUser) {
        return (
            <>
                <h1>{currentUser.email}</h1>
                <h1>{currentUser.username}</h1>
                <Button color="danger" onClick={logOut}>Log Out</Button>
            </>
        )
    } else {
        return (
            <>
                <Label for="userName">Username</Label>
                <Input type="text" id="userName" placeholder="username" value={username} onChange={(e) => { changeUsername(e.target.value) }} />
                <Label for="password">Password</Label>
                <Input type="password" id='password' placeholder="password" value={password} onChange={(e) => { changePassword(e.target.value) }} />
                <br />
                <Button color="success" onClick={login}>Login</Button>
                <p>Not a user yet? <span className="link-primary" onClick={toggleNested}>click here</span> to make an account.</p>
    
            </>
        )
    }


}

export default SignInComponent;