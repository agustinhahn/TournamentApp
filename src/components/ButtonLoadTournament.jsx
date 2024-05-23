import React from 'react'

const ButtonLoadTournament = () => {
    return (
        <div className='buttonLoadTourn'>
            <label type="text">CARGAR TORNEO</label>
            <input type="number" id="loadTournament" placeholder="Codigo" />
            <button>Cargar</button>
        </div>
    )
}

export default ButtonLoadTournament