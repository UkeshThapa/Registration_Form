import React,{useEffect,useRef} from 'react';
import '../App.css'
import {init} from 'ityped';


function Home() {
  const textRef = useRef()
  useEffect(()=>{
    init(textRef.current,{
      showCursor:false,
      strings:["Computer Engineer","MERN Developer","MEAN Developer","DJANGO Developer","Data Scientist"]
    });
  },[])

  return <div className='home'>
    <div className='home-text'>
    <div className='text1'>Welcome To,</div>
    <div className='text2'>Fewa<span>Tech</span></div>
    <div className='text3'>We Are <span ref={textRef}></span></div>
    </div>

  </div>;
}

export default Home;
