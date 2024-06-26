import react from 'react' 
import { useState,useEffect} from 'react'

export const useDate=()=>{

    const locale= 'es'
    const [fecha, setFecha]= useState(new Date())

    useEffect(()=>{
        const temporalizador= setInterval(()=>{

            setFecha(new Date())

        }, 60*1000)
        return()=>{
            clearInterval(temporalizador)
        }

    },[])

    const diaDeHoy = fecha.toLocaleDateString(locale, {weekday:'long'})//obtine dia de la semana

    const fechaDeHoy = `${diaDeHoy}, ${fecha.getDate()}, ${fecha.toLocaleDateString(locale, {month:'long'})}\n\n `//Combina el nombre del día, la fecha y el nombre del mes en una cadena.

    const horaNow= fecha.toLocaleDateString(locale,{hour: 'numeric', hour12:true, minute:'numeric'})//Formatea la hora actual
    return {
        diaDeHoy,fechaDeHoy
    }
        
    
}