import './style.css'
import Content from '../../components/Content'
import Nav from '../../components/Nav'
import MobileContent from '../../components/MobileContent'
import blurDesktop1 from '../../img/blur-1.png'
import blurDesktop2 from '../../img/blur-2.png'
import React, { useEffect, useState } from "react";




export default function Home() {

  return (
    <main>
      <img className="blurDesktop" src={blurDesktop2} />
      <Nav />
      <MobileContent />
      <Content />
      <img className="blurDesktop" src={blurDesktop1} />
    </main>
  )
}