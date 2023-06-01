import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@/components/Layout';

export default function Admin({ clients, instructors }: any) {
    const [selectedTab, setSelectedTab] = useState(0);

    useEffect(() => {
        // Aquí puedes realizar cualquier otra lógica necesaria al cambiar la pestaña seleccionada
    }, [selectedTab]);

    return (
        <Layout>
            <div className="bg-white rounded-lg shadow p-4 mb-4">
                <h1 className="text-2xl font-bold mb-4">Admin</h1>
                <Tabs selectedIndex={selectedTab} onSelect={index => setSelectedTab(index)}>
                    <TabList>
                        <Tab>Clientes</Tab>
                        <Tab>Monitores</Tab>
                    </TabList>
                    {/* Seccion de clientes */}
                    <TabPanel>
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-xl font-bold mb-4">Clientes</h2>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                <Link href="/addClient">Añadir Cliente</Link>
                            </button>
                            <table className="table-auto mt-4 w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">ID</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Name</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Surname</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Email</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Telefono</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">DNI</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Ciudad</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {clients.map((client: any) => (
                                        <tr key={client.clientid}>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">
                                                <Link href={`/clients/${client.clientid}`}>{client.clientid}</Link>
                                            </td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{client.name}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{client.surname}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{client.email}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{client.tlf}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{client.dni}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{client.city}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                    {/* Seccion de monitores */}
                    <TabPanel>
                        <div className="bg-white rounded-lg shadow p-4">
                            <h2 className="text-xl font-bold mb-4">Monitores</h2>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                                <Link href="/addInstructor">Añadir Monitor</Link>
                            </button>
                            <table className="table-auto mt-4 w-full">
                                <thead>
                                    <tr>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">ID</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Nombre</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Apellido</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">DNI</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Teléfono</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Email</th>
                                        <th className="border px-4 py-2 bg-gray-100 font-bold">Direccion</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {instructors.map((instructor: any) => (
                                        <tr key={instructor.id}>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">
                                                <Link href={`/instructors/${instructor.instructorid}`}>{instructor.instructorid}</Link>
                                            </td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{instructor.name}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{instructor.surname}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{instructor.dni}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{instructor.tlf}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{instructor.email}</td>
                                            <td className="border-t-0 border-b-2 border-l-0 border-r-0 px-4 py-2">{instructor.direccion}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </Layout>
    );
}

export const getServerSideProps = async (context: any) => {
    const { data: clients } = await axios.get("http://localhost:3000/api/clients");
    const { data: instructors } = await axios.get("http://localhost:3000/api/instructors");

    return {
        props: {
            clients,
            instructors
        },
    };
};
