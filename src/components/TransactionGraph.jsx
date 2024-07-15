// src/components/TransactionGraph.js
import React, { useEffect } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { useState } from 'react';

function TransactionGraph({ transactions }) {


    const data = transactions.map(transaction => ({
        date: transaction.date,
        amount: transaction.amount
    }));


    return (
        <div>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
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
