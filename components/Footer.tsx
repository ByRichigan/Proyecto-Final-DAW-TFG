import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <Image src={require("/public/assets/logonuevo.png")} alt="Logo" width={150} height={150} />
          <p className="my-5">
            En ZgZGym, nos dedicamos a brindarte la mejor experiencia de fitness y bienestar. Nuestro compromiso es ayudarte a alcanzar tus metas de salud y forma física de manera divertida y efectiva. Nuestro equipo de entrenadores altamente capacitados te guiará a lo largo de tu viaje fitness, proporcionándote el apoyo y la motivación necesarios para lograr tus objetivos. ¡Únete a nuestra comunidad y descubre una nueva forma de vivir activamente!
          </p>
          <p>© ZgZGym. Todos los derechos reservados.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Enlaces</h4>
          <p className="my-5">Explora nuestras clases</p>
          <p className="my-5">Descubre nuestros entrenamientos</p>
          <p>Conoce a nuestros instructores</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contáctanos</h4>
          <p className="my-5">Estamos aquí para responder tus preguntas</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
