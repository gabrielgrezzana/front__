import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

interface FiltersProps {
    onFilterChange: (filter: string) => void;
}

function Filters({ onFilterChange }: FiltersProps) {
    const [selectedFilter, setSelectedFilter] = useState('todos');

    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
        onFilterChange(filter);
    }

    return (
        <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItems={'flex-start'} padding={10}>
            <Box width={'33%'} onClick={() => handleFilterClick('todos')} borderBottomWidth={selectedFilter === 'todos' ? 2 : 0} borderBottomColor={'orange'}>
                <Text textAlign={'center'} fontSize={'16px'} fontWeight={'bold'} color={'#000'} fontFamily={'Poppins'}>TODOS PRODUTOS</Text>
            </Box>
            <Box width={'33%'} onClick={() => handleFilterClick('camisetas')} borderBottomWidth={selectedFilter === 'camisetas' ? 2 : 0} borderBottomColor={'orange'}>
                <Text textAlign={'center'} fontSize={'16px'} fontWeight={'bold'} color={'#000'} fontFamily={'Poppins'}>CAMISETAS</Text>
            </Box>
            <Box width={'33%'} onClick={() => handleFilterClick('canecas')} borderBottomWidth={selectedFilter === 'canecas' ? 2 : 0} borderBottomColor={'orange'}>
                <Text textAlign={'center'} fontSize={'16px'} fontWeight={'bold'} color={'#000'} fontFamily={'Poppins'}>CANECAS</Text>
            </Box>
        </Box>
    )
}

export default Filters;