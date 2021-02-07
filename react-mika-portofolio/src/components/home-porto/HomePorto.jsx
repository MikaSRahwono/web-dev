import React from 'react'
import './HomePorto.css'

function HomePorto() {
    return (
        <div className='homePorto'>
            <div className='homePorto-title'>
                My Portofolio
            </div>
            <div className='homePorto-content'>
                <div className='homePorto-content__webdev'>
                    Web Development
                    <div className='homePorto-content__webdev-img'></div>
                </div>
                <div className='homePorto-content__photo'>
                    Photography
                </div>
                <div className='homePorto-content__video'>
                    Videography
                </div>
            </div>
        </div>
    )
}

export default HomePorto
