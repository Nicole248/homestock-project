import { Box } from "@mui/material";
import { useRouter } from "next/router";

const NavLogo = () => {
    const router = useRouter();
    
    return (
        <div>
            {router.pathname === "/" && <Box>Stock Total</Box>}
            {router.pathname === "/planes" && <Box>Stock Cocina</Box>}
        </div>
    )
} ;

export default NavLogo;
