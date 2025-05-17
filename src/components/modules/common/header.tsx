'use client';

import { LuChevronLeft } from 'react-icons/lu';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Avatar } from '@/components/ui/avatar';
import useAppStoreContext from '@/state-management/users-app-global-state';
import { Bleed, Button, Flex, Text } from '@chakra-ui/react';

const Header = () => {
  const { auth, adminUser } = useAppStoreContext();
  const params = useParams();

  return (
    <Bleed
      bg="gray.100"
      py={2}
      px={4}
      w="full"
      borderBottom={1}
      borderColor="gray.200"
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <Flex direction="row" gap="4" alignItems="center">
          {params?.id && (
            <Link href="/users" passHref>
              <Button
                variant="ghost"
                flex="row"
                alignItems={'center'}
                justifyContent={'center'}
                gap={2}
              >
                <LuChevronLeft />
                Volver
              </Button>
            </Link>
          )}
        </Flex>
        <Flex
          direction="row"
          gap="4"
          alignItems="center"
          justifyContent={'end'}
        >
          <Avatar size="sm" name={adminUser.name} />
          <Flex direction="column" alignItems="start" justifyContent="center">
            <Text fontSize="base" fontWeight="semibold">
              {adminUser.name}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {adminUser.email}
            </Text>
          </Flex>
          <Button variant="solid" onClick={auth.logout}>
            Logout
          </Button>
        </Flex>
      </Flex>
    </Bleed>
  );
};

export default Header;
