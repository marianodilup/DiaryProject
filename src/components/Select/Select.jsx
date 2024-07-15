import React, { useState } from 'react'
import { ApiContext } from '../Context/ApiContext';
import { useContext } from 'react';

function Select() {

// Crear una variable de estado en listpost --> month , importar aquí el setMonth
// Lo mismo con variables de estado day y year

const { postList } = useContext(ApiContext);
const [date, setDate] = useState("");
const [month, setMonth] = useState("");
const [year, setYear] = useState("");
const [filteredPostsByDate, setFilteredPostsByDate] = useState([]);


const handleSelectMonth = (e) => {
    setMonth(e.target.value);
};

const handleInputDate = (e) => {
    setDate(e.target.value);
    getFilteredPostsByDate(date);
    console.log(filteredPostsByDate);
    
};

const handleInputYear = (e) => {
    setYear(e.target.value);
};

const getFilteredPostsByDate = (date) => {
    const filteredPostsByDate = postList.filter((post) => {
        return post.date === date;
    })
    setFilteredPostsByDate(filteredPostsByDate);
};

const getFilteredPostsByMonth = (month) => {
    const filteredPostsByMonth = postList.filter((post) => {
        return post.date.includes(month);
    })
};

const getFilteredPostsByYear = (year) => {
    const filteredPostsByYear = postList.filter((post) => {
        return post.date.includes(year);
    })
};

  return (
    <>
    <h3>Busca tus entradas</h3>
    <form>
        <fieldset>
            <label htmlFor="date">Por fecha:</label>
            <input type="date" name="date" id="date" value={day} onChange={handleInputDate} />
        </fieldset>
        <fieldset>
            <label htmlFor="month">Por mes:</label>
            <select name="month" id="month" value={month} onChange={handleSelectMonth}>
                <option value="">Selecciona un mes</option>
                <option value="-01-">Enero</option>
                <option value="-02-">Febrero</option>
                <option value="-03-">Marzo</option>
                <option value="-04-">Abril</option>
                <option value="-05-">Mayo</option>
                <option value="-06-">Junio</option>
                <option value="-07-">Julio</option>
                <option value="-08-">Agosto</option>
                <option value="-09-">Septiembre</option>
                <option value="-10-">Octubre</option>
                <option value="-11-">Noviembre</option>
                <option value="-12-">Diciembre</option>
            </select>
        </fieldset>
        <fieldset>
            <label htmlFor="year">Por día:</label>
            <input type="text" name="year" id="year" value={year} onChange={handleInputYear} />
        </fieldset>
    </form>
    </>
  )
}

export default Select