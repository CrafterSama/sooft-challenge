import AuthDirective from '@/components/modules/auth/auth-directive';
import Header from '@/components/modules/common/header';
import { Container, Flex } from '@chakra-ui/react';

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthDirective>
      <Flex direction="column" w="full" h="screen">
        <Header />
        <Container maxW="container.xl">{children}</Container>
      </Flex>
    </AuthDirective>
  );
};

export default UsersLayout;
