import React from 'react'

const FormularioJugadores = () => {
    return (
        <form>
            <input type="text" id="nombre" name="nombre" placeholder="Nombre" />
            <button type="submit">Cargar jugador</button>
        </form>
    )
}

export default FormularioJugadores