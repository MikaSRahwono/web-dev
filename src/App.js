import './App.css';
import data from './menuData'
import React, {useState} from 'react'
import Menu from './Menu'


const items = ['ALL', ...new Set(data.map((item) => item.kategori.toUpperCase()))]

function App() {
  const [menu, setmenu] = useState(data)
  const [categories, setcategories] = useState([...items])
  const itemFilters = (category) => {
    console.log(category)
    if (category === 'ALL') {
      setmenu(data)
      return
    }
    const newItems = data.filter(item => item.kategori.toUpperCase() === category)
    setmenu(newItems)
  }
  return (
    <div className='main'>
      <h1 className='title'>Menu Mika's Cafe</h1>
      <div className='underline'></div>
      {/* Kategori Filter */}
      <div className='btn-container'>
        {categories.map((item)=>{
          return(
          <button className='btn-filter' onClick={() => itemFilters(item)}>{item}</button>
          )
        })}
      </div>
      {/* Menu berdasarkan kateori */}
      <Menu data={menu}/>
    </div>
  );
}

export default App;
