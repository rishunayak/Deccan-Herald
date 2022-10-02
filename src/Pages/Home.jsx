
import "./Home.css"
import { Link } from "react-router-dom"
import Navbar from "../Componets/Navbar"
import Footer from "../Componets/Footer"
import { Container,Box, Flex } from "@chakra-ui/react"

function Home()
{
    return (<>
    
    <Navbar/>


      <Box w="100%"  bg="#eff6f4" padding="40px 0px" marginTop="50px">
          <Box maxW="1200px" margin="auto" >

            <Flex gap={3}>
             <Box width="31%">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/10/01/unsc-reuters-1149904-1664567012.jpg?itok=fiTczet" alt="UNSC resolution on Ukraine vetoed; India abstains
                 UNSC resolution on Ukraine vetoed; India abstains" />

                <Flex bg="#fff" marginTop={5} alignItems="center" gap="10px">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/29/mohan-bhagwat-pti-1149184-1664390384.jpg?itok=o7-WNntw" alt="" />
                <p>RSS needs to go beyond mere symbolism <p id="timing"> 12:09 am</p> </p> 
                </Flex>

                <Flex  bg="#fff" marginTop={5}  alignItems="center" gap="10px">
                 <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/29/clipboard-44-1149198-1664394346.jpg?itok=RPkIH9pG" alt="" />
                 <p>IISc develops algorithm to detect, classify epilepsy <p id="timing">1:15 am</p> </p>
                 </Flex>

             </Box>

            <Box width="31%"  >

                <Box bg="#fff" padding={4} >
                    
                  <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/29/modi-ntnl-games-pti-1149448-1664472280.jpg?itok=BaMqGKFD" alt="" />
                       <p>PM Modi inaugurates 36th National Games in Ahmedabad...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/29/rahul-pti-1149459-1664469513.jpg?itok=viJHzGzn" alt="" />
                       <p>Centre 'using' Guv to target non-BJP govts, says Rahul...</p>
                   </Flex>

                   <Flex gap='20px' paddingTop={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/29/sonia-pilot-1149410-1664471573.jpg?itok=pHPZ-2xS" alt="" />
                       <p>Sachin Pilot meets Sonia Gandhi in New Delhi...</p>
                   </Flex>
                   
                </Box>   
               
                <Box bg="#fff" marginTop={4} padding={4} >

                       <ul id="ul">
                            <li >In Iran & Russia, time to bring on women’s revolutions</li>
                            <li>HC extends stay on Gyanvapi survey site till Oct 31</li>
                            <li>Brands blast Twitter for ads with child porn accounts</li>
                            <li>US announces $1.1 billion in military aid for Ukraine</li>
                            <li>RBI MPC meet: 50-bps rate hike looks imminent</li>
                        </ul>

                </Box>


            </Box>

            <Box  width="31%" >
                <Box></Box>

                <Box bg="#fff" marginTop="295px" padding={4}>

                <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/391857454-1-1149768-1664550865.jpg?itok=dBGncKyb" alt="" />
                       <p>Air India weighs raising Rs 8,136 crore for expansion...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/296145-01-02-1-1107661-1652087273-1108655-1652356906-1149746-1664543619.jpg?itok=aha1r-Wy" alt="" />
                       <p>FEMA approves biggest seizure order against Xiaomi: ED...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={3}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/article_images/2022/09/30/file7mmb3xzvwqpn25yb8uf-1-1149771-1664548725.jpg?itok=irXNuDgL" alt="" />
                       <p>Solutions to B'luru lakes that didn't fill despite rain...</p>
                   </Flex>
 
                </Box>

            </Box>

            </Flex>

          </Box>
      </Box>


 {/* <------------Top Stories------------> */}
      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
                    <Box  width="31%">

                         
                          <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>MORE TOP STORIES</h4>

                        <Box>  

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/congress-1149901-1664565906.jpg?itok=QRjJUNJa" alt="" />
                          <p>DH Toon |  Vote here  for Congress president...  <p id="timing"> 26 mins ago</p> </p> 
                          </Flex>

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/clipboard-70-1149872-1664561209.jpg?itok=336Cp7VP" alt="" />
                          <p>Civilians lie slain as Russian troops flee Ukraine push...<p id="timing"> 26 mins ago</p> </p> 
                          </Flex>
                        
                        </Box>

                    </Box>

                    <Box width="31%" marginTop="54px">

                         <Box bg="#f6f6f6" padding={5}>

                         <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/pilot-pti-1-1144704-1663065057-1149819-1664555900.jpg?itok=aCwA1zCv" alt="" />
                          <p>What is in store for Sachin Pilot?</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/nestle-reuters-1130838-1658991583-1149778-1664552075.jpg?itok=Qu90jV0o" alt="" />
                          <p>1,000 Nestle India factory staff plan one-day stoppage...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/google-pixel-7-series-1149775-1664550738.jpg?itok=9-mXDQ_O" alt="" />
                          <p>Google Pixel 7, 7 Pro India pre-order date revealed...</p> 
                          </Flex>
                          </Box>

                    </Box>

                    <Box width="31%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>DH VIDEOS</h4>
                          <Box marginTop={5}></Box><iframe src="https://www.dailymotion.com/embed/video/x8e1z6g"  width="100%" height="84%" allowfullscreen > </iframe>
                    </Box>

               </Flex>
           </Box>
      </Box>




      <Box w="100%"  bg="#eff6f4" padding={10}>

        <Box maxW="1200px" margin="auto">

            <Flex gap={4}>
                
                    <Box maxW="63%">
                          <Box border="5px solid green" width={10}></Box>
                          <h4>BENGALURU</h4>
                        <Flex bg="green" alignItems="center" color="white">

                        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/clipboard-81-1149902-1664567232.jpg?itok=SP4_rp0G" alt="" />
                        <Box marginLeft="15px"> <p id="heading"> Surprise check on private buses over exorbitant fares <p id="timing"> 4 mins ago</p> </p> </Box>
                        
                        </Flex>

                        <Flex marginTop={5} gap={5}>
                            <Box bg="#fff">
                                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/potholes-dh-1149885-1664563916.jpg?itok=0yEqnjs_" width="100%" alt="" />
                               <Box padding={5}> <p>BBMP sets up task force to speed up pothole-filling...</p> <p id="timing">an hours ago</p> </Box>
                            </Box >
                            <Box bg="#fff" >
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/pfi-reuters-1149884-1664563178.jpg?itok=JuImaOKk"  width="100%" alt="" />
                            <Box padding={5}>  <p>B'luru police seal PFI-affiliate office on Tannery Road...</p> <p id="timing">an hours ago</p></Box>
                            </Box >
                            <Box bg="#fff">
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/09/30/heart-istock-1149364-1664450092-1149849-1664558904.jpg?itok=eKFZeUxY"  width="100%" alt="" />
                            <Box padding={5}>  <p>Doctors examine school children with heart ailments</p> <p id="timing">an hours ago</p></Box>
                            </Box>
                        </Flex>
                    </Box>

                    <Box width="31%"  marginTop="34px">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/30/hal-reuters-1149821-1664556534.jpg?itok=K1XSGGSp" alt="" />
                        <Box padding={2.5} bg="#fff">  <p>Doctors examine school children with heart ailments</p> <p id="timing">an hours ago</p></Box>
                    </Box>
                
                
            </Flex>

        </Box>

      </Box>






      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
                    <Box  width="31%">

                         
                          <Box border="5px solid #aba12b" width={10}></Box>
                          <h4>KARNATAKA</h4>

                        <Box>  

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/pfi-reuters-1149133-1664521781-1149860-1664559073.jpg?itok=7S0Dm4Xj" alt="" />
                          <p>PFI offices sealed in Davangere <p id="timing"> 20 mins ago</p> </p> 
                          </Flex>

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/bjp-pti-file-1149838-1664558571.jpg?itok=R2BgUSxN" alt="" />
                          <p>BJP taunts Congress' march with 'Raahukala' jibe<p id="timing">10:52 pm</p> </p> 
                          </Flex>
                        
                        </Box>

                    </Box>

                    <Box width="31%" marginTop="54px">

                         <Box bg="#f6f6f6" padding={5}>

                         <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/shobha-karandlaje-pti-1149824-1664556993.jpg?itok=Bm2J-zuJ" alt="" />
                          <p>'PFI had terror links, wanted to weaken country'...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/karnataka-hc-dh-1149823-1664556857.jpg?itok=f-S42UMU" alt="" />
                          <p>HC allows Murugha seer to sign cheques for staff...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/clipboard-67-1149822-1664556759.jpg?itok=P9qWL6iw" alt="" />
                          <p>Cong will come to power in K'taka in 2023:...</p> 
                          </Flex>
                          </Box>

                    </Box>

                    <Box width="31%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>WHAT'S BREWING</h4>
                          <Box marginTop={5}></Box><iframe src="https://www.dailymotion.com/embed/video/x8e1z6g"  width="100%" height="84%" allowfullscreen > </iframe>
                    </Box>

               </Flex>
           </Box>
      </Box>


    
      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
                    <Box  width="31%">

                         
                          <Box border="5px solid #aba12b" width={10}></Box>
                          <h4>MORE FROM KARNATAKA DISTRICTS</h4>

                        <Box>  

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/clipboard-1-1149790-1664553569.jpg?itok=-Oi01yuF" alt="" />
                          <p>MCC approves naming Surathkal junction after Savarkar <p id="timing"> 9:29 pm</p> </p> 
                          </Flex>

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/bribe-istock-1149788-1664553353.jpg?itok=dlxcnRSA" alt="" />
                          <p>Mangaluru tahsildar, FDA held by Lokayukta for bribery...<p id="timing">9:25 pm</p> </p> 
                          </Flex>
                        
                        </Box>

                    </Box>

                    <Box width="31%" marginTop="54px">

                         <Box bg="#f6f6f6" padding={5}>

                         <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/police-istock-3-1149782-1664552213.jpg?itok=evq6mB9Q" alt="" />
                          <p>PFI Ban: Officials seize properties in Dakshina Kannada...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/gold-istock-2-1149779-1664551888.jpg?itok=Nq_V1up6" alt="" />
                          <p>Gold worth Rs 86.09 lakh seized at MIA...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/drowing-rep-istock-1149595-1664533967.jpg?itok=ZqP7pxQa" alt="" />
                          <p>Youth drowns to death in swimming pool in Shivamogga...</p> 
                          </Flex>
                          </Box>

                    </Box>

                    <Box width="31%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>HOROSCOPE</h4>
                          <Box marginTop={5}> <img src="https://media.discordapp.net/attachments/702481980025077853/1025525185786421340/Capture.PNG" alt="" /> </Box> 
                    </Box>

               </Flex>
           </Box>
      </Box>


      <Box bg="#f6f6f6" >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
                    <Box  width="31%">

                         
                          <Box border="5px solid #aba12b" width={10}></Box>
                          <h4>NATIONAL</h4>

                        <Box>  

                          <Flex bg="#fff" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/congress-1149901-1664565906.jpg?itok=QRjJUNJa" alt="" />
                          <p>DH Toon | Vote here for Congress president... <p id="timing"> 2 hrs ago</p> </p> 
                          </Flex>

                          <Flex bg="#fff" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/modi-metro-pti-1149855-1664562809.jpg?itok=XRPKWmNZ" alt="" />
                          <p>4 Italians held for painting Ahmedabad metro coach...<p id="timing">3 hrs ago</p> </p> 
                          </Flex>
                        
                        </Box>

                    </Box>

                    <Box width="31%" marginTop="54px">

                         <Box  bg="#fff" padding={5}>

                         <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/clipboard-2022-01-04t053056628-1067675-1641256877-1083396-1645357490-1096664-1648794620-1098532-1649335126-1149883-1664562693.jpg?itok=KFwd7kHL" alt="" />
                          <p>AFSPA to continue in Nagaland, Arunachal for 6 months...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/tax-istock-2-1149879-1664561347.jpg?itok=L0Ocboez" alt="" />
                          <p>Govt extends deadline for filing tax audit report...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/untitled-design-85-1149810-1664558906.jpg?itok=t4HaQpQe" alt="" />
                          <p>Meet the contenders of Congress presidential poll</p> 
                          </Flex>
                          </Box>

                    </Box>

                    <Box width="31%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>SPEAK OUT</h4>
                          <Box marginTop={5}> <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/10/01/speak-out-71-1149897-1664565417.jpg?itok=csn579Cr" alt="" /> </Box> 
                    </Box>

               </Flex>
           </Box>
      </Box>




      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
                    <Box  width="31%">

                         
                          <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>BUSINESS</h4>

                        <Box  bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">  

                         
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/dollar-reuters-1149911-1664575402.jpg?itok=KUpwSTeT"  alt="" />
                          <p id="info">Strong USD stokes fear of  currency crash...<p id="timing"> an hour ago</p> </p> 
                        

                          
                        
                        </Box>

                    </Box>

                    <Box width="31%" marginTop="54px">

                    <Box>  

                       <Flex bg="#f6f6f6"  alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/rbi-bloomberg-1149856-1664559247.jpg?itok=6wOmg0d6" alt="" />
                           <p>'RBI rate hike to manage growth-inflation dynamics'<p id="timing">11:04 pm </p> </p> 
                           </Flex>

                       <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                         <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/inflation-istock-1149508-1664474741-1149839-1664556954.png?itok=d2mR0UzB" alt="" />
                           <p>Retail inflation for industrial workers rises to 5.85%... <p id="timing">10:25 pm</p> </p> 
                       </Flex>

                    </Box>

                    </Box>

                    <Box width="31%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>OPINION</h4>
                          
                          <Box bg="#f6f6f6" padding={5} marginTop={5}>

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/shobha-karandlaje-pti-1149824-1664556993.jpg?itok=Bm2J-zuJ" alt="" />
                            <p>'PFI had terror links, wanted to weaken country'...</p> 
                           </Flex>

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                              <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/karnataka-hc-dh-1149823-1664556857.jpg?itok=f-S42UMU" alt="" />
                              <p>HC allows Murugha seer to sign cheques for staff...</p> 
                             </Flex>

                            <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                           <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/clipboard-67-1149822-1664556759.jpg?itok=P9qWL6iw" alt="" />
                           <p>Cong will come to power in K'taka in 2023:...</p> 
                            </Flex>
                           </Box>
                    </Box>

               </Flex>
           </Box>
      </Box>





      <Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
                    <Box  width="31%">

                         
                          <Box border="5px solid #aba12b" width={10}></Box>
                          <h4>SPORTS</h4>

                        <Box>  

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/765899-01-02-1-1149858-1664558778.jpg?itok=pQuw5xEF" alt="" />
                          <p>Azam matches Kohli to lift Pak to 169-6 in...<p id="timing"> 10:56 pm</p> </p> 
                          </Flex>

                          <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/09/30/mirabai-chanu-1149738-1664550321.jpg?itok=JmoPQ1xR" alt="" />
                          <p>National Games: Mirabai pips Sanjita for 49kg gold...<p id="timing">8:35 pm</p> </p> 
                          </Flex>
                        
                        </Box>

                    </Box>

                    <Box width="31%" marginTop="54px">

                         <Box bg="#f6f6f6" padding={5}>

                         <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/harmanpreet-kaur-pti-1149728-1664545843.png?itok=hwblFBX8" alt="" />
                          <p>Was within rules: Harmanpreet on controversial run out...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/naseem-shah-afp-1149649-1664530393.jpg?itok=CiAjwkHB" alt="" />
                          <p>Naseem Shah to travel with Pakistan team to New...</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/cricket-rep-afp-1149638-1664527982.jpg?itok=wNNhUDru" alt="" />
                          <p>T20 WC winning team to get $1.6 million as...</p> 
                          </Flex>
                          </Box>

                    </Box>

                    <Box width="31%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>DH PICKS</h4>
                          <Box bg="#f6f6f6" marginTop={5} padding={4} >

                       <ul id="ul">
                            <li >In Iran & Russia, time to bring on women’s revolutions</li>
                            <li>HC extends stay on Gyanvapi survey site till Oct 31</li>
                            <li>Brands blast Twitter for ads with child porn accounts</li>
                            <li>US announces $1.1 billion in military aid for Ukraine</li>
                            <li>RBI MPC meet: 50-bps rate hike looks imminent</li>
                        </ul>

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
                  <h4>INTERNATIONAL</h4>
                <Flex bg="green" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/clipboard-81-1149902-1664567232.jpg?itok=SP4_rp0G" alt="" />
                <Box marginLeft="15px"> <p id="heading">Burkina Faso as military officers dismiss junta leader <p id="timing">25 mins ago</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={5}>
                    <Box bg="#fff">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/clipboard-84-1149908-1664573517.jpg?itok=P2L6hOA6" width="100%" alt="" />
                       <Box padding={5}> <p>Russian consulate in New York vandalised with red paint... </p> <p id="timing">51 mins ago</p> </Box>
                    </Box >
                    <Box bg="#fff" >
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/hurricane-ian-afp-1149905-1664568785.jpg?itok=fdNnTf_t"  width="100%" alt="" />
                    <Box padding={5}>  <p>Hurricane damage toll in billions, will slow US growth...</p> <p id="timing">2 hrs ago</p></Box>
                    </Box >
                    <Box bg="#fff">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/unsc-reuters-1149904-1664574824.jpg?itok=Fphg4_tU"  width="100%" alt="" />
                    <Box padding={5}>  <p>Putin accuses West of causing Nord Stream leaks... </p> <p id="timing">3 hrs ago</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
               
                <Box>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/vladimir-putin-reuters-1149896-1664565590.jpg?itok=Ls5MlWSQ" alt="" />
                <Box padding={2.5} bg="#fff">  <p>Putin accuses West of causing Nord Stream leaks...</p> <p id="timing">3 hrs ago</p></Box>
                </Box>

                <Box marginTop={4}>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/joe-biden-reuters-5-1149888-1664565264.jpg?itok=X3SeHJex" alt="" />
                <Box padding={2.5} bg="#fff">  <p>US, allies not 'intimidated' by Putin : Joe <br /> Biden...</p> <p id="timing">3 hrs ago</p></Box>
                </Box>


            </Box>    
               
    </Flex>

</Box>

</Box>







<Box w="100%"  bg="#07081d" padding={10} color="white">

        <Box maxW="1200px" margin="auto" >

            <Flex gap={10}>
                
                    <Box width="59%">
                          <Box border="5px solid green" width={10}></Box>
                          <h4>DH VIDEO SECTION</h4>
                          <iframe id="videosection" src="https://www.dailymotion.com/embed/video/x8e3jk7?autoplay=1" width="100%" height="400px" > </iframe> 
                          <p id="heading">Inflation projection retained at 6.7% for FY23: RBI</p>
                    </Box>

                    
                    <Box width="31%">

                         <Box >
                         
                          <h4>Updates</h4>

                          <Box marginTop={3} marginBottom={3}><span> <span style={{color:"#ffde00"}}>VIDEOS</span> | LATEST | TRENDING | ALL</span></Box>
                         <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}   paddingTop={3}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/article_images/2022/09/30/anil-chauhan-1149716-1664537327.jpg?itok=KZNPuY_7" alt="" />
                          <p>CDS Gen Chauhan pays tribute at National War Memorial</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}  paddingTop={4}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/article_images/2022/09/30/sep30v27-1149714-1664536969.jpg?itok=L3kHQr75" alt="" />
                          <p>PM flags off Central Vande Bharat Express 2.0</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} paddingBottom={4} >
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/article_images/2022/09/30/sep30v28-1149637-1664527816.jpg?itok=thr55QYK" alt="" />
                          <p>Special moments of PM Modi onboard Vande Bharat train</p> 
                          </Flex>

                          <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} paddingBottom={4}>
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/article_images/2022/09/30/sep30v22-1149635-1664527366.jpg?itok=Rkxc49pU" alt="" />
                          <p>CDS Lt General (Retd) Chauhan receives Guard of Honour</p> 
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
                  <Box border="5px solid green" width={10}></Box>
                  <h4>METROLIFE</h4>
                <Flex bg="#432957" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/09/30/clipboard-59-1149520-1664479291.jpg?itok=c6kkY_-p" alt="" />
                <Box marginLeft="15px"> <p id="heading">Art tribute to Mahatma Gandhi opens on Monday<p id="timing">30th Sep 2022</p> </p> </Box>
                </Flex>

               
            </Box>

            <Box width="31%" marginTop="34px">

                <Box bg="#f6f6f6" padding={5}>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/file7myica2idas1507wlmy1-1149521-1664479334.jpg?itok=Zp3Z2UrB" alt="" />
                       <p>Gallery walks of show on mail art this weekend...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/clipboard-60-1149522-1664479393.jpg?itok=HwhZPnhY" alt="" />
                        <p>The musical side of a physicist</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/clipboard-58-1149518-1664479132.jpg?itok=DTLcfbMc" alt="" />
                        <p>High demand, but not enough literary translators</p> 
                    </Flex>
                </Box>

            </Box>   
               
    </Flex>

</Box>

</Box>








<Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
               <Flex gap={3}>
               <Box  width="31%">

                         
                          <Box border="5px solid #0d70b9" width={10}></Box>
                    <h4>ENTERTAINMENT</h4>

                    <Box  bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">  


                  <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/salman-1129094-1658496655-1150044-1664638137.jpg?itok=T3bwNVhk"  alt="" />
                 <p id="info">'Bigg Boss' house themed as 'circus' for season 16... <p id="timing">2 hrs ago</p> </p> 




                       </Box>

                 </Box>

                 <Box  width="31%" marginTop={9}>

                         
<Box>  

<Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
<img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/salman-chiranjeevi-pit-1150040-1664636757.jpg?itok=WgI2b77z" alt="" />
<p>Salman calls Hindi, South industries to get together...<p id="timing"> 3 hrs ago</p> </p> 
</Flex>

<Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
<img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/db876f09bbb49d54cf70d00698ea5fd3-1-1150014-1664626663.jpg?itok=HmdfhmDB" alt="" />
<p>When Kapil Sharma auditioned for 'Indian Idol'<p id="timing"> 5:47 pm</p> </p> 
</Flex>

</Box>

</Box>

                    <Box width="31.5%">

                       <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>DH DOC DATABASE</h4>
                          <Box bg="#f6f6f6" marginTop={5} padding={4} >

                       <ul id="ul">
                            <li >Centre declares PFI 'unlawful', bans it for five years</li>
                            <li>Adhir seeks chairmanship for Cong in Parliament panel</li>
                            <li>'The Simpsons' didn't predict Queen Elizabeth's death</li>
                            <li>SC junks plea against Adityanath in 'hate speech' case</li>
                            <li>Azad quits Cong with scathing attack on Rahul, Sonia</li>
                        </ul>

                     </Box>
                    </Box>

               </Flex>
           </Box>
      </Box>






      <Box w="100%"  bg="#fff" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%" >
                  <Box border="5px solid green" width={10}></Box>
                  <h4>SUPPLEMENTS</h4>
                <Flex bg="#432957" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/09/29/clipboard-51-1149084-1664411401.jpg?itok=v3CfFWVr" alt="" />
                <Box marginLeft="15px"> <p id="heading">Dasara over the centuries <p id="timing">29th Sep 2022</p> </p> </Box>
                </Flex>


               <Box marginTop={5}>
                   <Flex gap={3}>
                       <Box><img src="https://cdn.discordapp.com/attachments/702481980025077853/1025838453843300503/unknown.png" alt="" /></Box>
                       <Box bg="#f6f6f6"><img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/29/file7mxzrgg6hmd140p0bomk-1149082-1664411401.jpg?itok=7QjfjYmB" alt="" />
                        <p id="info"> Kaavi art: From temples, churches to airports <p id="timing"> 29th Sep 2022</p></p>
                       </Box>
                   </Flex>
               </Box>

               
            </Box>

       
               
    </Flex>

</Box>

</Box>




<Box w="100%"  bg="#ffefef" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%">
                  <Box border="5px solid #ee9e18" width={10}></Box>
                  <h4>SPECIALS</h4>
                <Flex bg="#ee9e18" alignItems="center" color="white" >

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/file7mzib1qpnbm18iej843o-1150062-1664642778.jpg?itok=Nv9ugrQC" alt="" />
                <Box marginLeft="15px"> <p id="heading">The connotations of temple entry  <p id="timing">an hour ago</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={5}>
                    <Box bg="#fff" width="31.33%">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/lead-pic-the-journalist-draws-the-caricature-of-a-kid-as-she-looks-on-happily-on-church-street-dh-photo-b-h-shivakumarjpg-1149859-1664575630.jpg?itok=9iwRoMHj" alt="" />
                       <Box padding={5}> <p>The uncertain life of a street artist </p> <p id="timing">1st Oct 2022</p> </Box>
                    </Box >
                    <Box bg="#fff" width="31.33%">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/stp-1149784-1664591110.jpg?itok=1aKdEVTe"  width="100%" alt="" />
                    <Box padding={5}>  <p>BWSSB's 100% sewage treatment plan: Many miles to go... </p> <p id="timing">1st Oct 2022</p></Box>
                    </Box >
                    <Box bg="#fff" width="31.33%">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/clipboard-65-1149780-1664573159.jpg?itok=DIKar9lV"  width="100%" alt="" />
                    <Box padding={5}>  <p>Faecal coliform plagues BWSSB’s treated water  </p> <p id="timing">1st Oct 2022</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
               
                <Box>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/gandhi-reuters-1149774-1664569214.jpg?itok=NRMnUF0a" alt="" />
                <Box padding={2.5} bg="#fff">  <p>Gandhi, a man of many abilities </p> <p id="timing">1st Oct 2022</p></Box>
                </Box>

               

            </Box>    
               
    </Flex>

</Box>

</Box>




<Box w="100%"  bg="#fff" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%" >
                  <Box border="5px solid green" width={10}></Box>
                  <h4>SCIENCE & ENVIRONMENT</h4>
                <Flex bg="#432957" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/covid-virus-afp-1149954-1664610771.jpg?itok=tkDakPL4" alt="" />
                <Box marginLeft="15px"> <p id="heading">Long Covid still a mystery, though theories emerge <p id="timing">1:22 pm</p> </p> </Box>
                </Flex>

               
            </Box>

            <Box width="31%" marginTop="34px">

                <Box bg="#f6f6f6" padding={5}>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/milky-way-1149731-1664540643.jpg?itok=FRetXH2V" alt="" />
                       <p>Milky Way's arms may have carved earth's continents...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/dogs-dh-1142464-1662392949-1149704-1664537055.jpg?itok=O47H5_Cg" alt="" />
                        <p>'Virtual Labrador' may help prevent dog bites in future...</p> 
                    </Flex>

                    <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/09/30/nasa-reuter-1149547-1664494775.jpg?itok=QumB-DQk" alt="" />
                        <p>NASA, SpaceX study to extend Hubble's lifespan</p> 
                    </Flex>
                </Box>

            </Box>   
               
    </Flex>

</Box>

</Box>



    
    
    <Footer/>
    </>)
}

export default Home