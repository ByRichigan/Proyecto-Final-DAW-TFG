import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout';
import ListaActividades from '@/components/ListaActividades';


export default function Home() {


  return (
    <Layout>
      
      <ListaActividades></ListaActividades>
    </Layout>
  );
}
