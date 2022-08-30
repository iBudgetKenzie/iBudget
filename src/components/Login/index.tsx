import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { StyledContainer, StyledLogin } from "../Login/styles";
import { useUserContext } from "../../contexts/UserContext";

interface IData {
  email: string;
  password: string;
}

const LoginModal = () => {
  const { onSubmitLogin } = useUserContext();

  const schema = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledContainer>
      <StyledLogin>
        <h4>Login</h4>
        <form action="submit" onSubmit={handleSubmit(onSubmitLogin)}>
          <label htmlFor="">Email:</label>
          <input
            type="text"
            placeholder="email@gmail.com"
            {...register("email")}
          />
          <span>{errors.email?.message}</span>

          <label htmlFor="">Senha:</label>
          <input type="password" {...register("password")} />
          <span>{errors.password?.message}</span>
          <button type="submit">Entrar</button>
        </form>
      </StyledLogin>
      <p>
        Não possui cadastro? <a href="/register">Clique aqui</a>
      </p>
    </StyledContainer>
  );
};

export default LoginModal;
