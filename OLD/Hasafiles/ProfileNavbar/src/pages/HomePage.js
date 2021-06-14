import React from 'react'
import LoadingIndicator from './../components/LoadingIndicator';
import {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
    axios.get("https://insta.nextacademy.com/api/v1/users")
    .then(result =>{
        // console.log(result.data)
        setUsers(result.data)
        setIsLoading(false)
    })
    .catch(err =>{
        console.log('Error', err)
    })
    },[])

    if(isLoading){
    return <LoadingIndicator width="300px" height="300px" color="aqua"/>
    }
    
    return (
        <>
          <h1>HomePage</h1>
          <ul>
                {users.map(user => (
                <li>
                    <Link to ={`/profile/${user.id}`}>{user.id}: {user.username} </Link>
                    
                    <img src={user.profileImage} style={{width:"20%"}}/>
                </li>
                ))}
          </ul>
        </>
    );
}

export default HomePage;