import React from 'react'
import Image from 'react-graceful-image'
import { Button } from 'reactstrap';

function UserInfo({user}) {

    const userHref = '/users/' + user.id

    return (
        <div className='userInfo'>
            <Image
                src={user.profileImage}
                width='150'
                height='150 '
                alt='My awesome image'
            />
            <p className='username'>{user.username}</p>
            <Button color="primary" href={userHref}>View page</Button>
        </div>
    );
}

export default UserInfo;