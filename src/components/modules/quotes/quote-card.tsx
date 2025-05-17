import Card from '@/components/ui/card';
import { Quote } from '@/types/quote';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import { LuTrash } from 'react-icons/lu';

const QuoteCard = ({
  quote,
  handleOpenDeleteQuote,
}: {
  quote: Quote;
  handleOpenDeleteQuote: (quote: Quote) => void;
}) => {
  return (
    <Card width="230px">
      <Flex direction="column" justifyContent="space-between" w="full" h="full">
        <IconButton
          aria-label="Delete Phrase"
          onClick={() => handleOpenDeleteQuote(quote)}
          background="red.400"
          size="xs"
          width={8}
          position="absolute"
          top="-.35rem"
          right="-.35rem"
        >
          <LuTrash />
        </IconButton>
        <Text
          fontSize="xl"
          fontFamily="serif"
          fontStyle="italic"
          fontWeight="semibold"
          textAlign="start"
        >
          {quote.phrase}
        </Text>
        <Text
          fontSize="sm"
          fontFamily="serif"
          fontStyle="italic"
          textAlign="start"
          justifySelf="flex-end"
        >
          {`- ${quote.author}`}
        </Text>
      </Flex>
    </Card>
  );
};

export default QuoteCard;
