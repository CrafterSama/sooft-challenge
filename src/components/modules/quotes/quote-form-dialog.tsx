import QuoteForm from '@/components/modules/quotes/quote-form';
import Dialog from '@/components/ui/dialog';

type QuoteFormDialogProps = {
  isOpenQuoteForm: boolean;
  handleCloseQuoteForm: () => void;
  setFilteredQuotes: (quotes: any[]) => void;
  setCurrentPage: (page: number) => void;
};

const QuoteFormDialog = ({
  isOpenQuoteForm,
  handleCloseQuoteForm,
  setFilteredQuotes,
  setCurrentPage,
}: QuoteFormDialogProps) => {
  return (
    <Dialog
      open={isOpenQuoteForm}
      onOpenChange={() => handleCloseQuoteForm()}
      title="Guardar frase"
    >
      <QuoteForm
        onCancel={handleCloseQuoteForm}
        updateData={setFilteredQuotes}
        updatePage={setCurrentPage}
      />
    </Dialog>
  );
};

export default QuoteFormDialog;
