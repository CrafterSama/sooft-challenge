import { useState } from 'react';

import { AvatarIcon, Button, Flex, For, Stack, Text } from '@chakra-ui/react';

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
    <Flex direction="row" gap="4" mt="4" flex={1} w="full" wrap="wrap">
      <Dialog
        open={isOpenDeleteQuote}
        onOpenChange={() => setIsOpenDeleteQuote(false)}
        title="Eliminar frase"
      >
        <Text fontSize="sm" textAlign="center">
          ¿Está seguro de que desea eliminar esta frase?
        </Text>
        <Flex
          w="full"
          direction="row"
          gap="4"
          mt="4"
          justifyContent="flex-end"
          wrap="wrap"
        >
          <Button
            variant="outline"
            type="button"
            width="full"
            onClick={handleCloseDeleteModal}
          >
            Cancelar
          </Button>
          <Button
            variant="solid"
            type="button"
            width="full"
            onClick={onHandleDeleteQuote}
          >
            Eliminar
          </Button>
        </Flex>
      </Dialog>
      <Stack
        gap="8"
        direction="row"
        wrap="wrap"
        justifyContent="space-evenly"
        w="full"
      >
        {paginatedQuotes?.length >= 1 ? (
          <For each={paginatedQuotes}>
            {(quote: Quote) => (
              <QuoteCard
                key={quote.id}
                quote={quote}
                handleOpenDeleteQuote={handleOpenDeleteQuote}
              />
            )}
          </For>
        ) : (
          <Flex width="full" justifyContent="center" alignItems="center">
            <EmptyState
              icon={<AvatarIcon />}
              title="No hay datos disponibles"
            />
          </Flex>
        )}
      </Stack>
    </Flex>
  );
};

export default QuoteGrid;
