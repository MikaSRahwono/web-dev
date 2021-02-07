import React from 'react'
import { HomeEntry } from '../index'
import { HomeIntro } from '../index'
import { HomePorto } from '../index'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <HomeEntry />
            <HomeIntro />
            <HomePorto />
        </div>
    )
}

export default Home
