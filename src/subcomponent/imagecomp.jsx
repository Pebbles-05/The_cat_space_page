

export default function Imagecomp({path,num,className}) {



  return (
    <>
    {num.map((num,ind)=>{ return <div key={ind} className="img-div">
              <img loading='lazy' src={`https://ik.imagekit.io/thecatspace/catspace_media/${path + num}.png`} alt='img' className={`${className}`} />
            </div>  })}
    </>
  )
}
