import { Avatar } from '@/components/ui/avatar';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { Button, Flex, Text } from '@chakra-ui/react';
import { LuLogOut } from 'react-icons/lu';

const UserInfo = () => {
  const { auth, adminUser } = useAppStoreContext();
  return (
    <Flex direction="row" gap="4" alignItems="center" justifyContent={'end'}>
      <Avatar size="sm" name={adminUser.name} />
      <Flex direction="column" alignItems="start" justifyContent="center">
        <Text fontSize="base" fontWeight="semibold">
          {adminUser.name}
        </Text>
        <Text fontSize="xs" color="gray.500">
          {adminUser.email}
        </Text>
      </Flex>
      <Button
        variant="outline"
        onClick={auth.logout}
        color="blue.500"
        borderColor="blue.500"
        borderRadius="md"
      >
        <LuLogOut />
      </Button>
    </Flex>
  );
};

export default UserInfo;
