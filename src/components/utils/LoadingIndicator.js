import React from 'react'
import spinnerloading from '../../media/spinnerloading.gif'

function LoadingIndicator() {

    
    return (
        <div className="LoadingIndicator">
            <img src= {spinnerloading} className='loading' />
        </div>
    );
}

export default LoadingIndicator;