import Page from "../components/page";
import { Box, Text, Image, Button, Spacer } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import type { Product } from "../mocks/data.info";
import { products } from "../mocks/data.info";


function Details() {
    const { id } = useParams();
    const product = products.find((product: Product) => product.id === Number(id));

    return (
        <Page onSearch={() => {}}>
            <Box width={'100%'} height={'90%'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
                <Box width={'90%'} height={'80%'} display={'flex'} bg='#f0f0f5' borderRadius={10}>
                    <Box width={'50%'} height={'100%'}>
                        <Image src={product?.image} alt={product?.name} width={'100%'} height={'100%'} borderRadius={10}/>
                    </Box>
                    <Box width={'50%'} height={'100%'} justifyContent={'space-around'} display={'flex'} flexDirection={'column'} padding={10}>
                        <Text color={'#000'} textAlign={'start'} fontSize={'24px'} fontWeight={'bold'}>{product?.name}</Text>
                        <Text color={'#000'} textAlign={'start'} fontWeight={'bold'} fontSize={'16px'}>R$ {product?.price}</Text>
                        <Text marginTop={5} color={'rgb(67, 67, 69)'} textAlign={'start'} fontWeight={'400'} fontSize={'16px'}>* Frete de R$ 10,00 para todo Brasil. Grátis para compras acima de R$ 250,00.</Text>
                        <Spacer />
                        <Text fontWeight={'400'} color={'rgb(119, 119, 125)'} textAlign={'start'} fontSize={'16px'}>DESCRIÇÃO</Text>                        
                        <Text color={'#000'} textAlign={'start'} fontSize={'16px'}>{product?.description}</Text>              
                        <Spacer/>          
                        <Button width={'100%'} height={'15%'} bg={'rgb(38, 34, 155)'} color={'#fff'} borderRadius={10} onClick={() => {}}>Adicionar ao carrinho</Button>
                    </Box>
                </Box>
            </Box>
            
        </Page>
    )
}

export default Details;

