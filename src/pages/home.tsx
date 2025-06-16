import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Page from '../components/page';
import Filters from '../components/filters';
import Pagination from '../components/pagination';
import { products as ProductsMocks } from '../mocks/data.info';
import Cards from '../components/cards';

function Home() {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(ProductsMocks);

  

  return (
      <Page onSearch={(search) => setSearch(search)}>
        <Box width={'100%'} height={'35%'} display={'flex'} flexDirection={'row'}>
          <Box  width={'50%'} height={'100%'}>
            <Filters onFilterChange={(filter) => setSelectedFilter(filter)} />            
          </Box>
          <Box width={'50%'} height={'100%'}>
            <Pagination onSortChange={(sort) => console.log(sort)} numberOfProducts={60} productsPerPage={10} />
          </Box>
        </Box>
        <Box width={'100%'} height={'65%'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={'90%'} height={'100%'}display={'grid'} gridTemplateColumns={'repeat(4, 1fr)'} gap={10} overflow={'auto'}>
            {products.map((product) => (
              <Cards key={product.id} product={product} />
            ))}
          </Box>
        </Box>
      </Page>
  );
}

export default Home;