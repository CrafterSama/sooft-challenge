import { Flex, Input } from '@chakra-ui/react';

type QuoteGridHeaderActionsProps = {
  handleSearch: (value: string) => void;
};

const QuoteGridHeaderActions = ({
  handleSearch,
}: QuoteGridHeaderActionsProps) => {
  return (
    <Flex
      w="full"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      mt="4"
    >
      <Input
        placeholder="Buscar Frases"
        onKeyUp={(e) => handleSearch(e.currentTarget.value as string)}
        width={{ base: 'full', md: 'xs' }}
      />
    </Flex>
  );
};

export default QuoteGridHeaderActions;
