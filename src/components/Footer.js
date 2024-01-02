import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
export default function Footers() {
  return (


  
    <MDBFooter bgColor='light'>
      <MDBContainer className='pt-4'>
      
           
           <p className='demitxt' >
           
Donating is a selfless act of giving that involves contributing resources, funds, or goods to support causes, organizations, or individuals in need. Whether it's offering financial aid, volunteering time, or providing essential items, donations have the power to make a meaningful impact, creating positive change and improving the lives of others. Each donation, regardless of size, serves as a catalyst for hope, solidarity, and community support, fostering a sense of unity and compassion towards making the world a better place for all.
            </p>
            
 <div className='icns' >
 <p className='txtf mt-2 '>Follow Us</p>
<div className='lgicn' >
           <h3><FaFacebookF /></h3>
           <h3><FaInstagram /></h3>
           <h3><BsTwitterX /></h3>
           </div>     
           </div>   
      </MDBContainer>

    </MDBFooter>
   
  );
}
