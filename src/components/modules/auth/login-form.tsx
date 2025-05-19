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
      <Stack gap="8" align="flex-start" maxW="sm">
        <Field.Root invalid={!!errors.email}>
          <Input
            {...register('email')}
            placeholder="admin@example.com"
            borderRadius="lg"
          />
          <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!!errors.password}>
          <PasswordInput
            {...register('password')}
            placeholder="password"
            borderRadius="lg"
          />
          <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
        </Field.Root>
        <Button
          role="button"
          name="login"
          type="submit"
          width="full"
          borderRadius="lg"
          background="blue.500"
          _hover={{
            bg: 'blue.600',
          }}
          _active={{
            bg: 'blue.400',
          }}
        >
          Login
        </Button>
      </Stack>
      <Text fontSize="sm" textAlign="center" color="gray.400" mt={4}>
        usuario: admin@example.com, password: password
      </Text>
    </form>
  );
};

export default LoginForm;
