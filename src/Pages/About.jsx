import React from 'react'
import './style.css'
import EmailIcon from '@mui/icons-material/Email';
import Face3TwoToneIcon from '@mui/icons-material/Face3TwoTone';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
import AdsClickTwoToneIcon from '@mui/icons-material/AdsClickTwoTone';
import AutoGraphTwoToneIcon from '@mui/icons-material/AutoGraphTwoTone';
import ExtensionTwoToneIcon from '@mui/icons-material/ExtensionTwoTone';
import { Stack, TextField } from '@mui/material';
import video from '../assets/white.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {
  /*useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);*/
  return (
    <div className=' app flex flex-col justify-between gap-11 ml-[2rem]font-serif'>
      <div className=' flex flex-row'>
        <video src = {video} autoPlay loop className='w-30%'/>
        <div className='flex flex-col gap-[3rem]'>
        <h2 className='text-4xl'>About CamLink</h2> 
        <p className='text-2xl italic mr-[2rem]'>CamLink is a revolutionary project that aims to transform the way we capture,
            share, and preserve moments. By providing users with seamless access to their cameras on a website,
              CamLink empowers individuals to effortlessly capture and save moments that matter.<br/><br/> In today's fast-paced
              world, where certain events and phenomena are fleeting, CamLink ensures that every significant moment is captured
                and preserved for posterity.</p>
        </div>
      </div>
      <header className='ml-[2rem] text-3xl '>
        <h1 className='mb-[2rem] text-5xl font-extrabold '>About Us</h1>
        <div className='flex flex-row gap-[2rem] '>
          <div >
            <ExtensionTwoToneIcon sx={{ fontSize: 200 }} color="secondary"/>
            <h2 className='font-bold m-[1rem] text-4xl'> Purpose</h2>
            <p className='text-gray-800 text-xl'>Our purpose is to redefine the way individuals capture, share,
               and preserve meaningful moments. We aim to provide a seamless platform that 
               empowers people to effortlessly immortalize the experiences that hold significance 
               in their lives.</p>
          </div>
          <div>
          <AdsClickTwoToneIcon sx={{ fontSize: 200 }} color="secondary"/>
            <h2 className=' font-bold m-[1rem] text-4xl'> Goal</h2>
            <p className='text-gray-800 text-xl '>Our goal is to be the catalyst for a transformative shift in how society embraces and cherishes moments.
               By offering accessible camera integration on a website, we enable individuals to capture and safeguard the 
               memories that truly matter.</p>
          </div>
          <div>
            <AutoGraphTwoToneIcon sx={{ fontSize: 200 }} color="secondary"/>
            <h2 className='font-bold m-[1rem] text-4xl'> Vision</h2>
            <p className='text-gray-800 text-xl '>Our vision is to become the leading innovator in revolutionizing the way people connect with their memories.
               We aspire to create a future where every significant moment is not only preserved but also effortlessly shared,
                enriching the lives of individuals worldwide.</p>
          </div>
        </div>
      </header>
<div className="bg-image">
  <section id="team" className=' ml-[1rem] font-serif bg-blue-300 p-4'>
    <h2 className='text-bold text-xl italic '>Meet Our Team</h2>
    <ul className="space-y-4 text-xl">
      <li>
        <h3><Face6TwoToneIcon/>  Abenezer Mesfin (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:abenabu388@gmail.com"><EmailIcon /> abenabu388@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Anteneh Addisu (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:anteaddisue20@gmail.com"><EmailIcon /> anteaddisue20@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Abenezer Mesfin (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:abenabu388@gmail.com"><EmailIcon /> abenabu388@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Elias Derbew (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:eliasderbew1@gmail.com"><EmailIcon /> eliasderbew1@gmail.com</a></p>
      </li>
      <li>
        <h3><Face3TwoToneIcon/>  Maedot Amha (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:maedotamha@gmail.com"><EmailIcon /> maedotamha@gmail.com</a></p>
      </li>
      <li>
        <h3><Face3TwoToneIcon/>  Tsion Getachew (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:tsiiiarmy@gmail.com"><EmailIcon /> tsiiiarmy@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Anteneh Getnet (React Developer)</h3>
        <p className='text-base italic'><a href="mailto:antenehgetnet09@gmail.com"><EmailIcon /> antenehgetnet09@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Hanif Siraj (Django Developer)</h3>
        <p className='text-base italic'><a href="mailto:hnfsrj@gmail.com"><EmailIcon /> hnfsrj@gmail.com</a></p>
      </li>
      <li>
        <h3><Face6TwoToneIcon/>  Sena Mekonin (Django Developer)</h3>
        <p className='text-base italic'><a href="mailto:senamekonin19@gmail.com"><EmailIcon /> senamekonin19@gmail.com</a></p>
      </li>
      <li>
        <h3><Face3TwoToneIcon/>  Dagmawit Negash (Django Developer)</h3>
        <p className='text-base italic'><a href="mailto:21dagmawitnegash@gmail.com"> <EmailIcon /> 21dagmawitnegash@gmail.com</a></p>
      </li>
    </ul>
  </section>
  </div>

 <div className='m-[3rem] flex flex-col '>
  <h1 className='mb-[2rem]'> User Feedback</h1>
  <Stack direction = 'row' spacing ={4}>
    <TextField label ='Name' variant = 'standard' color='secondary'/>
    <TextField label ='Email' variant = 'standard' type ='email' color='secondary'/>
    <TextField label ='Message' variant ='standard' color='secondary' />
  </Stack>
  <button className='bg-blue-200 hover:bg-blue-600 rounded-2xl w-[10rem] ml-[20rem] mt-[2rem]'>Send</button>
          
  <div className="text-sm text-gray-500 ">
  <input type="checkbox" name='' id='' />
  <p> By proceeding, I accept the Terms of Service and Privacy Policy,
             and consent to receive updates and marketing communications. </p>
  </div>
  </div>
  <footer>
    <p>&copy; 2024 CamLink. All rights reserved.</p>
  </footer>




    </div>
  )
}

export default About
