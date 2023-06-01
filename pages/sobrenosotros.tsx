import Image from 'next/image';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { Flex, VStack, useBreakpointValue, Box, Heading, Text, Card } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const aboutText = `
    Somos una empresa dedicada a ofrecer soluciones tecnológicas innovadoras para nuestros clientes. Con más de 10 años de experiencia en el mercado, nos hemos posicionado como líderes en el sector.

    Nuestro equipo está formado por profesionales altamente capacitados y apasionados por su trabajo. Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y ofrecerles las mejores soluciones a medida.

    En nuestra empresa, nos enorgullece mantener altos estándares de calidad en todos nuestros productos y servicios. Nos esforzamos por superar las expectativas de nuestros clientes y garantizar su satisfacción total.

    Valoramos la transparencia y la honestidad en todas nuestras relaciones comerciales. Creemos en la construcción de relaciones a largo plazo basadas en la confianza mutua y el respeto.

    Si estás buscando soluciones tecnológicas confiables y de vanguardia, no dudes en contactarnos. Estaremos encantados de ayudarte a alcanzar tus objetivos empresariales.
  `;

  return (
    <Layout>
      <title>Sobre nosotros</title>
      <Flex
        w="full"
        h="100vh"
        backgroundImage="/assets/imagen_home1.jpg"
        backgroundSize="cover"
        backgroundPosition="center center"
      >
        <VStack
          w="full"
          justify="center"
          px={useBreakpointValue({ base: 4, md: 8 })}
          textAlign="center"
          color="white"
        >
          <Card
            bg="blackAlpha.500"
            p={8}
            rounded="md"
            boxShadow="lg"
            maxW={useBreakpointValue({ base: '90%', md: 'lg' })}
          >
            <Box color="white">
              <Heading as="h1" size="2xl" mb={4}>
                Sobre nosotros
              </Heading>
            </Box>
            <VStack align="center" spacing={4}>
              {aboutText.split('\n\n').map((paragraph, index) => (
                <Text key={index} fontSize="lg" color="white" fontWeight="bold">
                  {paragraph}
                </Text>
              ))}
            </VStack>
          </Card>
        </VStack>
      </Flex>
    </Layout>
  );
}
