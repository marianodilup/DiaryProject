import { createContext, useState } from "react";

export const SelectContext = createContext();

export const useSelectContext = () => {
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [selectedPostsByDate, setSelectedPostsByDate] = useState([]);
    const [selectedPostsByMonth, setSelectedPostsByMonth] = useState([]);
    const [selectedPostsByYear, setSelectedPostsByYear] = useState([]);
    
    return {date, setDate, month, setMonth, year, setYear, selectedPostsByDate, setSelectedPostsByDate, selectedPostsByMonth, setSelectedPostsByMonth, selectedPostsByYear, setSelectedPostsByYear};
}