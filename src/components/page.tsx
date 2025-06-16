import { Box } from "@chakra-ui/react";
import Header from "./header";


interface PageProps {
    children: React.ReactNode;
    onSearch: (search: string) => void;
}

function Page({ children, onSearch }: PageProps) {
    return (
        <Box width={'100vw'} height={'100vh'} bg={'#f0f0f5'}>
            <Header onSearch={onSearch} />
            {children}
        </Box>
    )
}

export default Page;