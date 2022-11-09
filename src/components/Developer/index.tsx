import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";


import { DeveloperStyled } from "./styles";

interface IDeveloperProps {
  image: string;
  name: string;
  position: string;
  linkedin: string;
  github: string;
}

const Developer = ({
  image,
  name,
  position,
  linkedin,
  github,
}: IDeveloperProps) => {

  return (
    <DeveloperStyled>
      <figure>
        <img src={image} alt={`${name} - ${position}`} />
      </figure>

      <div>
        <p className="dev-name">{name}</p>
        <p className="dev-job">{position}</p>
        <span>
          <a href={linkedin} target="_blank" rel="noreferrer">
            <IoLogoLinkedin />
          </a>
          <a href={github} target="_blank" rel="noreferrer">
            <IoLogoGithub />
          </a>
        </span>
      </div>
    </DeveloperStyled>
  );
};
export default Developer;
