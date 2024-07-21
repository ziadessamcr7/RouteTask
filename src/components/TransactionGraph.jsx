// src/components/TransactionGraph.js
import React, { useContext, useEffect } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';
import { ApiContext } from './ApiContext';

function TransactionGraph({ Index, transactions }) {

    // console.log('customer arrayyy:', customersArr);

    const { data, setSelectedCustomer, selectedCustomer } = useContext(ApiContext)


    const data2 = transactions?.map(transaction => ({
        date: transaction.date,
        amount: transaction.amount
    }));

    console.log(data2);
    // const customerData = customersArr.map(customer => ({
    //     name: customer.name,
    //     id: customer.id
    // }));


    // console.log('custData:', customerData);




    return (


        <div>
            <h2 style={{ textAlign: 'center' }}>
                {data.customers[Index].name}
            </h2>
            <LineChart
                width={500}
                height={300}
                data={data2}
                margin={{
                    top: 50, right: 30, left: 20, bottom: 5,
                }}
                style={{ margin: 'auto' }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" fontSize={'12px'} padding={'10px'} />
                <YAxis fontSize={'14px'} />
                <Tooltip />
                {/* <Legend /> */}
                <Line type="monotone" dataKey="amount" stroke="#2224d0" activeDot={{ r: 8 }} />
            </LineChart>
        </div>

    );
}

export default TransactionGraph;
