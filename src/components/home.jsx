import React from "react";
import Hero from './hero';
import Projects from './projects';
import ReactFullpage from "@fullpage/react-fullpage";



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

return(
  <div className="home">
   <HomeFullpage />
  </div>
)
            



}
     