import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function InstructorForm() {

    const [instructor, setInstructor] = useState({
        name: '',
        surname: '',
        dni: '',
        tlf: '',
        email: '',
        direccion: ''
    });

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (router.query.instructorid) {
            const res = await axios.put('/api/instructors/' + router.query.instructorid, instructor);
        } else {
            const res = await axios.post('/api/instructors', instructor);
        }

        router.push('/admin')
    };

    const handleChange = ({ target: { name, value } }) => {
        setInstructor({ ...instructor, [name]: value });
    }

    useEffect(() => {

        const getInstructor = async () => {
            const { data } = await axios.get('/api/instructors/' + router.query.instructorid)
            setInstructor(data)
        }

        if (router.query.instructorid) {
            getInstructor(router.query.instructorid)
        }
    }, [])

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md bg-gray-300 p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Añadir Instructor</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={instructor.name}
                    />

                    <input
                        type="text"
                        name="surname"
                        placeholder="Surname"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={instructor.surname}
                    />

                    <input
                        type="text"
                        name="dni"
                        placeholder="DNI"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={instructor.dni}
                    />

                    <input
                        type="number"
                        name="tlf"
                        placeholder="Telefono"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={instructor.tlf}
                    />

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={instructor.email}
                    />

                    <input
                        type="text"
                        name="direccion"
                        placeholder="Direccion"
                        className="px-4 py-2 rounded border mb-4 w-full"
                        onChange={handleChange}
                        value={instructor.direccion}
                    />

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
                        {
                            router.query.instructorid ? 'Actualizar instructor' : "Guardar instructor"
                        }
                    </button>
                </form>
            </div>
        </div>

    )
};