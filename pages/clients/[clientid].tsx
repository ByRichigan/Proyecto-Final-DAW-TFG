import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";

export default function ClientView({ client }: any) {

  const router = useRouter();

  const handleDelete = async (clientid: any) => {
    await axios.delete('/api/clients/' + clientid)
    router.push('/admin')
  }

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-300 p-8 rounded shadow">
          <h1 className="text-2xl font-bold mb-4">Client Details</h1>
          <div className="border p-4">
            <p><strong>Client ID:</strong> {client.clientid}</p>
            <p><strong>Name:</strong> {client.name}</p>
            <p><strong>Surname:</strong> {client.surname}</p>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Telephone:</strong> {client.tlf}</p>
            <p><strong>DNI:</strong> {client.dni}</p>
            <p><strong>City:</strong> {client.city}</p>
          </div>
          <button className="bg-red-400 px-3 py-2 text-white" onClick={() => handleDelete(client.clientid)}>
            Borrar cliente
          </button>
          <button className="bg-red-400 px-3 py-2 text-white" onClick={() => router.push("/clients/edit/" + client.clientid)}>
            Editar cliente
          </button>
        </div>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async (context: any) => {
  const { clientid } = context.query;
  const response = await axios.get(`http://localhost:3000/api/clients/${clientid}`);
  const client = response.data;

  return {
    props: {
      client,
    },
  };
};
