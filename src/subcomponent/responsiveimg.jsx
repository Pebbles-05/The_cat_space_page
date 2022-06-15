import useWindowSize from "../hooks/useWindowSize";


export default function Responsiveimg({dta1,dta2,dta1size,dta2size,isvisible1,isvisible2}) {
  const {width}=useWindowSize();
  return (
    <div className="responsiveimg">
                {width<=800? <img style={{width:`${dta2size}%`,display:`${isvisible2?"none":"block"}`}} src={dta2} alt="dta2" />:<img style={{width:`${dta1size}%` ,display:`${isvisible1?"none":"block"}`}} src={dta1} alt="dta1" /> }
    </div>
  )
}
