import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useUserContext } from "../../contexts/UserContext";

import { StyledRegister } from "./styles";

import penguin from "../../assets/img/penguin.png";
import dog from "../../assets/img/dog.png";
import cat from "../../assets/img/cat.png";
import bear from "../../assets/img/bear.png";
import brownBear from "../../assets/img/bear2.png";
import userPng from "../../assets/img/user.png";
import iBudgetApi from "../../services/iBudgetApi";
import { toast } from "react-toastify";

interface IData {
  name: string;
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
  position?: string;
  imageUrl?: string;
};

const Register = () => {
  const { onSubmitRegister, setIsRegister, setIsLogin, isImage, setIsImage } =
    useUserContext();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    username: yup.string().required("Username obrigatório"),
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória")
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
    setIsImage(png)
  };

  return (
    <StyledRegister>
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
          <input
            type="text"
            placeholder="Ex: Username"
            {...register("username")}
          />
          <span className="span--error">{errors.username?.message}</span>
        </div>

        <div className="div--label">
          <label htmlFor="">
            Email: <span>*</span>
          </label>
          <input
            type="email"
            placeholder="Ex: jao@mail.com"
            {...register("email")}
          />
          <span className="span--error">{errors.email?.message}</span>
        </div>

        <div className="div--senhas">
          <div className="div--label">
            <label htmlFor="">
              Senha: <span>*</span>
            </label>
            <input type="password" {...register("password")} />
            <span className="span--error">{errors.password?.message}</span>
          </div>
          <div className="div--label">
            <label htmlFor="">
              Confirmar senha: <span>*</span>
            </label>
            <input type="password" {...register("passwordConfirm")} />
            <span className="span--error">
              {errors.passwordConfirm?.message}
            </span>
          </div>
        </div>

        <div className="div--label">
          <label htmlFor="">Cargo:</label>
          <input
            type="text"
            placeholder="Front-end"
            {...register("position")}
          />
          <span></span>
        </div>

        <div className="div--images">
          <div className="div--label">
            <label htmlFor="">Escolha seu Avatar:</label>
            <div className="div--avatars">
              <button className="avatar" onClick={() => chooseAvatar(dog)} type="button">
                <img src={dog} alt="" />
              </button>
              <button className="avatar" onClick={() => chooseAvatar(penguin)} type="button">
                <img src={penguin} alt="" />
              </button>
              <button className="avatar" onClick={() => chooseAvatar(brownBear)} type="button">
                <img src={brownBear} alt="" />
              </button>
            </div>
          </div>
          <div className="div--label">
            <label htmlFor="">Imagem(URL):</label>
            <input type="text" {...register("imageUrl")} />
          </div>
        </div>
        <button type="submit" className="register">
          Cadastrar
        </button>
      </form>
    </StyledRegister>
  );
};

export default Register;
