import Hero from './hero';
import Projects from './projects';
import ReactFullpage from "@fullpage/react-fullpage";
import useWindowSize from "../hooks/useWindowSize";



const HomeFullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey="key"
    scrollingSpeed={500} /* Options here */
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section"><Hero /></div>
          <div className="section"><Projects /></div>
         
        </ReactFullpage.Wrapper>
      );
    }}
  />
);




export default function Home() {


  const {width}=useWindowSize();



return(
  <div className="home">
   {width<=1000?<><Hero/><Projects/></>:<HomeFullpage/>}
  </div>
)
            



}
     