import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [email, setEmail] = useState('');

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();

  const handleLogout = () => {
    // Borrar la cookie
    cookie.remove('email');
    // Redireccionar al usuario al home
    router.push('/');
  };

  useEffect(() => {
    // Obtener el correo de la cookie
    const userEmail = cookie.get('email');
    setEmail(userEmail || ''); // Asignar una cadena vacía si userEmail es undefined
    // Comprobar si el correo es "admin@admin.com"
    setIsAdmin(userEmail === 'admin@admin.com');
  }, []);
  

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link href="/home">
              <Image
                src={require("/public/assets/logonuevo.png")}
                alt="Logo"
                width={75}
                height={75}
                objectFit="contain"
              />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            {/* Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/rutinas">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    RUTINAS
                  </p>
                </Link>
                <Link href="/actividades">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    ACTIVIDADES
                  </p>
                </Link>
                <Link href="/dietas">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    DIETAS
                  </p>
                </Link>
                <Link href="/tienda">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    TIENDA
                  </p>
                </Link>
                <Link href="/sugerencias">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    SUGERENCIAS
                  </p>
                </Link>
                <Link href="/sobrenosotros">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    SOBRE NOSOTROS
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            {/* User Icon */}
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={handleDropdownToggle}
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >
                  {email}
                  <svg
                    className="h-6 w-6 text-gray-300 ml-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {isDropdownOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    {isAdmin && (
                      <Link href="/admin">
                        <p
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Admin
                        </p>
                      </Link>
                    )}
                    <button
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      onClick={handleLogout}
                    >
                      Cerrar sesión
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
