import React from 'react'

export default function Imagecomp({data}) {
  return (
    <>
    {data.map((dta,ind)=>{ return <div key={ind} className='img-div '>
              <img src={dta} alt='img' className='img' />
            </div>  })}
    </>
  )
}
