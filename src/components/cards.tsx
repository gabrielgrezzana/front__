import { Box, Text, Image } from "@chakra-ui/react";
import type { Product } from "../mocks/data.info";
import './../style/card.style.css';

interface CardProps {
    product: Product;
    onClick: () => void;
}

function Cards({ product, onClick }: CardProps) {
    return (
        <Box className="card" width={'256px'} height={'376px'} bg={'#fff'} onClick={onClick} cursor={'pointer'}>
            <Image borderTopRadius={5} width={'100%'} height={'75%'} src={product.image} alt={product.name} />
            <Box borderBottomWidth={2} width={'90%'} marginLeft={3} marginTop={2}>
                <Text textAlign={'start'} padding={2} color={'#000'} fontSize={'14px'}>{product.name}</Text>
            </Box>
            <Box width={'90%'} marginLeft={3}>
                <Text textAlign={'start'} padding={2} color={'#000'}>R$ {product.price}</Text>
            </Box>             
        </Box>
    )
}

export default Cards;