import React from 'react'

export default function Imagecomp({path,num,className}) {
  return (
    <>
    {num.map((num,ind)=>{ return <div key={ind} className="img-div">
              <img loading='lazy' src={`https://ik.imagekit.io/catspace/${path + num}.png`} alt='img' className={`${className}`} />
            </div>  })}
    </>
  )
}
