import { useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Register() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [tlf, setTlf] = useState('');
  const [dni, setDni] = useState('');
  const [city, setCity] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const clientData = {
      name,
      surname,
      email,
      tlf,
      dni,
      city
    };

    try {
      const res = await axios.post('/api/clients', clientData);
      // Manejar la respuesta o redireccionar a otra página después de la inserción exitosa
      console.log(res.data);
    } catch (error) {
      // Manejar errores de inserción
      console.error(error);
    }

    // Limpiar los campos después de enviar los datos
    setName('');
    setSurname('');
    setEmail('');
    setTlf('');
    setDni('');
    setCity('');
    router.push('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-2/3">
            <Image
              src="/assets/cabeza-leon-colorida-fondo-negro-fondo-negro.jpg"
              className="w-full h-full object-cover rounded-l-lg"
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div className="w-1/3 p-8 border-l border-gray-300">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">ZgZGym</h1>
              <p className="text-gray-600">Registro</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="surname"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Surname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="tlf"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Telefono"
                  value={tlf}
                  onChange={(e) => setTlf(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="city"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="dni"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder=""
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
              >
                Registrar
              </button>
            </form>
            <div className="my-6 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <p className="mx-4 text-gray-500">or</p>
              <hr className="flex-grow border-gray-300" />
            </div>
            <p className="mt-6 text-center text-gray-500">
              ¿Ya tienes una cuenta?<br />
              <a href="/" className="text-blue-500 hover:underline">
                Logeate aqui
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
