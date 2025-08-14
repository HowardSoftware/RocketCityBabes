import "../styles/header.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import Tooltip from '@mui/material/Tooltip';


function Header(){
    const headerBarOptions = [ 'About Us', 'Reviews', 'Contact Us' ]

    const navigate = useNavigate();
    const [nextPage, setNextPage] = useState(null);

    useEffect(()=>{
      if(nextPage != null){
        navigate(`/${nextPage}`, { state: { showContact: false }})
        setNextPage(null)
      }
    }, [nextPage, navigate])

    const handleChangePage = (page) => {
        setNextPage(page)
    };

    return (
    <AppBar 
      position="absolute" // let content flow under it
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10, // keep it above the video
      }}>
        <Toolbar disableGutters>
          <Tooltip title="Home">
          <img src="logo.png" className="headerImg" onClick={()=>handleChangePage("home")}/>
          </Tooltip>
          
          <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }, paddingLeft:185}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {headerBarOptions.map((page) => (
              <Button
                key={page}
                onClick={()=>handleChangePage(page.replace(/\s+/g, '').toLowerCase())}
                sx={{ my: 2, color: '#D686C1', display: 'block'}}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1 }}>
              <Button
                onClick={()=>handleChangePage("/www.instagram.com/rocket.city.babes/")}
                sx={{ my: 3, color: '#D686C1'}}
              >
                <InstagramIcon />
                </Button>
          </Box>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default Header