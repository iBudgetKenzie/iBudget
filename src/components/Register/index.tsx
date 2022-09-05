import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";

import { useUserContext } from "../../contexts/UserContext";

import { StyledRegister } from "./styles";

import penguin from "../../assets/img/penguin.png";
import dog from "../../assets/img/dog.png";
import brownBear from "../../assets/img/bear2.png";

interface IData {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  position?: string;
  imageUrl?: string;
}

const Register = () => {
  const { onSubmitRegister, setIsImage } = useUserContext();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    username: yup.string().required("Username obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
      .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
      .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não conferem")
      .required("Confirmação obrigatória!"),
    position: yup.string(),
    imageUrl: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
  });

  const chooseAvatar = (png: string) => {
    setIsImage(png);
  };

  return (
    <StyledRegister
      as={motion.div}
      initial={{ y: -50, scale: 1, opacity: 0.5 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: 0, scale: 1, opacity: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      <h4>Cadastro</h4>
      <form action="submit" onSubmit={handleSubmit(onSubmitRegister)}>
        <div className="div--label">
          <label htmlFor="">
            Nome: <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Ex: João Gomes"
            {...register("name")}
          />
          <span className="span--error">{errors.name?.message}</span>
        </div>

        <div className="div--label">
          <label htmlFor="">
            Nome de usuário: <span>*</span>
          </label>
          <input type="text" placeholder="Ex: Jao" {...register("username")} />
          <span className="span--error">{errors.username?.message}</span>
        </div>

        <div className="div--label">
          <label htmlFor="">
            Email: <span>*</span>
          </label>
          <input
            type="email"
            placeholder="Ex: joao@mail.com"
            {...register("email")}
          />
          <span className="span--error">{errors.email?.message}</span>
        </div>

        <div className="div--senhas">
          <div className="div--label">
            <label htmlFor="">
              Senha: <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Digite uma senha"
              {...register("password")}
            />
            <span className="span--error">{errors.password?.message}</span>
          </div>
          <div className="div--label">
            <label htmlFor="">
              Confirmar senha: <span>*</span>
            </label>
            <input
              type="password"
              placeholder="Confirme a senha"
              {...register("passwordConfirm")}
            />
            <span className="span--error">
              {errors.passwordConfirm?.message}
            </span>
          </div>
        </div>

        <div className="div--cargo">
          <label htmlFor="">Cargo:</label>
          <input
            type="text"
            placeholder="Ex: Front-end"
            {...register("position")}
          />
        </div>

        <div className="div--images">
          <div className="div--label">
            <label htmlFor="">Escolha seu Avatar:</label>
            <div className="div--avatars">
              <button
                className="avatar"
                onClick={() => chooseAvatar(dog)}
                type="button"
              >
                <img src={dog} alt="" />
              </button>
              <button
                className="avatar"
                onClick={() => chooseAvatar(penguin)}
                type="button"
              >
                <img src={penguin} alt="" />
              </button>
              <button
                className="avatar"
                onClick={() => chooseAvatar(brownBear)}
                type="button"
              >
                <img src={brownBear} alt="" />
              </button>
            </div>
          </div>
          <div className="div--label">
            <label htmlFor="">Imagem(URL):</label>
            <input
              type="text"
              placeholder="Ex: Link imagem"
              {...register("imageUrl")}
            />
          </div>
        </div>
        <div className="div--button">
          <button type="submit" className="register">
            Cadastrar
          </button>
        </div>
      </form>
    </StyledRegister>
  );
};

export default Register;
