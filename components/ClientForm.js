import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function ClientForm() {

    const [client, setClient] = useState({
        name: '',
        surname: '',
        email: '',
        tlf: '',
        dni: '',
        city: '',
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(router.query.clientid){
            const res = await axios.put('/api/clients/' + router.query.clientid, client);
        }else {
            const res = await axios.post('/api/clients', client);
        }

        router.push('/admin')
    };

    const handleChange = ({ target: { name, value } }) => {
        setClient({ ...client, [name]: value });
    }

    useEffect(() => {

        const getProduct = async () => {
            const {data} = await axios.get('/api/clients/' + router.query.clientid)
            setClient(data)
        }

        if(router.query.clientid){
            getProduct(router.query.clientid)
        }
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md bg-gray-300 p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Añadir Cliente</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={client.name}
                    />

                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={client.surname}
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={client.email}
                    />

                    <input
                        type="number"
                        name="tlf"
                        placeholder="Telefono"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={client.tlf}
                    />

                    <input
                        type="text"
                        name="dni"
                        placeholder="DNI"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={client.dni}
                    />

                    <input
                        type="text"
                        name="city"
                        placeholder="Ciudad"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={client.city}
                    />

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        Guardar Cliente
                    </button>
                </form>
            </div>
        </div>

    )
};