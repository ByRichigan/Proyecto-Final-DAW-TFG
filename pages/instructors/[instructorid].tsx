import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

export default function InstructorView({ instructor }: any) {
  const router = useRouter();

  const handleDelete = async (instructorid: any) => {
    await axios.delete('/api/instructors/' + instructorid)
    router.push('/admin')
  }

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-300 p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Detalles del Instructor</h1>
          <div className="border p-4">
            <p><strong>Instructor ID:</strong> {instructor.instructorid}</p>
            <p><strong>Nombre:</strong> {instructor.name}</p>
            <p><strong>Apellido:</strong> {instructor.surname}</p>
            <p><strong>DNI:</strong> {instructor.dni}</p>
            <p><strong>Telefono:</strong> {instructor.tlf}</p>
            <p><strong>Email:</strong> {instructor.email}</p>
            <p><strong>Direccion:</strong> {instructor.direccion}</p>
          </div>
          <button className="bg-red-400 px-3 py-2 text-white" onClick={() => handleDelete(instructor.instructorid)}>
            Borrar instructor
          </button>
          <button className="bg-red-400 px-3 py-2 text-white" onClick={() => router.push("/instructors/edit/" + instructor.instructorid)}>
            Editar instructor
          </button>
        </div>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Volver
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context: any) => {
  const { instructorsid } = context.query.instructorid;
  console.log(instructorsid)
  const { instructorsid2 } = context.query;
  console.log(instructorsid2)
  const response = await axios.get(`http://localhost:3000/api/instructors/${instructorsid}`);
  const instructor = response.data;

  return {
    props: {
      instructor,
    },
  };
};
