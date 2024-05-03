import React from 'react'
import ReactDOM from 'react-dom/client'
import './fobespage.css'
import './fobes.css'
import Nav from '../components/Nav/nav.jsx'
import FavLists from '../components/Fobes/FavList.jsx'
import ImggeList from '../components/Fobes/imagelists.jsx'
ReactDOM.createRoot(document.getElementById('root-fobes')).render(
    <React.StrictMode>
        <Nav></Nav>
        <div className="fobes-main">
            <div className="fav-list">
                <b>Favourite List</b>
                <FavLists />
            </div>
            <div className="img-fobesdiv">
                <ImggeList />
            </div>
            <div className="search-fobesdiv">
                <h1>Search Box</h1>
                <div className="searchdiv">
                    <input type="search" placeholder='search' id='searchbar' />
                    <button type='submit' id='submitBtn'><img src="search.svg" alt="" /></button>
                </div>
                <div className="suggestions">
                    <li>Adani</li>
                    <li>Ambani</li>
                    <li>Tata</li>
                </div>
            </div>

        </div>
    </React.StrictMode>,
)