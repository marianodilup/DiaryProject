import { createContext, useState } from "react";

export const SelectContext = createContext();

export const useSelectContext = () => {
    const [date, setDate] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    
    return {date, setDate, month, setMonth, year, setYear };
}