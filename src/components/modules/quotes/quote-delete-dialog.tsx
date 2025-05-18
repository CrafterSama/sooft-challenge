import Dialog from '@/components/ui/dialog';
import { Button, Flex, Text } from '@chakra-ui/react';

type QuoteDeleteDialogProps = {
  isOpenDeleteQuote: boolean;
  setIsOpenDeleteQuote: (isOpenDeleteQuote: boolean) => void;
  handleCloseDeleteModal: () => void;
  onHandleDeleteQuote: () => void;
};

const QuoteDeleteDialog = ({
  isOpenDeleteQuote,
  setIsOpenDeleteQuote,
  handleCloseDeleteModal,
  onHandleDeleteQuote,
}: QuoteDeleteDialogProps) => {
  return (
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
          borderRadius="lg"
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
          borderRadius="lg"
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
  );
};

export default QuoteDeleteDialog;
