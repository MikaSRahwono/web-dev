import React from 'react'

const Menu = ({data}) => {
    return (
        <div>
            {data.map((item)=>{
                const {id, nama, harga, img, deskripsi} = item
                
                let harga2 = 'Rp ' + harga.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
                return (
                    <div className='content-main'>
                    <article key={id} className='content-card'>
                        <img src={img} alt={nama} className='content-image'>
                        </img>
                        <header className='content-info'>
                            <h3 className='content-title'>{nama}</h3>
                            <h3 className='content-price'> {harga2}</h3>
                            <div className='content-underline'></div>
                        </header>
                        <p className='content-description'>{deskripsi}</p>
                    </article>
                    </div>
                )}
            )}
        </div>
    )
};

export default Menu;