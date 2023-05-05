import React,{ useEffect }  from 'react'
import { Possiblity, Features, Header, Edulink, Featuresecondary, Sectors} from './containers'
import {CTA, Navbar} from './components'
import './App.css'
import { useLocation } from 'react-router-dom';
export default function Home() {
  const location = useLocation();

  return (
    <div> 
        <Navbar isLogin={true} name={location.state.id}/>
        <Header/>
        <Features />
        <Featuresecondary />
        <Sectors />
        <Edulink />
        <Possiblity />
         <CTA />
    </div>
  )
}