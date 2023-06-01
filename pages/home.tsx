import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout';
import Featured from '@/components/Featured';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Text, Flex, Heading } from '@chakra-ui/react'
import {
  Stack,
  Button,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function Home() {


  return (
    <Layout>
      <title>Home</title>
      {/* Seccion Inicial */}
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/assets/fotohome.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        </VStack>
      </Flex>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/assets/dietistaimagen.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        </VStack>
      </Flex>
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={
          'url(/assets/lista_a_3.png)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, whiteAlpha.200, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Heading
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
              lineHeight={'110%'}>
              Solo los mejores profesionales{' '}
              <Text as={'span'} color={'blue.500'}>
                estan en ZGZGYM
              </Text>
            </Heading>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Disfruta de las mejores clases colectivas junto a nosotros.
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </Layout>
  );
}
