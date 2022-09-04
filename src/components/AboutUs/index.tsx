import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { AboutUsDiv, EquipList, Dev } from "./styles";
import alexandre from "../../assets/img/alexandre-borges-photo.png";
import alvaro from "../../assets/img/alvaro-alencar-photo.jpg";
import gabriel from "../../assets/img/gabriel-alencar-photo.jpg";
import gabriella from "../../assets/img/gabriella-terra-photo.png";
import victor from "../../assets/img/victor-avila-photo.png";
import rafael from "../../assets/img/rafael-grillo-photo.jpg";

const AboutUs = () => {
  return (
    <>
      <AboutUsDiv>
        <p>
          Este é o Projeto final Front-End do M3 da Kenzie Academy Brasil (turma
          13). Queriamos agradecer a toda nossa turma e a equipe da Kenzie, em
          especial ao facilitador Daniel Pereira e o nosso instrutor Gabriel
          Tsunoda. Segue abaixo o time do grupo 3 que foram os responsáveis pela
          idealização e desenvolvimento deste aplicativo.
        </p>
        <EquipList>
          <Dev>
            <figure>
              <img src={victor} alt="Victor Avila - Scrum Master" />
            </figure>
            <p>Victor Ávila</p>
            <p>Scrum Master</p>
            <div>
              <a
                href="https://www.linkedin.com/in/victor-avila-br/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/victoraviladev"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={alexandre} alt="Alexandre Borges - Product Owner" />
            </figure>
            <p>Alexandre Borges</p>
            <p>Product Owner</p>
            <div>
              <a
                href="https://www.linkedin.com/in/alexandre-borges-albuquerque/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/axdborges"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={alvaro} alt="Alvaro Alencar - Tech Leader" />
            </figure>
            <p>Álvaro Alencar</p>
            <p>Tech Leader</p>
            <div>
              <a
                href="https://www.linkedin.com/in/alvaro-romario-cavalcante-alencar/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/alvaroallencar"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={gabriel} alt="Gabriel Alencar - Quality Assurance" />
            </figure>
            <p>Gabriel Alencar</p>
            <p>Quality Assurance</p>
            <div>
              <a
                href="https://www.linkedin.com/in/gabriel-alencar-de-souza-santos/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/gabrielAlencar33564"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={gabriella} alt="Gabriella Terra - Quality Assurance" />
            </figure>
            <p>Gabriella Terra</p>
            <p>Quality Assurance</p>
            <div>
              <a
                href="https://www.linkedin.com/in/gabriella-terra/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/GabriellaTerra"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={rafael} alt="Rafael Grillo - Quality Assurance" />
            </figure>
            <p>Rafael Grillo</p>
            <p>Quality Assurance</p>
            <div>
              <a
                href="https://www.linkedin.com/in/rafael-grillo/"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://github.com/rGrillo1"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoGithub />
              </a>
            </div>
          </Dev>
        </EquipList>
      </AboutUsDiv>
    </>
  );
};

export default AboutUs;
