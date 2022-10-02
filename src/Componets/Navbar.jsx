import { Box, Container, Flex, Menu, MenuButton, MenuList,useDisclosure,Button ,MenuItem} from "@chakra-ui/react"
import AllRoutes from "../Pages/AllRoutes"
import "./Navbar.css"
import { IconButton  } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import {SearchIcon} from "@chakra-ui/icons"


function Navbar ()
{

  const { isOpen, onOpen, onClose } = useDisclosure();


    return(<>
    
    

<Box id="Navbackground">

  
 <div id="centerd">
    <Flex>
     
      
        <Box id="Navbar">
          
            <Flex >
               <Box > <img src="https://www.deccanherald.com/sites/deccanherald.com/themes/deccanherald/images/logo/white-logo.svg" width="150px" /></Box>

                <Box id="NavAni"> <div ></div> <div></div> <div></div> </Box>  
              
                <Box id="navdivider"></Box>

                

  
                <Box id="NavLink">
                  <Link to="/">Home</Link>
                  <Link to="/bengaluru">Bengaluru </Link>
                  <Link to="/karnataka">Karnataka</Link>
                  <Link to="/national">National</Link>
                  <Link to="/sports">Sports</Link>
                  <Link to="/business">Business</Link>
                  <Link to="/opinion">Opinion</Link>
                  <Link to="/features">Features</Link>
                  <Link to="/videos">Videos</Link>
                  <Link to="/brandspot">Brandspot</Link>
                  <Link to="/specials">Specials</Link>
                </Box>
    
             
            </Flex>
         
         
             
        </Box>

         <Box id="navButton"> <Link to="" ><span id="red">New</span> <br></br> Newsletters</Link></Box>
   
         <Box id="alin"> <IconButton colorScheme="none" size="lg" icon={<SearchIcon />} /> </Box>
    
        

    </Flex>

   
    </div>

</Box> 
   
  
   
 </>)
}

export default  Navbar