import Navbar from "../Componets/Navbar"
import Footer from "../Componets/Footer"
import {Box,Flex} from "@chakra-ui/react"
import "./Home.css"

function Karnataka()
{
    return(
      <> 
      <Navbar/>
             
      <Box maxW="1200px" margin="auto" marginTop={20}>
            <p id="timing"> <span style={{color:"#0087a8"}}>Home</span>/ Karnataka</p>
            <Flex gap={5}  alignItems="center" >
                  <Box fontSize={20} fontWeight="bold" bg="#68a923" padding="15px 30px"  color="#fff">Karnataka</Box>
                  <Box  >TOP STORIES</Box>
                  <Box>POLITICS</Box>
                  <Box>DISTRICTS</Box>
            </Flex>
        </Box>
        


        



        <Box w="100%"  bg="#eff6f4" padding="40px 0px">
          <Box maxW="1200px" margin="auto" >

            <Box border="5px solid #68a923" width={10}></Box>
            <h4>TOP STORIES</h4>

            <Flex gap={3}>
             <Box width="31%">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/10/02/pti09132022000237b-1-1150048-1664653857.jpg?itok=TsqzEhPE" alt="I walked out of Rahul's meeting: Pro-Kannada activist" />

                <Flex bg="#fff" marginTop={5} alignItems="center" gap="10px">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/bharat-jodo-ktaka-pti-1149955-1664610877.jpg?itok=xdO15Z4i" alt="" />
                <p>Bharat Jodo Yatra enters day 2 in Karnataka...  <p id="timing"> 1st Oct 2022</p> </p> 
                </Flex>

                <Flex  bg="#fff" marginTop={5}  alignItems="center" gap="10px">
                 <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/covid-test-dh-5-1149843-1664557614.jpg?itok=AMuosVKk" alt="" />
                 <p>Karnataka reports 214 fresh Covid cases<p id="timing">30th Sep 2022</p> </p>
                 </Flex>

             </Box>

            <Box width="31%"  >

                <Box bg="#fff" padding={4} >
                    
                  <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/exams-istock-3-1042456-1634747174-1052187-1637252549-1055389-1638104164-1096055-1648632027-1-1150041-1664637184.jpg?itok=qnj5wORJ" alt="" />
                       <p>KCET: Hundreds of ranks altered in revised rank list...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/karnataka-hc-dh-1110664-1652953364-1112510-1653510124-1117162-1654899902-1-1118091-1655204664-1150008-1664623982.jpg?itok=3Uc7n99e" alt="" />
                       <p>Choice of state anthem tune challenged in K'taka HC...</p>
                   </Flex>

                   <Flex gap='20px' paddingTop={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/bommai-pti-1149991-1664620084.jpg?itok=PPFj4WwW" alt="" />
                       <p>Demand for state & national anthem in K'taka theatres...</p>
                   </Flex>
                   
                </Box>   
               
                <Box bg="#fff" marginTop={4} padding={4} >

                       <ul id="ul">
                            <li >'PFI had terror links, wanted to weaken country'</li>
                            <li>HC allows Murugha seer to sign cheques for staff salary</li>
                            <li>Cong will come to power in K'taka in 2023</li>
                            <li>Govt to update tender portal for more accountability</li>
                            <li>Lokayukta raids 7 RTO check-posts, seize Rs 13 lakh</li>
                        </ul>

                </Box>


            </Box>

            <Box  width="31%" >
                <Box></Box>

                <Box bg="#fff" marginTop="295px" padding={4}>

                <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/clipboard-66-1149813-1664556016.jpg?itok=AqnZEL6L" alt="" />
                       <p>Startups collaborate to produce bio-CNG from wet waste...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/cm-1149811-1664555541.jpg?itok=T0eDUmZq" alt="" />
                       <p>Karnataka govt notifies anti-conversion law</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={3}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/hc-1149641-1664576224.jpg?itok=-vXixmBJ" alt="" />
                       <p>HC orders K'taka to hold BBMP polls on or...</p>
                   </Flex>
 
                </Box>

            </Box>

            </Flex>

          </Box>
      </Box>
 

  



      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
           <Box border="5px solid green" width={10}></Box>
                          <h4>POLITICS</h4>

               <Flex gap={3}>
                    <Box  width="31%">
                        <Box>
                
                        <Box  bg="green" color="#fff " fontSize={22} fontWeight="bold" padding="67px" paddingBottom="90px">  <p>Stone, eggs hurled at Karnataka BJP MLC C P Yogeeshwara </p> <p id="timing">9:40 pm</p></Box>
                        </Box>
                    </Box>

                    <Box width="31%" >

                    <Box>  

                       <Flex bg="#f6f6f6"  alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/bjp-pti-file-1149838-1664558571.jpg?itok=R2BgUSxN" alt="" />
                           <p>BJP taunts Congress' march with 'Raahukala' jibe<p id="timing"> 30th Sep 2022 </p> </p> 
                           </Flex>

                       <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                         <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/shobha-karandlaje-pti-1149824-1664556993.jpg?itok=VmmkvX4y" alt="" />
                           <p>'PFI had terror links, wanted to weaken country'...  <p id="timing">30th Sep 2022</p> </p> 
                       </Flex>

                    </Box>

                    </Box>

                    <Box width="31%">

                       
                          
                          <Box bg="#f6f6f6" padding={5} >

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/clipboard-67-1149822-1664556759.jpg?itok=P9qWL6iw" alt="" />
                            <p>Cong will come to power in K'taka in 2023:...</p> 
                           </Flex>

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                              <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/siddaramaiha-dh-1149110-1664380321-1149681-1664533147.jpg?itok=34y6pJqT" alt="" />
                              <p>Siddaramaiah warns BJP against obstructing Yatra</p> 
                             </Flex>

                            <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                           <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/bommai-1-1148206-1664121911-1148505-1664441355-1149583-1664534268.jpg?itok=OI4qH1Ul" alt="" />
                           <p>Cong not giving valid reasons for ban on RSS:...</p> 
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
                  <h4>DISTRICTS</h4>
                <Flex bg="green" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/halal-istcok-1150009-1664624058.jpg?itok=6d6ChcCA" alt="" />
                <Box marginLeft="15px"> <p id="heading"> Hindu organisation demands ban on halal certification<p id="timing">5:04 pm</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={6}>
                    <Box bg="#fff" maxW="31.33%">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/rain-pti-1149994-1664620533.jpg?itok=S_reS13d" width="100%" alt="" />
                       <Box padding={5}> <p>Heavy rain predicted in 12 K'taka districts for 2...</p> <p id="timing">4:05 pm</p> </Box>
                    </Box >
                    <Box bg="#fff" maxW="31.33%">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/pfi-reuters-1149133-1664521781-1149860-1664559073.jpg?itok=75ans0rm"  width="100%" alt="" />
                    <Box padding={5}>  <p>PFI offices sealed in Davangere</p> <p id="timing">30th Sep 2022</p></Box>
                    </Box >
                    <Box bg="#fff" maxW="31.33%">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/jail-istock-1149851-1664558046.jpg?itok=Zcq_PgVV"  width="100%" alt="" />
                    <Box padding={5}>  <p>IS-linked youth remanded in 14-day judicial custody</p> <p id="timing">30th Sep 2022</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/30/clipboard-1-1149790-1664553569.jpg?itok=2hgZXQyW" alt="" />
                <Box padding={2.5} bg="#fff">  <p>MCC approves naming Surathkal junction after Savarkar</p> <p id="timing">30th Sep 2022</p></Box>
            </Box>
        
        
    </Flex>

</Box>

</Box>








      <Footer/>
     
      </>)
}

export default Karnataka