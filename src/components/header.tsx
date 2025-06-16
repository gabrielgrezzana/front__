import { Input, Box, Text, InputGroup , } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

interface HeaderProps {
    onSearch: (search: string) => void;
}

function Header({ onSearch }: HeaderProps) {
    const [search, setSearch] = useState('');

    const callSearch = () => {
        if(search.length > 0){
            onSearch(search);
        }
    }

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
                        onChange={(e) => {
                            setSearch(e.target.value)
                            callSearch()
                        }}
                        paddingRight="40px" 
                        color={'#000'}
                    />
                    <Box 
                        position="absolute" 
                        right="10px" 
                        top="50%" 
                        transform="translateY(-50%)"
                        pointerEvents="none"
                    >
                        <IoSearchOutline color={'#000'} size="20px" onClick={() => callSearch()}  />
                    </Box>
                </Box>
        </Box>
    )
}

export default Header;