import React from 'react'
import "./MobileApp.css"
import { assets } from '../../../assets/frontend_assets/assets'

const MobileApp = () => {
  return (
    <div className='mobile-app' id='mobile-app'>
      <p>Download our Mobile App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="Google Play Store"/>
        <img src={assets.app_store} alt="Apple App Store" />
      </div>
    </div>
  )
}

export default MobileApp
