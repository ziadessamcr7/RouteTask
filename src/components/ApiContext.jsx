import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext()

export function ApiContextProvider({ children }) {


    const [data, setData] = useState({ customers: [], transactions: [] });
    const [selectedCustomer, setSelectedCustomer] = useState(null);


    useEffect(() => {
        axios.get('http://localhost:5000/api/data')
            .then(response => {
                setData(response.data);
                console.log(response.data.customers)
                console.log(response.data)

            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);



    return <ApiContext.Provider value={{
        data,
        selectedCustomer,
        setSelectedCustomer,
        selectedCustomer
    }}>


        {children}


    </ApiContext.Provider>
}