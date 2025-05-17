import * as yup from 'yup';

export const QuoteSchema = () =>
  yup.object({
    id: yup.string().notRequired(),
    phrase: yup.string().required('La Frase es obligatorio'),
    author: yup.string().required('Nombre del Autor es obligatorio'),
  });

export type QuoteSchemaType = yup.InferType<ReturnType<typeof QuoteSchema>>;
