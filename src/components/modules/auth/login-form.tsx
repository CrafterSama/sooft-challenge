'use client';

import { useForm } from 'react-hook-form';

import { PasswordInput } from '@/components/ui/password-input';
import { toaster } from '@/components/ui/toaster';
import { ADMIN_USER } from '@/constants/common';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { LoginFormValues } from '@/types/common';
import { Button, Field, Input, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';

import { LogInSchema } from './login.schema';

const LoginForm = () => {
  const { auth } = useAppStoreContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(LogInSchema()),
  });

  const onSubmit = (data: LoginFormValues) => {
    if (
      data.email !== ADMIN_USER.email ||
      data.password !== ADMIN_USER.password
    ) {
      toaster.create({
        title: 'Error',
        description: 'email o password inválidos',
        type: 'error',
      });
      return;
    }

    auth.login(data.email, data.password);
    toaster.create({
      title: 'Success',
      description: 'Iniciaste sesión de forma satisfactoria',
      type: 'success',
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap="4" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.email}>
          <Input {...register('email')} placeholder="admin@example.com" />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password}>
          <PasswordInput {...register('password')} placeholder="password" />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button role="button" name="login" type="submit" width="full">
          Login
        </Button>
      </Stack>
      <Text fontSize="sm" textAlign="center" color="gray.400">
        datos de sesión: admin@example.com:password
      </Text>
    </form>
  );
};

export default LoginForm;
