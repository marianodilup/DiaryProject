import React, { useEffect, useState } from 'react'
import { ApiContext } from '../Context/ApiContext';
import { useContext } from 'react';
import { SelectContext } from '../Context/SelectContext';
import "./Select.scss"

function Select() {

const { date, setDate, month, setMonth, year, setYear } = useContext(SelectContext);


const handleInputDate = (e) => {
    setDate(e.target.value);
};

const handleSelectMonth = (e) => {
    setMonth(e.target.value);
};

const handleSelectYear = (e) => {
    setYear(e.target.value);
};


  return (
    <>

    <div className="select-container">
        <h3>Busca tus entradas</h3>
        <form className="search-form">
            <fieldset className="search-fieldset inputDate" >
                <label className="search-label inputDate" htmlFor="date">Por fecha:</label>
                <input className='inputDate' type="date" name="date" id="date" value={date || ""} onChange={handleInputDate} />
            </fieldset>
            <fieldset className="search-fieldset">
                <label className="search-label" htmlFor="month">Por mes:</label>
                <select className="search-select" name="month" id="month" value={month} onChange={handleSelectMonth}>
                    <option value="">Todos los meses</option>
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
            <fieldset className="search-fieldset">
                <label className="search-label" htmlFor="year">Por año:</label>
                <select className="search-select" name="year" id="year" value={year} onChange={handleSelectYear}>
                    <option value="">Todos los años</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </fieldset>
        
        </form>
    </div>
    </>
  )
}

export default Select