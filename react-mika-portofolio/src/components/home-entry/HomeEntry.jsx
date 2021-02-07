import React, { useState, useEffect } from 'react'
import './HomeEntry.css'

function HomeEntry() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    return (
        <div className='homeEntry'>
            <div className='homeEntry-topname'style={{transform: `translateX(${offsetY * 0.4}px)`}}>
                Mika S.
            </div>
            <div className='homeEntry-botname' style={{transform: `translateX(${offsetY * -0.2}px)`}}>
                Rahwono
            </div>
        </div>
    )
}

export default HomeEntry
