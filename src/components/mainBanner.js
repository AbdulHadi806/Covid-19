import React, { useState, useContext, useEffect } from 'react'

// Importing Global context
import { GlobalContext } from '../context/context'

export function MainBanner() {
  const { Cases } = useContext(GlobalContext)

  return (
    <div className='MainBanner container'>
        <div className='column-1'>
        {Cases.map((val)=> {
            return (<h4 key={val.uid}>{val.provinceState}</h4>)
          })}
        </div>
        <div className='column-2'>
          <h5>Confirmed Cases</h5>
          {Cases.map((val)=> {
            return (<h6 key={val.uid}>{val.confirmed}</h6>)
          })}
        </div>
        <div className='column-2 change'>
          <h5>Active Cases <span></span></h5>
          {Cases.map((val)=> {
            return (<h6 key={val.uid}>{val.active}</h6>)
          })}
     
        </div>
        <div className='column-2 change2'>
          <h5>Deaths<span></span></h5>
          {Cases.map((val)=> {
            return (<h6 key={val.uid}>{val.deaths}</h6>)
          })}
        </div>
    </div>
  )
}
