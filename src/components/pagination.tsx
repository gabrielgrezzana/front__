import { Box, Text, Select } from "@chakra-ui/react";
import { useState } from "react";

interface PaginationProps {
    onSortChange: (sort: string) => void;
    numberOfProducts: number;
    productsPerPage: number;
}

function Pagination({ onSortChange, numberOfProducts, productsPerPage }: PaginationProps) {
    const numberOfPages = Math.ceil(numberOfProducts / productsPerPage);

    return (
        <Box width={'100%'} height={'100%'} alignItems={'flex-end'}>
            <select value={'organizar por'} onChange={(e) => onSortChange(e.target.value)} style={{backgroundColor: '#f0f0f5', color: '#000'}}>
                <option color="#000" value="mais vendidos">mais vendidos</option>
                <option color="#000" value="mais recentes">mais recentes</option>
                <option color="#000" value="mais baratos">mais baratos</option>
                <option color="#000" value="mais caros">mais caros</option>
            </select>

            <Box display={'flex'} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                {Array.from({ length: numberOfPages }, (_, index) => (
                    <Box key={index} maxWidth={'50px'} width={'100%'} height={'100%'}>
                        <Text color={'#000'} backgroundColor={'#ccc'} margin={2} textAlign={'center'} borderRadius={5}>{index + 1}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Pagination;