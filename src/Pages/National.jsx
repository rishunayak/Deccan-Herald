import Footer from "../Componets/Footer"
import Navbar from "../Componets/Navbar"
import {Box,Flex} from "@chakra-ui/react"
import "./Home.css"


function National()
{
    return(<>
     
      <Navbar/>
      <Box maxW="1200px" margin="auto" marginTop={20}>
            <p id="timing"> <span style={{color:"#0087a8"}}>Home</span>/ National</p>
            <Flex gap={5}  alignItems="center" >
                  <Box fontSize={20} fontWeight="bold" bg="#0d70b9" padding="15px 30px"  color="#fff">National</Box>
                  <Box>POLITICS</Box>
                  <Box>INDIA@75</Box>
                  <Box>NORTH AND CENTRAL</Box>
                  <Box>EAST AND NORTHEAST</Box>
                  <Box>SOUTH</Box>

                  <Box>WEST</Box>
            </Flex>
        </Box>
        


        



        <Box w="100%"  bg="#fff" padding="40px 0px">
          <Box maxW="1200px" margin="auto" >

            <Box border="5px solid #0d70b9" width={10}></Box>
            <h4>POLITICS</h4>

            <Flex gap={3} >
             <Box width="31%"  >
                <img src="https://www.deccanherald.com/sites/dh/files/styles/fullcardimage/public/articleimages/2022/10/02/befunky-collage-45-1033848-1632489124-1150097-1664656608.jpg?itok=H-m_dejE" alt="The fight for federalism in the electoral arena" />

                <Flex bg="#fff" marginTop={5} alignItems="center" gap="10px" bgColor="#f6f6f6">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/akhilesh-yadav-pti-1147546-1663916462-1150015-1664627413.jpg?itok=l1H6zby9" alt="" />
                <p>'5Gs of garibi, ghotala, ghapla, ghalmel, gorakhdhanda’<p id="timing"> 6:00 pm</p> </p> 
                </Flex>

                <Flex  bg="#fff" marginTop={5}  alignItems="center" gap="10px" bgColor="#f6f6f6">
                 <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/kamal-nath-pti-1149997-1664621032.png?itok=HNLRSrHE" alt="" />
                 <p>After 2020 crisis, Kamal Nath energises cadres for 2023...<p id="timing">4:13 pm</p> </p>
                 </Flex>

             </Box>

            <Box width="31%"  >

                <Box bg="#fff" padding={4} bgColor="#f6f6f6">
                    
                  <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/shashi-tharoor-pti-1128491-1658322236-1150039-1664641146.jpg?itok=3Lzg15jG" alt="" />
                       <p>Gandhis said there is no 'official' candidate: Tharoor...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={4}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/tharoor-pti-1149291-1664441847-1150029-1664638252.jpg?itok=oZF8Z0Tu" alt="" />
                       <p>Gandhi loyalist among proposers for Tharoor's poll bid...</p>
                   </Flex>

                   <Flex gap='20px' paddingTop={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/pti09142022000082b-1-1145021-1663153666-1150019-1664628840.jpg?itok=f1-lbyOC" alt="" />
                       <p>'I belong to Rajasthan': Gehlot hints at staying as...</p>
                   </Flex>
                   
                </Box>   
               
                <Box bg="#fff" marginTop={4} padding={4} bgColor="#f6f6f6" >

                       <ul id="ul">
                            <li >'Continuity with change', Khurshid joins Tharoor issue</li>
                            <li>Cong poll: It's Kharge vs Tharoor; Tripathi out of race</li>
                            <li>Cong govt to complete full term in Rajasthan</li>
                            <li>Gehlot's 'secret' paper on 'SP' sets tongues wagging</li>
                            <li>Rajasthan casts a shadow as Kharge set to be Cong</li>
                        </ul>

                </Box>


            </Box>

            <Box  width="31%" >
                <Box></Box>

                <Box bg="#fff" marginTop="295px" padding={4} bgColor="#f6f6f6">

                <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4}  >
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/mallikarjun-kharge-dh-photo-1149946-1664640036.png?itok=4EIWFi3R" alt="" />
                       <p>Mallikarjun Kharge resigns as Leader of Oppn in RS...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={4} paddingTop={3}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/arvind-kejriwal-bhagwant-mann-pti-1149935-1664602095.jpg?itok=dDydrrG6" alt="" />
                       <p>Kejriwal, Mann on two-day Gujarat visit from today...</p>
                   </Flex>

                   <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={3}>
                       <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/shashi-tharoor-pti-1128491-1658322236-1149928-1664600545.jpg?itok=8ZwAHNzg" alt="" />
                       <p>Cong prez polls: Tharoor to start his campaign today...</p>
                   </Flex>
 
                </Box>

            </Box>

            </Flex>

          </Box>
      </Box>
 







      <Box w="100%"  bg="#fff"  padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%">
                  <Box border="5px solid #0d70b9" width={10}></Box>
                  <h4>NORTH AND CENTRAL</h4>
                <Flex bg="#0d70b9" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/tractor-1150078-1664643951.jpg?itok=EoCrsJ5f" alt="" />
                <Box marginLeft="15px"> <p id="heading">22 dead as tractor-trolley falls into pond in Kanpur<p id="timing">3 hrs ago</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={6}>
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/acid-attack-istokc-1150051-1664640955.jpg?itok=FfLHJXJ7" width="100%" alt="" />
                       <Box padding={6}> <p>Rajasthan: Unidentified miscreants hurl acid on 2 women...</p> <p id="timing">9:45 pm </p> </Box>
                    </Box >
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/arrest-istock-1133732-1659791029-1144182-1662907544-1144743-1663083068-1145348-1663237144-1150036-1664634861.png?itok=rgAfPEQS"  width="100%" alt="" />
                    <Box padding={5}>  <p>Operative of terror module held in Punjab</p> <p id="timing">8:04 pm</p></Box>
                    </Box >
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/probe-isto-1150025-1664630735.jpg?itok=8paOq_Yk"  width="100%" alt="" />
                    <Box padding={5}>  <p>Probe over viral spat between UP govt official, scribe...</p> <p id="timing">6:55 pm</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
               
                <Box bg="#f6f6f6">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/modi-gehlot-pti-1-1150013-1664626939.jpg?itok=C5fT8TfT" alt="" />
                <Box padding={2.5} bg="#fff" bgColor="#f6f6f6">  <p>Modi knelt down to look humbler than me: Gehlot...</p> <p id="timing">5:52 pm</p></Box>
                </Box>

                <Box marginTop={4} bg="#f6f6f6">
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/clean-city-dh-1150011-1664627570.jpg?itok=QL76Lua7" alt="" />
                <Box padding="8.2px" bg="#fff" bgColor="#f6f6f6">  <p>Indore adjudged India's cleanest city for 6th time...</p> <p id="timing">6:02 pm</p></Box>
                </Box>


            </Box>    
               
    </Flex>

</Box>

</Box>






<Box w="100%" bg="#fff" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%">
                  <Box border="5px solid #0d70b9" width={10}></Box>
                  <h4>EAST AND NORTHEAST</h4>
                <Flex bg="#0d70b9" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/01/clipboard-3-1052856-1637421484-1150077-1664643297.jpg?itok=O2h9X77O" alt="" />
                <Box marginLeft="15px"> <p id="heading">Arunachal governor given additional charge of Meghalaya<p id="timing">3 hrs ago</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={6}>
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/la-ganesan-pti-1127852-1658154058-1150052-1664641084.jpg?itok=LW01oR1n" width="100%" alt="" />
                       <Box padding={6}> <p>Manipur Governor La Ganesan hospitalised in Chennai</p> <p id="timing">9:48 pm</p> </Box>
                    </Box >
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/prashant-kishor-pti-1150034-1664634239.jpg?itok=NBgeH_EV"  width="100%" alt="" />
                    <Box padding={5}>  <p>Kishor to start 3,500-km 'padyatra' in Bihar tomorrow...</p> <p id="timing">7:53 pm</p></Box>
                    </Box >
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/sela-tunnel-spec-1150030-1664634083.jpg?itok=uhjBBSjE"  width="100%" alt="" />
                    <Box padding={5}>  <p>Sela tunnel in Arunachal to be ready by January...</p> <p id="timing">7:51 pm</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px" >
               
                <Box >
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/kaziranga-afp-1150017-1664628469.jpg?itok=OuzrRKxP" alt="" />
                <Box padding={2.5} bg="#fff" bgColor="#f6f6f6">  <p>Kaziranga National Park to open for tourists from Oct...</p> <p id="timing">6:17 pm</p></Box>
                </Box>

                <Box marginTop={4}>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/gavel-1-1005279-1625502927-1094931-1648307836-1-1150006-1664623389.jpg?itok=LXis47Ju" alt="" />
                <Box padding="8.2px" bg="#fff" bgColor="#f6f6f6">  <p>Molestation charges against Assam Cong general secy</p> <p id="timing">4:53 pm</p></Box>
                </Box>


            </Box>    
               
    </Flex>

</Box>

</Box>












<Box w="100%"  bg="#fff" padding={10}>

<Box maxW="1200px" margin="auto">

    <Flex gap={4}>
        
            <Box maxW="63%">
                  <Box border="5px solid #0d70b9" width={10}></Box>
                  <h4>SOUTH</h4>
                <Flex bg="#0d70b9" alignItems="center" color="white">

                <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/10/02/ambulance-1150118-1664652971.jpg?itok=5VAj2cUu" alt="" />
                <Box marginLeft="15px"> <p id="heading">Andhra Pradesh to add 432 new ambulances by December<p id="timing">3 hrs ago</p> </p> </Box>
                
                </Flex>

                <Flex marginTop={5} gap={6}>
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6">
                        <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/kodi-1150046-1664644138.jpg?itok=mvWEzms6" width="100%" alt="" />
                       <Box padding={6}> <p>Ex-Kerala Home Minister Kodiyeri passes away</p> <p id="timing">3 hrs ago</p> </Box>
                    </Box >
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6" >
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/dji-1144881-1663134093-1150031-1664633272.jpg?itok=lxdsohsl"  width="100%" alt="" />
                    <Box padding={5}>  <p>Archaeological excavations in TN come to a close...</p> <p id="timing">7:37 pm</p></Box>
                    </Box >
                    <Box bg="#fff" maxW="31.3%" bgColor="#f6f6f6" >
                    <img src="https://www.deccanherald.com/sites/dh/files/styles/smallvertical/public/articleimages/2022/10/01/rss-flag-pti-1149947-1664608963.jpg?itok=iPvOYLF0"  width="100%" alt="" />
                    <Box padding={5}>  <p>5 RSS leaders in Kerala given central security cover...</p> <p id="timing">1st Oct 2022</p></Box>
                    </Box>
                </Flex>
            </Box>

            <Box width="31%"  marginTop="34px">
               
                <Box>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/10/01/rape-rep-istock-1149920-1664595401.jpg?itok=-GQ3TKBi" alt="" />
                <Box padding={5} bg="#fff" bgColor="#f6f6f6">  <p>4 minors in gangrape case to be tried as...</p> <p id="timing">1st Oct 2022</p></Box>
                </Box>

                <Box marginTop={5}>
                <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/09/30/shashi-tharoor-pti-1149862-1664559753.jpg?itok=1tytdb6q" alt="" />
                <Box padding="5px" bg="#fff" bgColor="#f6f6f6">  <p>Former Kerala MLA cites reasons for backing Tharoor...</p> <p id="timing">30th Sep 2022</p></Box>
                </Box>


            </Box>    
               
    </Flex>

</Box>

</Box>







<Box >
           <Box maxW="1200px" margin="auto" borderBottom="1px dotted #eaeaea" padding="40px 0px" >
           <Box border="5px solid #0d70b9" width={10}></Box>
                          <h4>POLITICS</h4>

               <Flex gap={3}>
                    <Box  width="31%">
                        <Box>
                
                        <Box  bg="#0d70b9" color="#fff " fontSize={22} fontWeight="bold" padding="67px" paddingBottom="90px">  <p>Old bridge razed in Pune through controlled implosion</p> <p id="timing">2 hrs ago</p></Box>
                        </Box>
                    </Box>

                    <Box width="31%" >

                    <Box>  

                       <Flex bg="#f6f6f6"  alignItems="center" gap="10px">
                          <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/02/arrest-3-1150121-1664668622.jpg?itok=KUApnDpx" alt="" />
                           <p>3 booked for Palghar factory explosion that killed 3...<p id="timing">5:27 am </p> </p> 
                           </Flex>

                       <Flex bg="#f6f6f6" marginTop={5} alignItems="center" gap="10px">
                         <img src="https://www.deccanherald.com/sites/dh/files/styles/smallhorizontal/public/articleimages/2022/10/01/modi-kejri-rahul-pti-1150020-1664629186.jpg?itok=XdenuKP8" alt="" />
                           <p>In Gujarat, AAP rattles BJP while Cong struggles...<p id="timing">1st Oct 2022</p> </p> 
                       </Flex>

                    </Box>

                    </Box>

                    <Box width="31%">

                       
                          
                          <Box bg="#f6f6f6" padding={5} >

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  >
                            <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/sawant-ians-1149988-1664619046.jpg?itok=s9PfnTmJ" alt="" />
                            <p>Mining leases' auction in Goa to be done by...</p> 
                           </Flex>

                           <Flex gap='20px' borderBottom="1px dotted #eaeaea" paddingBottom={3}  paddingTop={3}>
                              <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/uddhav-thackeray-pti-3-1149987-1664619239.png?itok=P7xJLU5m" alt="" />
                              <p>Uddhav put Balasaheb's Sena at stake for CM post:...</p> 
                             </Flex>

                            <Flex gap='20px' borderBottom="1px dotted #eaeaea"  paddingTop={4} >
                           <img src="https://www.deccanherald.com/sites/dh/files/styles/snippetlist/public/articleimages/2022/10/01/shooting-istock-1149531-1664480221-1149983-1664619170.jpg?itok=SprXbrWh" alt="" />
                           <p>One dead in post-Navratri firing in Mumbai</p> 
                            </Flex>
                           </Box>
                    </Box>

               </Flex>
           </Box>
      </Box>





      <Footer/>
    
    </>)
}

export default National