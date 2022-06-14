import Clock from '../components/Clock'
import Traffic from '../components/Traffic'
import Weather from '../components/Weather'
import RandomExcuse from '../components/RandomExcuse'
import NewsFeed from '../components/NewsFeed'
import React from 'react'

import '../styles/layout.scss'




const Layout: React.FC = () => {
  return (
    <main>
      <Traffic />
      <Clock />
      {/* <Weather /> */}
      {/* <NewsFeed /> */}
      <RandomExcuse />
    </main>
  )
}


export default Layout

