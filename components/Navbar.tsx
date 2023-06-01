import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Logo */}
            <Link href="/home">
              <Image src={require("/public/assets/noofta-logo-transp.png")} alt="Logo" width={150} height={150} />
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
                <Link href="/gimnasios">
                  <p className="hover:underline px-3 py-2 rounded-md text-sm font-medium inline-block">
                    GIMNASIOS
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
            <svg className="h-6 w-6 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13v7M9 20h6M19 8h.01M6 8h.01M12 4a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V8a4 4 0 0 1 4-4z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
