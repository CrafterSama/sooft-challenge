'use client';

import { useEffect, useState } from 'react';

import QuoteFormDialog from '@/components/modules/quotes/quote-form-dialog';
import QuoteGrid from '@/components/modules/quotes/quote-grid';
import QuoteGridHeader from '@/components/modules/quotes/quote-grid-header';
import QuoteGridHeaderActions from '@/components/modules/quotes/quote-grid-header-actions';
import Pagination from '@/components/ui/template/pagination';
import { toaster } from '@/components/ui/toaster';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { Quote } from '@/types/quote';
import { Flex } from '@chakra-ui/react';

const QuotesPage = () => {
  const { quotes, deleteQuote } = useAppStoreContext();

  const [currentPage, setCurrentPage] = useState(1);
  const [isOpenQuoteForm, setIsOpenQuoteForm] = useState(false);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>(quotes);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(quotes.length / itemsPerPage);
  const paginatedQuotes: Quote[] = filteredQuotes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSearch = (value: string) => {
    setFilteredQuotes(
      quotes.filter(
        (quote) =>
          quote.phrase.toLowerCase().includes(value.toLowerCase()) ||
          quote.author.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleCreateQuote = () => {
    setIsOpenQuoteForm(true);
  };

  const handleCloseQuoteForm = () => {
    setIsOpenQuoteForm(false);
  };

  const handleDeleteQuote = (id: number | string) => {
    deleteQuote(id);
    setCurrentPage(1);
    toaster.create({
      title: 'Success',
      description: 'Frase eliminada exitosamente',
      type: 'success',
    });
  };

  useEffect(() => {
    setFilteredQuotes(quotes);
  }, [quotes]);

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
      h="screen"
      padding={{ base: '4', md: '8' }}
    >
      <QuoteFormDialog
        isOpenQuoteForm={isOpenQuoteForm}
        handleCloseQuoteForm={handleCloseQuoteForm}
        setFilteredQuotes={setFilteredQuotes}
        setCurrentPage={setCurrentPage}
      />

      <QuoteGridHeader />

      <QuoteGridHeaderActions
        handleSearch={handleSearch}
        onCreateQuote={handleCreateQuote}
      />

      <QuoteGrid
        paginatedQuotes={paginatedQuotes}
        handleDeleteQuote={handleDeleteQuote}
      />
      <Pagination
        data={paginatedQuotes}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </Flex>
  );
};

export default QuotesPage;
