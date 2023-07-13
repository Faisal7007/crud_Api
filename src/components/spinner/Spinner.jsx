import React from 'react'
import loader from './loader.gif'
import './Spinner.scss'

function Spinner() {
  return (
    <div className='spinner'>
        <img src={loader} alt="loader_gif" />
    </div>
  )
}

export default Spinner
