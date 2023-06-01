import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { Flex, VStack, useBreakpointValue } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <title>Rutinas</title>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(/assets/carrousel_2.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <iframe
            src="https://www.entrenamientos.com/entrenamientos"  // Reemplaza con la URL que deseas incrustar
            width="100%"
            height="500px"
            frameBorder="0"
          ></iframe>
        </VStack>
      </Flex>
    </Layout>
  );
}
