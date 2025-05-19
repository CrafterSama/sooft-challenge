import { Quote } from '@/types/quote';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { LuTrash } from 'react-icons/lu';

const QuoteCard = ({
  quote,
  handleOpenDeleteQuote,
}: {
  quote: Quote;
  handleOpenDeleteQuote: (quote: Quote) => void;
}) => {
  return (
    <Box
      width={{
        base: 'full',
        sm: 'w-1/2',
        md: 'w-1/3',
        lg: 'w-1/4',
        xl: 'w-1/5',
      }}
      minW={{
        base: 'full',
        xl: '230px',
      }}
      padding="1rem"
      height="200px"
      borderRadius="lg"
      shadow="md"
      position="relative"
    >
      <Flex
        direction="column"
        justifyContent="space-between"
        w="full"
        h="full"
        className="group"
      >
        <IconButton
          aria-label="Delete Phrase"
          onClick={() => handleOpenDeleteQuote(quote)}
          borderRadius="lg"
          background="red.400"
          size="xs"
          width={8}
          position="absolute"
          top="-.35rem"
          right="-.35rem"
          opacity={0}
          _groupHover={{
            opacity: 1,
          }}
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
    </Box>
  );
};

export default QuoteCard;
