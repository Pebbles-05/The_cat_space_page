import Creditfooter from '../../Routesubcomponets/creditfooter';
import Conclusion from "./WebSubComponents/Conclusion";
import DesignProcess from "./WebSubComponents/DesignProcess";
import FinalScreens from "./WebSubComponents/FinalScreens";
import Hero from "./WebSubComponents/Hero";
import Moodboard from "./WebSubComponents/Moodboard";

export default function Project1Web() {
  return (
    <>
      <Hero />
      <DesignProcess />
      <Moodboard />
      <FinalScreens />
      <Conclusion />
      <Creditfooter />
    </>
  );
}
