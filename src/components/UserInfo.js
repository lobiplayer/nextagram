import React from 'react'
import Image from 'react-graceful-image'

function UserInfo({user}) {

    return (
        <div className='userInfo'>
            <Image
                src={user.profileImage}
                width='150'
                height='150 '
                alt='My awesome image'
            />
            <p className='username'>{user.username}</p>
            <p className='userid'>{user.id}</p>
        </div>
    );
}

export default UserInfo;