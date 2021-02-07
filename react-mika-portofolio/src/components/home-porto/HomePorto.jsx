import React from 'react'
import './HomePorto.css'
import { HomePortoWebdev, HomePortoPhoto, HomePortoVideo } from '../../components'


function HomePorto() {
    return (
        <div className='homePorto'>
            <div className='homePorto-title'>
                My Works
            </div>
            <div className='homePorto-content'>
                <HomePortoWebdev/>
                <HomePortoPhoto/>
                <HomePortoVideo/>
            </div>
        </div>
    )
}

export default HomePorto
