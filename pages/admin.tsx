import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';

export default function Home({ clients }: any) {
    return (
        <Layout>
            <h1 className="text-2xl font-bold mb-4">Clients</h1>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                <Link href="/addClient">
                    Añadir Cliente
                </Link>
            </button>
            <table className="table-auto mt-4">
                <thead>
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Surname</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Telefono</th>
                        <th className="px-4 py-2">DNI</th>
                        <th className="px-4 py-2">Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client: any) => (
                        <tr key={client.clientid}>
                            <td className="border px-4 py-2">
                                <Link href={`/clients/${client.clientid}`}>
                                    {client.clientid}
                                </Link>
                            </td>
                            <td className="border px-4 py-2">{client.name}</td>
                            <td className="border px-4 py-2">{client.surname}</td>
                            <td className="border px-4 py-2">{client.email}</td>
                            <td className="border px-4 py-2">{client.tlf}</td>
                            <td className="border px-4 py-2">{client.dni}</td>
                            <td className="border px-4 py-2">{client.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </Layout>
    );
}

export const getServerSideProps = async (context: any) => {
    const { data: clients } = await axios.get('http://localhost:3000/api/clients');
    return {
        props: {
            clients
        },
    };
};
