import  {useState} from "react"
import AboutUsM3 from "../AboutUsM3"
import AboutUsM4 from "../AboutUsM4"
import { ButtonChangeTeam } from "./styles";



const AboutUs = () => {
 const [clickToChange, setClickToChange] = useState<boolean>(false)
  return clickToChange === false ? (
  <>
  <AboutUsM3/>
  <ButtonChangeTeam onClick={()=> setClickToChange(!clickToChange)}>Conhecer equipe M4!</ButtonChangeTeam> 
  </>
  ) : (
  <>
  <AboutUsM4/> 
  <ButtonChangeTeam onClick={()=> setClickToChange(!clickToChange)}>Conhecer equipe M3!</ButtonChangeTeam> 
  </>
  )

};

export default AboutUs;
