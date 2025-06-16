import { Input, Box, Text, InputGroup , } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

interface HeaderProps {
    onSearch: (search: string) => void;
}

function Header({ onSearch }: HeaderProps) {
    return (
        <Box width='100%' bg={'rgb(193, 192, 216)'} height={'80px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} padding={'0 20px'}>            
            <Box width={'50%'} display={'flex'} justifyContent={'flex-start'} alignItems={'center'}>
                <Text fontSize={'24px'} fontWeight={'bold'} color={'#000'} fontFamily={'Poppins'}>CAPUTTENO</Text>
            </Box>
            <Box position="relative" width={'40%'}>
                    <Input 
                        borderStyle={'none'} 
                        bg={'#fff'} 
                        placeholder='Procurando por algo?' 
                        onChange={(e) => onSearch(e.target.value)}
                        paddingRight="40px" 
                    />
                    <Box 
                        position="absolute" 
                        right="10px" 
                        top="50%" 
                        transform="translateY(-50%)"
                        pointerEvents="none"
                    >
                        <IoSearchOutline color={'#000'} size="20px"  />
                    </Box>
                </Box>
        </Box>
    )
}

export default Header;