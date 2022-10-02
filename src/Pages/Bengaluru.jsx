import { Container } from "@chakra-ui/react"
import Footer from "../Componets/Footer"
import Navbar from "../Componets/Navbar"
import {Box,Flex} from "@chakra-ui/react"

function Bengaluru()
{
    return(<> <Navbar/> 

        <Box maxW="1200px" margin="auto" marginTop={20}>
            <p id="timing"> <span style={{color:"#0087a8"}}>Home</span>/ Bengaluru</p>
            <Flex gap={5}  alignItems="center" >
                  <Box fontSize={20} fontWeight="bold" bg="#68a923" padding="15px 30px"  color="#fff">Bengaluru</Box>
                  <Box  >TOP STORIES</Box>
                  <Box>CRIME</Box>
                  <Box>POLITICS</Box>
                  <Box>INFRASTRUCTURE</Box>
                  <Box>LIFE IN THE CITY</Box>
            </Flex>
        </Box>

 
  

   
        <Box w="100%"  bg="#eff6f4" padding="40px 0px">
          <Box maxW="1200px" margin="auto" >

            <Box border="5px solid #68a923" width={10}></Box>
            <h4>TOP STORIES</h4>

            <Flex gap={3}>
             <Box width="31%">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/10/01/clipboard-81-1149902-1664567232.jpg?itok=EOOnsr0T" alt="Surprise check on private buses over exorbitant fares" />

                <Flex bg="#fff" marginTop={5} alignItems="center" gap="10px">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/bangalore-university-dh-1149869-1664560873.jpg?itok=hWqbuhWj" alt="" />
                <p>PG students protest at BU over scholarships  <p id="timing"> 30th Sep 2022</p> </p> 
                </Flex>

                <Flex  bg="#fff" marginTop={5}  alignItems="center" gap="10px">
                 <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/heart-istock-1149364-1664450092-1149849-1664558904.jpg?itok=p_yTNL0X" alt="" />
                 <p>Doctors examine schoolchildren with heart ailments <p id="timing">30th Sep 2022</p> </p>
                 </Flex>

             </Box>

            <Box width="31%"  >

                <Box bg="#fff" padding={4} >
                    
                  <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/potholes-dh-1149885-1664563916.jpg?itok=YGt9JREq" alt="" />
                       <p>BBMP sets up task force to speed up pothole-filling...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/police-istock-2-1149884-1664569670.jpg?itok=vxOrp4_D" alt="" />
                       <p>B'luru police seal PFI-affiliate office on Tannery Road...</p>
                   </Flex>

                   <Flex gap='20px' paddingTop={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/bbmp-dh-1149868-1664592355.jpg?itok=v6oZDuA1" alt="" />
                       <p>BBMP polls: Two-year legal battle comes to an end...</p>
                   </Flex>
                   
                </Box>   
               
                <Box bg="#fff" marginTop={4} padding={4} >

                       <ul id="ul">
                            <li >HAL conclave deliberates on indigenisation</li>
                            <li>BenSCL close to finishing smart works on Avenue</li>
                            <li>HC discharges 2 in drunk driving case, assault on cops</li>
                            <li>At Yeshwantpur, development before pax convenience</li>
                            <li>BBMP to widen road near Palace Grounds, 58 trees</li>
                        </ul>

                </Box>


            </Box>

            <Box  width="31%" >
                <Box></Box>

                <Box bg="#fff" marginTop="295px" padding={4}>

                <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/bengaluru-road-dh-1149756-1664546224.png?itok=jdZGcvsC" alt="" />
                       <p>Fault lines in B'luru's underground utility mapping</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/download-7-954763-1614153356-1149705-1664535724.png?itok=dFdNSzNA" alt="" />
                       <p>Samples given to doctors not freebies: Pharma cos in...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={3}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/29/pti09152022000086a-3-1-1149317-1664444942.jpg?itok=VBcvMwl8" alt="" />
                       <p>Despite alternative site allotments, Bommai backs BDA</p>
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
                          <Box border="5px solid green" width={10}></Box>
                          <h4>CRIME</h4>
                        <Flex bg="green" alignItems="center" color="white">

                        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/dead-person-istock-1149903-1664567336.jpg?itok=3OOPCf0z" alt="" />
                        <Box marginLeft="15px"> <p id="heading">Writer found dead in bathroom at PG in Bengaluru <p id="timing">1st Oct 2022</p> </p> </Box>
                        
                        </Flex>

                        <Flex marginTop={5} gap={5}>
                            <Box bg="#fff">
                                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/assault-protest-istock-1149861-1664559867.jpg?itok=eDk0sImq" width="100%" alt="" />
                               <Box padding={5}> <p>Film producer’s family, neighbours clash after a year... </p> <p id="timing">30th Sep 2022</p> </Box>
                            </Box >
                            <Box bg="#fff" >
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/knife-istock-2-1149751-1664548065.png?itok=4vYm7i3J"  width="100%" alt="" />
                            <Box padding={5}>  <p>Gang chops off man’s hand for sitting in public...</p> <p id="timing">30th Sep 2022</p></Box>
                            </Box >
                            <Box bg="#fff">
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/slap-istock-1149749-1664547204.jpg?itok=DYftLnX0"  width="100%" alt="" />
                            <Box padding={5}>  <p>Woman on scooter with man of another community slapped...</p> <p id="timing"> 30th Sep 2022</p></Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Box width="31%"  marginTop="34px" >
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/30/hal-reuters-1149821-1664556534.jpg?itok=K1XSGGSp" alt="" />
                        <Box padding={2.5} bg="#fff">  <p>Doctors examine school children with heart ailments</p> <p id="timing">an hours ago</p></Box>
                    </Box>
                
                
            </Flex>

        </Box>

      </Box>

 




 
      <Box w="100%"  bg="#fff" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%" >
                  <Box border="5px solid green" width={10}></Box>
                  <h4>METROLIFE</h4>
                <Flex bg="#432957" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/bbmp-dh-1149868-1664592355.jpg?itok=3Co5-hxy" alt="" />
                <Box marginLeft="15px"> <p id="heading">BBMP polls: Two-year legal battle comes to an end <p id="timing">1st Oct 2022</p> </p> </Box>
                </Flex>

               
            </Box>

            <Box width="31%" marginTop="34px">

                <Box bg="#f6f6f6" padding={5}>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/24/file7aa7n3ah35k154nko4np-1147801-1663972877.jpg?itok=VlS-3p9R" alt="" />
                       <p>Withdraw plan making Balabrooie Guest House a club: AAP...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/18/file7mnc4rk1jbb1c319fcx8-1146056-1663441081-1-1146056-1663445906.jpg?itok=JZ8ys4gl" alt="" />
                        <p>BDA tender case: Lokayukta FIR against BSY, Vijayendra...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/19/r-ashoka-dh-1146479-1663599710.jpg?itok=e6Lstw25" alt="" />
                        <p>Lake closure: BJP, Cong lock horns in K'taka Assembly...</p> 
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
                  <Box border="5px solid green" width={10}></Box>
                  <h4>INFRASTRUCTURE</h4>
                <Flex bg="green" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/potholes-dh-1149885-1664563916.jpg?itok=J3cyrs8R" alt="" />
                <Box marginLeft="15px"> <p id="heading">BBMP sets up task force to speed up pothole-filling<p id="timing">1st Oct 2022</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={5}>
                    <Box bg="#fff">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/bengaluru-road-dh-1149756-1664546224.png?itok=dIVcPhxL" width="100%" alt="" />
                       <Box padding={5}> <p>Fault lines in B'luru's underground utility mapping </p> <p id="timing">30th Sep 2022</p> </Box>
                    </Box >
                    <Box bg="#fff" >
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/ballery-road-1149748-1664549563.jpg?itok=RSBG0SI5"  width="100%" alt="" />
                    <Box padding={5}>  <p>BBMP proposes widening Ballari Road by axing 58 trees...</p> <p id="timing">30th Sep 2022</p></Box>
                    </Box >
                    <Box bg="#fff">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/29/clipboard-46-1149209-1664394741.jpg?itok=OZCgDW3f"  width="100%" alt="" />
                    <Box padding={5}>  <p>Smart works almost over, BenSCL's fate hangs in balance... </p> <p id="timing">29th Sep 2022</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
               
                <Box>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/29/clipboard-45-1149208-1664394465.jpg?itok=yODZccRO" alt="" />
                <Box padding={2} bg="#fff">  <p>After a week of wastage, BWSSB wakes up <br /> to... </p> <p id="timing">29th Sep 2022</p></Box>
                </Box>

                

            </Box>    
               
    </Flex>

</Box>

</Box>







<Box w="100%"  bg="#eff6f4" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%">
                  <Box border="5px solid green" width={10}></Box>
                  <h4>LIFE IN THE CITY</h4>
                <Flex bg="green" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/09/30/heart-istock-1149364-1664450092-1149849-1664558904.jpg?itok=Ig-jEnP2" alt="" />
                <Box marginLeft="15px"> <p id="heading">Doctors examine schoolchildren with heart ailments <p id="timing">30th Sep 2022</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={5}>
                    <Box bg="#fff">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/28/file7mxjscie2r81kqqkf55g-1148840-1664324870.jpg?itok=lf_nzBMz" width="100%" alt="" />
                       <Box padding={5}> <p>140 Durga Puja pandals to come up in Bengaluru... </p> <p id="timing">28th Sep 2022</p> </Box>
                    </Box >
                    <Box bg="#fff" >
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/27/electric-meter-istock-1148482-1664258065.jpg?itok=QSIySQYQ"  width="100%" alt="" />
                    <Box padding={5}>  <p>Frequent hikes in tariff rile BESCOM consumers</p> <p id="timing">27th Sep 2022</p></Box>
                    </Box >
                    <Box bg="#fff">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/21/pothole-1146970-1663759119.jpg?itok=ePBGAdL9"  width="100%" alt="" />
                    <Box padding={5}>  <p>'Must visit once': Bengaluru pothole gets 5-star rating...</p> <p id="timing">21st Sep 2022 </p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
               
                <Box>
                
                <Box padding={2} bg="#fff" color="green" fontSize={23.7} fontWeight="bold" padding="72px">  <p>'Koramangala, Vrishabhavathi lost 50% of drain length' </p> <p id="timing">21st Sep 2022 </p></Box>
                </Box>

                

            </Box>    
               
    </Flex>

</Box>

</Box>






     
     <Footer/>
    </>)
}

export default Bengaluru