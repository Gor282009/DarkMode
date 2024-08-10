import React from 'react'
import { useState } from 'react'
import "./App.css"

function Isdark() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
        <div style={{background:isDarkMode?"white":"black", transition:"1s"}} className='home'>
            <button className='myBtn' onClick={(e) => {
                setIsDarkMode(!isDarkMode)
            }}>
                { isDarkMode ? "Dark" : "Light" }
            </button>
        </div>
    )
}

export default Isdark