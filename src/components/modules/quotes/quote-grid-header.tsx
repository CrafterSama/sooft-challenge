import { Button, Flex, Text } from '@chakra-ui/react';

const QuoteListHeader = ({ onCreateQuote }: { onCreateQuote: () => void }) => {
  return (
    <Flex
      w="full"
      direction={{ base: 'column', md: 'row' }}
      justifyContent={{ base: 'center', md: 'space-between' }}
      gap="2"
    >
      <Flex
        direction="column"
        justifyContent={{ base: 'center', md: 'start' }}
        gap="2"
      >
        <Text
          fontSize="2xl"
          fontWeight="semibold"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Grilla de Frases
        </Text>
        <Text
          fontSize="sm"
          textAlign={{
            base: 'center',
            md: 'left',
          }}
        >
          Crea, Busca/Filtra y Elimina Frases
        </Text>
      </Flex>
      <Flex
        direction={{
          base: 'column',
          md: 'row',
        }}
        justifyContent="start"
        gap="2"
      >
        <Button onClick={onCreateQuote} variant="solid">
          Nueva Frase
        </Button>
      </Flex>
    </Flex>
  );
};

export default QuoteListHeader;
