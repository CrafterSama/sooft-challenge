import Card from '@/components/ui/card';
import { Quote } from '@/types/quote';
import { IconButton, Text } from '@chakra-ui/react';
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
      <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
        {quote.phrase}
      </Text>
      <Text fontSize="sm" textAlign="center">
        {quote.author}
      </Text>
    </Card>
  );
};

export default QuoteCard;
