import Layout from "@/components/Layout";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const activities = [
  {
    title: "Yoga",
    description: "Clase de yoga para mejorar la flexibilidad y el equilibrio.",
    image: "/assets/lista_a_1.png",
  },
  {
    title: "Pilates",
    description: "Entrenamiento de pilates para fortalecer el cuerpo y mejorar la postura.",
    image: "/assets/lista_a_2.png",
  },
  {
    title: "Spinning",
    description: "Sesión de spinning de alta intensidad para mejorar la resistencia cardiovascular.",
    image: "/assets/lista_a_3.png",
  },
  {
    title: "Zumba",
    description: "Ritmos latinos combinados con ejercicio aeróbico para una divertida sesión de baile.",
    image: "/assets/lista_a_4.png",
  },
  {
    title: "CrossFit",
    description: "Entrenamiento funcional de alta intensidad para mejorar la fuerza y la resistencia.",
    image: "/assets/lista_a_5.png",
  },
  {
    title: "Kickboxing",
    description: "Combina técnicas de boxeo y artes marciales para un entrenamiento completo.",
    image: "/assets/lista_a_6.png",
  },
];

const localizer = momentLocalizer(moment);

const Container = () => {
  return (
    <Box w="100%" border="1px" p={4} borderRadius="md">
      <Text fontSize="3xl" fontWeight="bold" color={"white"} mb={4} mt={4}>
        Clases de Fitness
      </Text>
      <Text fontSize="lg" textAlign="left" color={"white"} mb={8}>
        ¡Descubre nuestras actividades y encuentra la que mejor se adapte a tus objetivos!
      </Text>

      <Flex flexWrap="wrap" justifyContent="center">
        {activities.map((activity, index) => (
          <Box key={index} w={{ base: "100%", sm: "50%", md: "33.33%", lg: "25%" }} p={4}>
            <Box bg="white" rounded="lg" shadow="lg" p={4} h="100%">
              <Image src={activity.image} alt="" mb={2} w="100%" h="32" objectFit="cover" />
              <Text fontSize="lg" fontWeight="bold" mb={2}>
                {activity.title}
              </Text>
              <Text fontSize="sm" mb={4}>
                {activity.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default function Home() {
  const eventos = Array.from(Array(10).keys()).map((index) => ({
    title: `Spinning ${index + 1}`,
    start: new Date(2023, 5, 1 + index, 10, 0), // Fecha y hora de inicio del evento
    end: new Date(2023, 5, 1 + index, 12, 0), // Fecha y hora de fin del evento
  }));

  return (
    <Layout>
      <title>Actividades</title>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/assets/fotohome.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Container />
        </VStack>
      </Flex>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          views={['month', 'week', 'day']}
          defaultView="week" // Vista predeterminada
        />
      </div>
    </Layout>
  );
}
