import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { motion } from "framer-motion";

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
      <AboutUsDiv
        as={motion.div}
        initial={{ y: -50, scale: 1, opacity: 0.5 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 50, scale: 1, opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        <p>
          Este é o nosso <strong>Projeto final Front-End do M3</strong> da
          Kenzie Academy Brasil (turma 13). Nós do grupo 3 gostaríamos de
          agradecer a toda nossa turma e a equipe da Kenzie, em especial ao
          facilitador Daniel Pereira e ao nosso instrutor Gabriel Tsunoda. Segue
          abaixo o time responsável pela idealização e desenvolvimento deste
          aplicativo. Aos que nos prestigiaram fica o nosso muito obrigado!
        </p>
        <EquipList>
          <Dev>
            <figure>
              <img src={victor} alt="Victor Avila - Scrum Master" />
            </figure>
            <div>
              <p className="dev-name">Victor Ávila</p>
              <p className="dev-job">Scrum Master</p>
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
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={alexandre} alt="Alexandre Borges - Product Owner" />
            </figure>
            <div>
              <p className="dev-name">Alexandre Borges</p>
              <p className="dev-job">Product Owner</p>
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
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={alvaro} alt="Alvaro Alencar - Tech Leader" />
            </figure>
            <div>
              <p className="dev-name">Álvaro Alencar</p>
              <p className="dev-job">Tech Leader</p>
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
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={gabriel} alt="Gabriel Alencar - Quality Assurance" />
            </figure>
            <div>
              <p className="dev-name">Gabriel Alencar</p>
              <p className="dev-job">Quality Assurance</p>
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
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={gabriella} alt="Gabriella Terra - Quality Assurance" />
            </figure>
            <div>
              <p className="dev-name">Gabriella Terra</p>
              <p className="dev-job">Quality Assurance</p>
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
            </div>
          </Dev>
          <Dev>
            <figure>
              <img src={rafael} alt="Rafael Grillo - Quality Assurance" />
            </figure>
            <div>
              <p className="dev-name">Rafael Grillo</p>
              <p className="dev-job">Quality Assurance</p>
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
            </div>
          </Dev>
        </EquipList>
      </AboutUsDiv>
    </>
  );
};

export default AboutUs;
