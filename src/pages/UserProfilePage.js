import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingIndicator from '../components/utils/LoadingIndicator'
import UserImages from '../components/UserImages'
import UserInfo from '../components/UserInfo'
import { useParams } from 'react-router';

const UserProfilePage = () => {

    let userId = useParams();
    const [user, setUser] = useState({});
    console.log(userId.id)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // performing a GET request
        axios.get(`https://insta.nextacademy.com/api/v1/users/${userId.id}`)
            .then(result => {
                // If successful, we do stuffs with 'result'
                setIsLoading(false)
                setUser(result.data)
                // console.log(result.data) use this to check the result s in the console
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
            })
    }, [userId.id])


    if (isLoading) {
        return <LoadingIndicator />
    }

    return (
        <div className="userProfilePage">
            <h1>UserProfilePage</h1>
            <UserInfo user={user} />

            <UserImages userID={userId.id} />
            {console.log(user.id)}

                

            

        </div>
    );
}

export default UserProfilePage