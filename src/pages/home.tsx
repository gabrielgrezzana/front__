import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Page from '../components/page';
import Filters from '../components/filters';
import Pagination from '../components/pagination';
import { products as ProductsMocks } from '../mocks/data.info';
import Cards from '../components/cards';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [selectedFilter, setSelectedFilter] = useState('todos');
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(ProductsMocks);
  const [currentPage, setCurrentPage] = useState(1);  
  const [sort, setSort] = useState('mais vendidos');
  const productsPerPage = 9;


  //just navigate to details page
  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    navigate(`/details/${id}`);
  }
  

  

  return (
      <Page onSearch={(search) => setSearch(search)}>
        <Box width={'100%'} height={'15%'} display={'flex'} flexDirection={'row'}>
          <Box  width={'50%'} height={'100%'}>
            <Filters onFilterChange={(filter) => setSelectedFilter(filter)} />            
          </Box>
          <Box width={'50%'} height={'100%'}>
            <Pagination onSortChange={(sort) => setSort(sort)} numberOfProducts={products.length} productsPerPage={productsPerPage} changePage={(page) => setCurrentPage(page)}/>
          </Box>
        </Box>
        <Box width={'100%'} height={'65%'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={'80%'} height={'100%'}display={'grid'} gridTemplateColumns={'repeat(3, 1fr)'} gap={10} overflow={'auto'}>
            {products.map((product) => (
              <Cards key={product.id} product={product} onClick={() => handleNavigate(product.id)} />
            ))}
          </Box>
        </Box>
      </Page>
  );
}

export default Home;