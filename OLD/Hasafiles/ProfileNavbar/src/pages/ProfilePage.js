import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import axios from 'axios'

const ProfilePage = () => {

    let userId = useParams();
    // console.log(userId.id)
    const [user, setUser] = useState({})

    useEffect(()=>{
        axios.get(`https://insta.nextacademy.com/api/v1/users/${userId.id}`)
        .then(result => {
            // console.log(result.data)
            setUser(result.data)
        })
    })

    return(
        <h1>
            Profile Page for {user.id}: {user.username}
            <img src={user.profileImage} style={{width:"20%"}}/>
        </h1>
    )

}

export default ProfilePage;