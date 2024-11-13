import React from 'react';

import './app-header.css'
/*Loob elemendi, milles kuvatakse meie postituste arv
ja kui paljudel neist on staatus "meeldis"*/
const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>Sisestage oma nimi siia</h1>
            <h2>{allPosts} plaati, neist meeldis {liked}</h2>
        </div>
    )
}

export default AppHeader;