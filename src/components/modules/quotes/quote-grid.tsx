import { useState } from 'react';

import {
  AvatarIcon,
  Button,
  Flex,
  For,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import Dialog from '@/components/ui/dialog';
import { EmptyState } from '@/components/ui/empty-state';
import { Quote } from '@/types/quote';
import QuoteCard from './quote-card';

type QuoteGridProps = {
  paginatedQuotes: Quote[];
  handleDeleteQuote: (id: number | string) => void;
};

const QuoteGrid = ({ paginatedQuotes, handleDeleteQuote }: QuoteGridProps) => {
  const [isOpenDeleteQuote, setIsOpenDeleteQuote] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<
    Quote | { id: string; phrase: string; author: string }
  >({
    id: '',
    phrase: '',
    author: '',
  });

  const handleOpenDeleteQuote = (quote: Quote) => {
    setSelectedQuote(quote);
    setIsOpenDeleteQuote(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedQuote({
      id: '',
      phrase: '',
      author: '',
    });
    setIsOpenDeleteQuote(false);
  };

  const onHandleDeleteQuote = () => {
    handleDeleteQuote(selectedQuote.id);
    handleCloseDeleteModal();
  };

  return (
    <>
      <Dialog
        open={isOpenDeleteQuote}
        onOpenChange={() => setIsOpenDeleteQuote(false)}
        title="Eliminar frase"
      >
        <Text fontSize="sm" textAlign="center">
          ¿Está seguro de que desea eliminar esta frase?
        </Text>
        <Flex
          direction="row"
          gap="4"
          width="full"
          justifyContent="flex-end"
          position="relative"
          wrap="wrap"
          marginTop="4"
        >
          <Button
            variant="outline"
            borderColor="blue.500"
            color="blue.500"
            type="button"
            width="w-1/2"
            onClick={handleCloseDeleteModal}
          >
            Cancelar
          </Button>
          <Button
            onClick={onHandleDeleteQuote}
            width="full"
            w="w-1/2"
            background="blue.500"
            _hover={{
              bg: 'blue.600',
            }}
            _active={{
              bg: 'blue.400',
            }}
          >
            Eliminar
          </Button>
        </Flex>
      </Dialog>
      <Flex
        direction="row"
        gap="4"
        flex={1}
        w="full"
        wrap="wrap"
        paddingTop={8}
        paddingBottom={8}
        padding={6}
        minHeight={500}
        border="1"
        borderColor="gray.400"
        shadow="sm"
        background={'white'}
      >
        {paginatedQuotes?.length >= 1 ? (
          <SimpleGrid
            columns={{ sm: 2, md: 3, lg: 4, xl: 5 }}
            gap="2rem"
            grid="initial"
            justifyContent="center"
            width="full"
          >
            <For each={paginatedQuotes}>
              {(quote: Quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote}
                  handleOpenDeleteQuote={handleOpenDeleteQuote}
                />
              )}
            </For>
          </SimpleGrid>
        ) : (
          <Flex width="full" justifyContent="center" alignItems="center">
            <EmptyState
              icon={<AvatarIcon />}
              title="No hay datos disponibles"
            />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default QuoteGrid;
