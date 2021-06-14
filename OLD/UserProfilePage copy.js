import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingIndicator from '../components/utils/LoadingIndicator'
import Image from 'react-graceful-image'

const UserProfilePage = () => {

    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // performing a GET request
        axios.get('https://insta.nextacademy.com/api/v1/users/' + '1')
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
    }, [])


    if (isLoading) {
        return <LoadingIndicator />
    }

    return (
        <div className="userProfilePage">
            <h1>UserProfilePage</h1>

                    <div className='userProfilePageUserInfo'>
                        <Image
                            src={user.profileImage}
                            width='150'
                            height='150 '
                            alt='My awesome image'
                        />
                        <p className='username'>{user.username}</p>
                        <p className='userid'>{user.id}</p>
                    </div>


                

            }

        </div>
    );
}

export default UserProfilePage