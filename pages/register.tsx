import Image from "next/image";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function register() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
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
              <p className="text-gray-600">Registro</p>
            </div>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
              >
                Sign Up
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
