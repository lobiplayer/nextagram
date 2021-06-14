import axios from 'axios'
import React, { useState, useEffect } from 'react'
import LoadingIndicator from './utils/LoadingIndicator'
import Image from 'react-graceful-image'

function UserImages({userID}) {

    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // performing a GET request
        axios.get('https://insta.nextacademy.com/api/v2/images?userId=' + userID)
            .then(result => {
                // If successful, we do stuffs with 'result'
                setIsLoading(false)
                setPhotos(result.data)
                // console.log(result.data) //use this to check the result s in the console
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
        <div className="userimages">

            {photos.map(photo => (
                <div key={photo.id} className='photo'>
                    {/* <img src={photo.url} /> */}
                    <Image
                        src= {photo.url}
                        width='300'
                        height='300'
                        alt='My awesome image'
                    />
                </div>
            ))}

        </div>
    );
}

export default UserImages;
