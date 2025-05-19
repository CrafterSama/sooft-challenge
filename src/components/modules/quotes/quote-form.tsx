import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { toaster } from '@/components/ui/toaster';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { Quote as QuoteFormProps } from '@/types/quote';
import { Button, Field, Flex, Input, Stack, Textarea } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { QuoteSchema } from './quote-form.schema';

const QuoteForm = ({
  onCancel,
  updateData,
  updatePage,
}: {
  onCancel: () => void;
  updateData: (quote: QuoteFormProps[]) => void;
  updatePage: (page: number) => void;
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(QuoteSchema()),
  });
  const { quotes, addQuote } = useAppStoreContext();

  const onSubmit = (data: QuoteFormProps) => {
    const quote = {
      id: Math.floor(Math.random() * 1000),
      phrase: data.phrase,
      author: data.author,
    };
    addQuote(quote);
    toaster.create({
      title: 'Success',
      description: 'Frase creada exitosamente',
      type: 'success',
    });
    onCancel();
  };

  const handleKeyUp = (value: string) => {
    if (value.length >= 140) {
      return;
    }
    return setValue('phrase', value);
  };

  useEffect(() => {
    updateData(quotes);
    updatePage(1);
  }, [quotes]);

  return (
    <Flex w="full" direction="column" gap="4" mt="4">
      <form onSubmit={handleSubmit(onSubmit as any)} style={{ width: '100%' }}>
        <Stack w="full" gap="4">
          <Field.Root invalid={!!errors.phrase}>
            <Field.Label>Frase</Field.Label>
            <Textarea
              {...register('phrase')}
              rows={4}
              onKeyUp={(e) => handleKeyUp(e.currentTarget.value)}
              borderRadius="lg"
              placeholder="Frase"
            />
            <Field.ErrorText>{errors.phrase?.message}</Field.ErrorText>
          </Field.Root>
          <Field.Root invalid={!!errors.author}>
            <Field.Label>Autor</Field.Label>
            <Input
              {...register('author')}
              borderRadius="lg"
              placeholder="Autor"
            />
            <Field.ErrorText>{errors.author?.message}</Field.ErrorText>
          </Field.Root>
          <Flex
            direction="row"
            gap="4"
            width="full"
            justifyContent="flex-end"
            position="relative"
            wrap="wrap"
          >
            <Button
              variant="outline"
              borderRadius="lg"
              borderColor="blue.500"
              color="blue.500"
              type="button"
              width="w-1/2"
              onClick={onCancel}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
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
              Guardar
            </Button>
          </Flex>
        </Stack>
      </form>
    </Flex>
  );
};

export default QuoteForm;
