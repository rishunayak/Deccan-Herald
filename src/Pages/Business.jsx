import { Container } from "@chakra-ui/react"
import Footer from "../Componets/Footer"
import Navbar from "../Componets/Navbar"
import {Box,Flex} from "@chakra-ui/react"


function Business()
{
    return <>
     <Navbar/>

     <Box maxW="1200px" margin="auto" marginTop={20}>
            <p id="timing"> <span style={{color:"#0087a8"}}>Home</span>/ Business</p>
            <Flex gap={5}  alignItems="center" >
                  <Box fontSize={20} fontWeight="bold" bg="#128296" padding="15px 30px"  color="#fff">Business</Box>
                  <Box  >BUSINESS NEWS</Box>
                  <Box>FAMILY FINANCE</Box>
                  <Box>TECHNOLOGY</Box>
                  <Box>DH WHEELS</Box>
                  
            </Flex>
        </Box>






    

        <Box w="100%"   padding="40px 0px">
          <Box maxW="1200px" margin="auto" >

            <Box border="5px solid #128296" width={10}></Box>
            <h4>BUSINESS NEWS</h4>

            <Flex gap={3}>
             <Box width="31%">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/10/02/capturepng-8-1150149-1664687137.jpg?itok=5HQColTu" alt="Suzlon Energy chairman Tulsi Tanti passes away" />

                <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/tax-istock-941565-1611727936-1072074-1642445050-1150012-1664625945.jpg?itok=mfeVg49e" alt="" />
                <p>Government extends deadline for filing tax audit report...<p id="timing">1st Oct 2022</p> </p> 
                </Flex>

                <Flex  bg="#f6f6f6" marginTop={5}  alignItems="center" gap="10px">
                 <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/pti10012022000085b-1-1150001-1664622005.jpg?itok=QfY-C4s6" alt="" />
                 <p>Airtel shows 5G ambulance, smart agri solutions to PM...<p id="timing">1st Oct 2022</p> </p>
                 </Flex>

             </Box>

            <Box width="31%"  >

                <Box bg="#f6f6f6" padding={4} >
                    
                  <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/02/oil-1-1150124-1664669814.jpg?itok=qUUTnmmy" alt="" />
                       <p>India slashes windfall tax on domestic crude</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/nirmala-sitharaman-pti-file-photo-1144674-1663078263-1150026-1664630759.jpg?itok=uOWkiKJp" alt="" />
                       <p>We cannot afford to lose sheen of IBC: FM...</p>
                   </Flex>

                   <Flex gap='20px' paddingTop={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/2019-04-25t121423z671360119rc133bd91490rtrmadp3maruti-suzuki-in-resultsjpg-1150018-1664628070.jpg?itok=_Jlpi-Jn" alt="" />
                       <p>Maruti Suzuki reports over two-fold increase in sales...</p>
                   </Flex>
                   
                </Box>   
               
                <Box bg="#f6f6f6" marginTop={4} padding={4} >

                       <ul id="ul">
                            <li >India defers tax levy on dirtier fuel amid price <br /> hike</li>
                            <li>UPI transactions up over 3% at 678 crore in September</li>
                            <li>Hyundai sales rise 38% to 63,201 units in September</li>
                            <li>Bharti Airtel launches 5G in 8 cities</li>
                            <li>India slashes base import price of palm oil, gold</li>
                        </ul>

                </Box>


            </Box>

            <Box  width="31%" >
                <Box></Box>

                <Box bg="#f6f6f6" marginTop="295px" padding={4}>

                <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/ambani-reuters-1149943-1664613718.jpg?itok=vuc0Hozk" alt="" />
                       <p>Ambani promises 5G across India by December 2023...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/lpg-reuters-1149929-1664600753.jpg?itok=1r7PEIgj" alt="" />
                       <p>ATF price cut 4.5%​​​​​​​, commercial LPG rates reduced...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={3}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/parag-elon-nyt-reuters-1149919-1664594921.jpg?itok=4ipzmAOW" alt="" />
                       <p>Treat me like an engineer not CEO: Agrawal to...</p>
                   </Flex>
 
                </Box>

            </Box>

            </Flex>

          </Box>
      </Box>
 






      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
           <Box border="5px solid #0087a8" width={10}></Box>
                          <h4>FAMILY FINANCE</h4>

               <Flex gap={3}>
                    <Box  width="31%">
                        <Box>
                
                        <Box  bg="#8abec7" color="#fff " fontSize={22} fontWeight="bold" padding="75px" height="275px" paddingBottom="90px">  <p>Retirement planning: It's time to start now</p> <p id="timing">18th Sep 2022</p></Box>
                        </Box>
                    </Box>

                    <Box width="31%" >

                    <Box>  

                       <Flex bg="#f6f6f6"  alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/18/file6yt4q7m44hzi3jp2sr-1146221-1663522438.jpg?itok=eTcDCtvi" alt="" />
                           <p>How is Guaranteed Returns plan an investment option?...<p id="timing">18th Sep 2022</p> </p> 
                           </Flex>

                       <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                         <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/16/sgs22p-cov-sho-sel-1-1145606-1663319456.jpg?itok=zB4S5Zbb" alt="" />
                           <p>Big Billion Days: Galaxy S22+, S21 FE get big...<p id="timing">16th Sep 2022</p> </p> 
                       </Flex>

                    </Box>

                    </Box>

                    <Box width="31%">

                       
                          
                          <Box bg="#f6f6f6" padding={5} >

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/08/clipboard-96-1134082-1659897964.jpg?itok=jPv_mzGX" alt="" />
                            <p>Value vs Growth investing: Which is better?</p> 
                           </Flex>

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                              <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/08/08/funds-istokc-1134081-1659900284.jpg?itok=IpWhH1SN" alt="" />
                              <p>Understanding Passive Multi-Asset Funds</p> 
                             </Flex>

                            <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                           <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/07/24/anubhav-srivastava-2-1129726-1658684258.jpg?itok=EgS9A87N" alt="" />
                           <p>Cohabiting with real assets and bonds in your portfolio...</p> 
                            </Flex>
                           </Box>
                    </Box>

               </Flex>
           </Box>
      </Box>




 


      <Box w="100%"  bg="#fff" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%" >
                  <Box border="5px solid #128296" width={10}></Box>
                  <h4>TECHNOLOGY</h4>
                <Flex bg="#128296" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/realme-istokc-1150085-1664644646.jpg?itok=vZWkGvOj" alt="" />
                <Box marginLeft="15px"> <p id="heading">Realme to offer bundled 5G smartphones in India<p id="timing">1st Oct 2022</p> </p> </Box>
                </Flex>

               
            </Box>

            <Box width="31%" marginTop="34px">

                <Box bg="#f6f6f6" padding={5}>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/pti10012022000085b-1-1150001-1664622005.jpg?itok=qSqz4CxC" alt="" />
                       <p>Airtel shows 5G ambulance, smart agri solutions to PM...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/pti10012022000045b-1-1149944-1664608812.jpg?itok=Apt3phjI" alt="" />
                        <p>PM Modi experiences 5G tech at IMC 2022 exhibition...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/humanoid-afp-1149937-1664602479.jpg?itok=C7Jc-N0j" alt="" />
                        <p>Elon Musk unveils Tesla humanoid robot, may cost $20K...</p> 
                    </Flex>
                </Box>

            </Box>   




               
    </Flex>

</Box>

</Box>








<Box w="100%"  bg="#eff6f4" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%">
                  <Box border="5px solid #128296" width={10}></Box>
                  <h4>DH WHEELS</h4>
                <Flex bg="#128296" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/09/28/tiagopti-1148987-1664367134.jpg?itok=uCg_CyM6" alt="" />
                <Box marginLeft="15px"> <p id="heading"> Tata launches India's most affordable EV, Tiago<p id="timing"> 28th Sep 2022</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={5}>
                    <Box bg="#fff">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/27/car-contract-istock-1115583-1654474261-1148672-1664276102.png?itok=1PHIdaCO" width="100%" alt="" />
                       <Box padding={5}> <p>CSC to provide vehicle loans with Tata Motors Finance...</p> <p id="timing">27th Sep 2022</p> </Box>
                    </Box >
                    <Box bg="#fff" >
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/26/tata-motors-1148516-1664216805.jpg?itok=mQiKYaUk"  width="100%" alt="" />
                    <Box padding={5}>  <p>Tata bets on bi-fuel vehicle, expands Pickup portfolio...</p> <p id="timing">26th Sep 2022</p></Box>
                    </Box >
                    <Box bg="#fff">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/26/maruti-suzuki-reuter-1141227-1662027247-1148345-1664183434.jpg?itok=anVE8D95"  width="100%" alt="" />
                    <Box padding={5}>  <p>Maruti launches Grand Vitara starting from Rs 10.45L...</p> <p id="timing">26th Sep 2022</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/18/honda-1146138-1663496214.jpg?itok=LR-CL-Ry" alt="" />
                <Box padding={2.5} bg="#fff">  <p>Honda expects India business to get back on track...</p> <p id="timing">18th Sep 2022</p></Box>
            </Box>
        
        
    </Flex>

</Box>

</Box>








     <Footer/>
    
    
    </>
}

export default Business