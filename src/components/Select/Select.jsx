import React, { useEffect, useState } from 'react'
import { ApiContext } from '../Context/ApiContext';
import { useContext } from 'react';
import { SelectContext } from '../Context/SelectContext';

function Select() {

const { postList } = useContext(ApiContext);
const { date, setDate, month, setMonth, year, setYear, selectedPostsByDate, setSelectedPostsByDate, selectedPostsByMonth, setSelectedPostsByMonth, selectedPostsByYear, setSelectedPostsByYear } = useContext(SelectContext);


const handleInputDate = (e) => {
    setDate(e.target.value);
    getFilteredPostsByDate(date);
    // console.log(selectedPostsByDate);
    // console.log(date);
    // console.log(postList);
};

const handleSelectMonth = (e) => {
    setMonth(e.target.value);
    getFilteredPostsByMonth(year);
};

const handleInputYear = (e) => {
    setYear(e.target.value);
    getFilteredPostsByYear(year)
};

const getFilteredPostsByDate = (date) => {
    /* console.log(date);
    console.log(postList[0].date); */ 
    const filteredPostsByDate = postList.filter((post) => {
        return post.date === date;
    })   
    setSelectedPostsByDate(filteredPostsByDate);
    /* console.log(filteredPostsByDate); */
    }; 

useEffect(() => {
    if (date) {
        getFilteredPostsByDate(date);
    }
    }, [date]);

/* const getFilteredPostsByDate = (date) => {
     console.log(date);
    console.log(postList[0].date); 

    const targetDate = new Date(date);

    const filteredPostsByDates = postList.filter((post) => {
        const postDate = new Date(post.date);
        // Comparar solo la fecha, sin considerar la hora
        return postDate.toDateString() == targetDate.toDateString();
    });
    // console.log(filteredPostsByDates);
    setFilteredPostsByDate(filteredPostsByDates);
    console.log(filteredPostsByDate);
}; */

const getFilteredPostsByMonth = (month) => {
    const filteredPostsByMonth = postList.filter((post) => {
        return post.date.includes(month);
    })
    setSelectedPostsByMonth(filteredPostsByMonth);
};

const getFilteredPostsByYear = (year) => {
    const filteredPostsByYear = postList.filter((post) => {
        return post.date.includes(year);
    })
    setSelectedPostsByYear(filteredPostsByYear);
};

  return (
    <>
    <h3>Busca tus entradas</h3>
    <form>
        <fieldset>
            <label htmlFor="date">Por fecha:</label>
            <input type="date" name="date" id="date" value={date} onChange={handleInputDate} />
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
            <label htmlFor="year">Por año:</label>
            <input type="text" name="year" id="year" value={year} onChange={handleInputYear} />
        </fieldset>
        <button></button>
    </form>
    </>
  )
}

export default Select