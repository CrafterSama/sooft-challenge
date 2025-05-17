import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';

import { Flex, IconButton } from '@chakra-ui/react';

type PaginationProps = {
  data: any[];
  currentPage: number;
  setCurrentPage: (page: number | ((prev: number) => number)) => void;
  totalPages: number;
};

const Pagination = ({
  data,
  currentPage,
  setCurrentPage,
  totalPages,
}: PaginationProps) => {
  return (
    <Flex
      width="full"
      direction="row"
      justifyContent={data?.length > 0 ? 'space-between' : 'end'}
      verticalAlign="center"
    >
      {data?.length > 0 && (
        <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
          Página {currentPage} de {totalPages}
        </div>
      )}
      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        <IconButton
          size="xs"
          disabled={currentPage === 1 || data?.length === 0}
          onClick={() => setCurrentPage((prev: number) => prev - 1)}
        >
          <LuChevronLeft />
        </IconButton>
        <IconButton
          size="xs"
          disabled={currentPage === totalPages || data?.length === 0}
          onClick={() => setCurrentPage((prev: number) => prev + 1)}
        >
          <LuChevronRight />
        </IconButton>
      </div>
    </Flex>
  );
};

export default Pagination;
