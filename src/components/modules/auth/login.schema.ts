import * as yup from 'yup';

export const LogInSchema = () =>
  yup.object().shape({
    email: yup
      .string()
      .required('El correo electrónico es requerido')
      .email('Ingresa un correo válido.'),
    password: yup.string().required('La contraseña es requerida'),
  });

export type LogInSchemaType = yup.InferType<ReturnType<typeof LogInSchema>>;
