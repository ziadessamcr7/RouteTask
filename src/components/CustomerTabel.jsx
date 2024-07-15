// src/components/CustomerTable.js
import React, { useState } from 'react';

function CustomerTable({ customers, transactions, onCustomerSelect }) {
    const [filter, setFilter] = useState('');

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
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
                        const customerTransactions = transactions.filter(t => t.customer_id === customer.id);
                        const totalAmount = customerTransactions.reduce((sum, t) => sum + t.amount, 0);

                        return (
                            <tr key={customer.id} onClick={() => onCustomerSelect(customer)}>
                                <td>{customer.name}</td>
                                <td>{customerTransactions.length}</td>
                                <td>{totalAmount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerTable;
