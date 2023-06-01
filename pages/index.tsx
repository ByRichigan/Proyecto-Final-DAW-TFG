import Image from "next/image";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Guardar el nombre del correo en una cookie
    cookie.set("email", email);

    // Redireccionar al usuario al home
    window.location.href = "/home";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <title>Login</title>
      <div className="max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="w-2/3">
            <Image
              src={require("/public/assets/cabeza-leon-colorida-fondo-negro-fondo-negro.jpg")}
              className="w-full h-full object-cover rounded-l-lg"
              alt={""}
            />
          </div>
          <div className="w-1/3 p-8 border-l border-gray-300">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold">ZgZGym</h1>
              <p className="text-gray-600">Inicia Sesion</p>
            </div>
            <form onSubmit={handleSubmit}>
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
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
              >
                Iniciar sesión
              </button>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </form>
            <div className="my-6 flex items-center">
              <hr className="flex-grow border-gray-300" />
              <p className="mx-4 text-gray-500">or</p>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex justify-center flex-col space-y-4">
              <button className="border bg-white text-gray-800 font-bold py-2 px-4 rounded flex items-center focus:outline-none hover:bg-gray-200">
                <FaGoogle className="mr-2" />
                Inicia con Google
              </button>
              <button className="border bg-white text-gray-800 font-bold py-2 px-4 rounded flex items-center focus:outline-none hover:bg-gray-200">
                <FaGithub className="mr-2" />
                Inicia con GitHub
              </button>
            </div>
            <p className="mt-6 text-center text-gray-500">
              ¿No tienes cuenta?<br />
              <a href="/register" className="text-blue-500 hover:underline">
                Registrate aqui
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
