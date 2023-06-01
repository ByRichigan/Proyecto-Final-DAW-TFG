import React from 'react';
import Image from 'next/image';

const activities = [
    {
        title: 'Yoga',
        description: 'Clase de yoga para mejorar la flexibilidad y el equilibrio.',
        image: '/assets/lista_a_1.png',
    },
    {
        title: 'Pilates',
        description: 'Entrenamiento de pilates para fortalecer el cuerpo y mejorar la postura.',
        image: '/assets/lista_a_2.png',
    },
    {
        title: 'Spinning',
        description: 'Sesión de spinning de alta intensidad para mejorar la resistencia cardiovascular.',
        image: '/assets/lista_a_3.png',
    },
    {
        title: 'Zumba',
        description: 'Ritmos latinos combinados con ejercicio aeróbico para una divertida sesión de baile.',
        image: '/assets/lista_a_4.png',
    },
    {
        title: 'CrossFit',
        description: 'Entrenamiento funcional de alta intensidad para mejorar la fuerza y la resistencia.',
        image: '/assets/lista_a_5.png',
    },
    {
        title: 'Kickboxing',
        description: 'Combina técnicas de boxeo y artes marciales para un entrenamiento completo.',
        image: '/assets/lista_a_6.png',
    },
];

const Container = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full border bg-black mt-5">
            <h1 className="text-3xl font-bold mb-4 mt-4 text-white">Clases de Fitness</h1>
            <p className="text-lg text-center mb-8 text-white">¡Descubre nuestras actividades y encuentra la que mejor se adapte a tus objetivos!</p>

            <div className="flex flex-wrap justify-center">
                {activities.map((activity, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <div className="bg-white rounded-lg shadow-lg p-4 h-full">
                            <img src={activity.image} alt="" className="mb-2 w-full h-32 object-cover" />
                            <h2 className="text-lg font-bold mb-2">{activity.title}</h2>
                            <p className="text-sm mb-4">{activity.description}</p>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Apuntarse
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Container;
