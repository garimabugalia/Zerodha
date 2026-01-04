import Awards from "./Awards";
import Education from "./Education";
import HeroHome from "./Hero";
import Price from "./Price";
import Stast from "./Stast";


export default function HomePage() {
  return (
    <div>
        <HeroHome/>
        <Awards/>
        <Stast/>
        <Price/>
        <Education/>
    </div>
  );
}