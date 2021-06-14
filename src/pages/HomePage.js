import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingIndicator from '../components/utils/LoadingIndicator'
import UserImages from '../components/UserImages'
import UserInfo from '../components/UserInfo'

function HomePage() {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // performing a GET request
        axios.get('https://insta.nextacademy.com/api/v1/users')
            .then(result => {
                // If successful, we do stuffs with 'result'
                setIsLoading(false)
                setUsers(result.data)
                // console.log(result.data) use this to check the result s in the console
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
            })
    }, [])


    if (isLoading) {
        return <LoadingIndicator />
    }

    return (
        <div className="HomePage">
            <h1>Home Page</h1>

            {users.map(user => (
                <div key={user.id} className='userContainer'>
                    <UserInfo user={user} />
                    <UserImages userID={user.id} />
                </div>

            ))}

        </div>
    );
}

export default HomePage;
