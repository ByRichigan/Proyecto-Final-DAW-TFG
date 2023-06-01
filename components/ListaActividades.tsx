import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";

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

const Container = () => {
    
    return (
        <Box w="100%" border="1px" p={4} borderRadius="md">
            <Text fontSize="3xl" fontWeight="bold" mb={4} mt={4}>
                Clases de Fitness
            </Text>
            <Text fontSize="lg" textAlign="center" mb={8}>
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
                            <Button colorScheme="blue" fontWeight="bold" py={2} px={4} rounded="md">
                                Apuntarse
                            </Button>
                        </Box>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default Container;
