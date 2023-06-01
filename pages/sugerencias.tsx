import { useState } from 'react';
import Layout from '@/components/Layout';
import {
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Box,
  Heading,
} from '@chakra-ui/react';

export default function Home() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [reason, setReason] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para enviar la sugerencia

    // Simulación de envío exitoso
    setTimeout(() => {
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setReason('');
      setMessage('');
      toast({
        title: 'Sugerencia enviada',
        description: '¡Gracias por tu sugerencia!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }, 2000);
  };

  return (
    <Layout>
      <title>Sugerencias</title>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'url(/assets/lista_a_4.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={{ base: 4, md: 8 }}
          color="black">
          <Box bg="white" p={8} rounded="md" shadow="md" maxW="500px" w="100%">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <Heading as="h2" mb={6} textAlign="center">
                  Contacto
                </Heading>
                <FormControl id="name" mb={4}>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="email" mb={4}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="phone" mb={4}>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </FormControl>
                <FormControl id="reason" mb={4}>
                  <FormLabel>Motivo del contacto</FormLabel>
                  <Input
                    type="text"
                    placeholder="Motivo del contacto"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </FormControl>
                <FormControl id="message" mb={4}>
                  <FormLabel>Mensaje</FormLabel>
                  <Textarea
                    placeholder="Escribe aquí tu sugerencia"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </FormControl>
                <Button type="submit" colorScheme="blue" mt={6}>
                  Enviar
                </Button>
              </form>
            ) : (
              <Heading as="h3" size="lg" textAlign="center">
                Tu sugerencia ha sido enviada correctamente. ¡Gracias por tu feedback!
              </Heading>
            )}
          </Box>
        </VStack>
      </Flex>
    </Layout>
  );
}
