import React from 'react'
import { PacmanLoader } from 'react-spinners'
import style from './style/style.module.scss'

const Loader = () => {
  return (
    <div className={style.loader_div}>
        <PacmanLoader color='#d69636'/>
    </div>
  )
}

export default Loader