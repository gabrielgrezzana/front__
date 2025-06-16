import { Input, Box, Text } from "@chakra-ui/react";

interface HeaderProps {
    onSearch: (search: string) => void;
}

function Header({ onSearch }: HeaderProps) {
    return (
        <Box width='100%' bg={'#c3c3c3'} height={'80px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'0 20px'}>
            <Box width={'50%'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Text fontSize={'24px'} fontWeight={'bold'} color={'#000'} fontFamily={'Poppins'}>CAPUTTENO</Text>
            </Box>
            <Box width={'50%'} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                <Input borderStyle={'none'} bg={'#fff'} placeholder='Procurando por algo?' onChange={(e) => onSearch(e.target.value)} />
            </Box>
        
        </Box>
    )
}

export default Header;