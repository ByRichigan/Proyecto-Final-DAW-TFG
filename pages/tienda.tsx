import Layout from "@/components/Layout";
import { Box, Button, Flex, Input, Spacer, Stack, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

const Store = () => {

  return (
    <Layout>
      <title>Tienda</title>
      <Box p={4}>
        <Flex alignItems="center" mb={4}>
          <Input
            placeholder="Buscar producto"
            mr={2}
          />
          <Button colorScheme="blue" leftIcon={<FaShoppingCart />} variant="outline">
            Carrito
          </Button>
        </Flex>
        <Stack direction="row" spacing={4} flexWrap="wrap">
          <Box borderWidth="1px" rounded="md" p={4} maxW="300px">
            <Image src={require("/public/assets/producto_1.jpg")} alt="Producto 1" width={75} height={75}/>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Producto 1
            </Text>
            <Text fontSize="sm" color="gray.600" mb={4}>
              Precio: $19.99
            </Text>
            <Button colorScheme="blue">
              Comprar
            </Button>
          </Box>
          <Box borderWidth="1px" rounded="md" p={4} maxW="300px">
          <Image src={require("/public/assets/producto_2.jpg")} alt="Producto 1" width={75} height={75}/>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Producto 2
            </Text>
            <Text fontSize="sm" color="gray.600" mb={4}>
              Precio: $24.99
            </Text>
            <Button colorScheme="blue">
              Comprar
            </Button>
          </Box>
          <Box borderWidth="1px" rounded="md" p={4} maxW="300px">
          <Image src={require("/public/assets/producto_3.jpg")} alt="Producto 1" width={100} height={100}/>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Producto 3
            </Text>
            <Text fontSize="sm" color="gray.600" mb={4}>
              Precio: $12.99
            </Text>
            <Button colorScheme="blue">
              Comprar
            </Button>
          </Box>
          {/* Agrega más tarjetas de productos manualmente según sea necesario */}
        </Stack>
      </Box>
    </Layout>
  );
};

export default Store;
