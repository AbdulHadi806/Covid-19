import React, {useContext} from 'react'

import { GlobalContext } from '../context/context'

export function Header() {

  const { Cases } = useContext(GlobalContext)


  return (
    <div className='header container'>
      <div className='boxes'>
        <div className='box one'>
            <div className='box-left'>
            <h2>Confirmed Cases</h2>
            <span>{Cases.reduce((acc, curr)=>   acc + curr.confirmed,0)}</span>
            </div>
            <div className='box-right'>
            </div>
        </div>
        <div className='box two'>
            <div className='box-left'>
            <h2>Active Cases</h2>
            <span>{Cases.reduce((acc, curr)=>   acc + curr.deaths,0)}</span>
            </div>
            <div className='box-right'>
            </div>
        </div>
        <div className='box three'>
            <div className='box-left'>
            <h2>Active Cases</h2>
            <span>{Cases.reduce((acc, curr)=>   acc + curr.active,0)}</span>
            </div>
            <div className='box-right'>
            </div>
        </div>
      </div>
    </div>
  )
}
