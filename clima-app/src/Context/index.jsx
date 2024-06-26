import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    const [clima, setClima] = useState({}) //guarda la información del clima
    const [valores, setValores] = useState([])//guarda valores de clima
    const [lugar, setLugar] = useState('Jaipur')//guarda el lugar (inicialmente 'Jaipur').
    const [localizacion, setLocalizacion] = useState('')//guarda la localización.

    //fetch para la API

    const fetchWeather = async () => {
        const opciones = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params: {
                aggregateHours: '24',
                location: lugar,
                contentType: 'json',
                unitGroup: 'metric',
                shortColumnNames: 0,
            },
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
            }
        }

        try {
            const respuesta = await axios.request(opciones);
            console.log(respuesta.data)
            const datos = Object.values(respuesta.data.locations)[0]
            setLocalizacion(datos.address)
            setValores(datos.values)
            setClima(datos.values[0])
        } catch (e) {
            console.error(e);
            // si la API lanza un error
            alert('Este lugar no existe')
        }
    }
    useEffect(() => {
        fetchWeather()
    }, [lugar])

    useEffect(() => {
        console.log(valores)
    }, [valores])

    return (
        <StateContext.Provider value={{
            clima,
            setLugar,
            valores,
            localizacion,
            lugar
        }}>
            {children}
        </StateContext.Provider>
    )




}

export const useStateContext = () => useContext(StateContext)