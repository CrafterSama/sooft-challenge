'use client';

import { LuChevronLeft } from 'react-icons/lu';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { Bleed, Button, Flex } from '@chakra-ui/react';
import UserInfo from './user-info';

const Header = () => {
  const params = useParams();

  return (
    <Bleed
      bg="gray.50"
      py={2}
      px={4}
      w="full"
      borderBottom={1}
      borderColor="gray.400"
      shadow="md"
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
        <UserInfo />
      </Flex>
    </Bleed>
  );
};

export default Header;
