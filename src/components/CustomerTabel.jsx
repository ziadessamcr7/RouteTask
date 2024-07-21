// src/components/CustomerTable.js
import React, { useContext, useState } from 'react';
import { ApiContext } from './ApiContext';
import TransactionGraph from './TransactionGraph';

function CustomerTable() {
    const [filter, setFilter] = useState('');
    const [Index, setIndex] = useState(0);

    const { data, setSelectedCustomer, selectedCustomer } = useContext(ApiContext)


    const filteredCustomers = data.customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h1>Customer Transactions</h1>
            <input
                type="text"
                placeholder="Filter by customer name"
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total Transactions</th>
                        <th>Total Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredCustomers.map(customer => {
                        const customerTransactions = data.transactions.filter(t => t.customer_id === customer.id);
                        const totalAmount = customerTransactions.reduce((sum, t) => sum + t.amount, 0);

                        return (
                            <tr key={customer.id} onClick={() => { setSelectedCustomer(customer); setIndex(customer.id - 1) }}>
                                <td>{customer.name}</td>
                                <td>{customerTransactions.length}</td>
                                <td>{totalAmount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {selectedCustomer &&
                <TransactionGraph
                    Index={Index}
                    transactions={data.transactions.filter(t => t.customer_id === selectedCustomer.id)}
                />
            }
        </div>
    );
}

export default CustomerTable;
