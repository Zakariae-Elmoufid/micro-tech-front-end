import React from 'react';
import Layout from '../../components/admin/Layout';

export default function Dashboard() {
    return (
        <Layout>
            <h1 className="text-3xl font-bold mb-6">welcome  to Dashboard</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded shadow">Total Clients</div>
                <div className="bg-white p-4 rounded shadow">Total Produits</div>
                <div className="bg-white p-4 rounded shadow">Total Commandes</div>
            </div>
        </Layout>
    );
}
