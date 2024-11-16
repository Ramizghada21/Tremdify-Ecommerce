import React, { useContext } from 'react'
import Layout from "../../components/layout/Layout"
import HeroSection from '../../components/heroSection/HeroSection'
import Category from '../../components/category/Category'
import HomePageProductCard from '../../components/homePageProductCard/HomePageProductCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonial/Testimonial'
import myContext from '../../context/MyContext'

function HomePage() {
  const context = useContext(myContext);
  const name = context;
  return (
    <Layout>
      <HeroSection/>
      <Category/>
      <HomePageProductCard/>
      <Track/>
      <Testimonial/>
      {/* <h1 className='text-3xl text-slate-800'>Name :{name}</h1> */}
    </Layout>
  )
}

export default HomePage