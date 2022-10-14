import React from 'react'

const HavaDurumu = ( {weather} ) => {

    if(!weather) {
        return <p>Yükleniyor...</p>
    }
    
    return (
        <div>
        <hr/>     
        <h1>ŞEHİR: {weather.name}</h1>
        <h3>HAVA DURUMU: {weather.weather.map(data => data.description).join(", ")}</h3>
        <p>SICAKLIK: {weather.main.temp} °C</p>
        <p>TARİH: {new Date(weather.dt * 1000).toLocaleDateString()}</p>
        </div>
    )
}

export default HavaDurumu
