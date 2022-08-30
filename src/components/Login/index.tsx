import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useContext } from 'react';

import iBudgetApi from "../../services/iBudgetApi";
import { AxiosError, AxiosResponse } from 'axios';

import { StyledContainer, StyledLogin } from '../Login/styles';
import {ILoginData , IUser, useUserContext} from "../../contexts/UserContext";

interface IData {
    email:    string
    password: string
}

const LoginModal = () => {

    const navigate = useNavigate()
    const { onSubmitLogin, setIsAuthenticated } = useUserContext()

    const schema = yup.object().shape({
        email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
        password: yup.string().required("Senha obrigatória"),
    });  

    const { register, handleSubmit, formState: {errors} } = useForm<IData> ({
        resolver: yupResolver(schema)
    })

    const submitFunction = async (data: IData) => {
        try {
            const response = await iBudgetApi.post("/login", data)
            localStorage.clear()
            localStorage.setItem("@token", response.data.accessToken)
            // const futuroEstadoUser = response.data.user.username
            navigate("/dashboard")
            toast.success("Login realizado com sucesso")
            setIsAuthenticated(true)
        } catch (error) {
            toast.error("Usuário não encontrado")
        }
    };

    return (
        <StyledContainer>
            <StyledLogin>
                <h4>Login</h4>
                <form action="submit" onSubmit={handleSubmit(submitFunction)}>
                    <label htmlFor="">Email:</label>
                    <input type="text" placeholder="email@gmail.com" {...register("email")}/>
                    <span>{errors.email?.message}</span>
                    
                    <label htmlFor="">Senha:</label>
                    <input type="password" {...register("password")}/>
                    <span>{errors.password?.message}</span>
                    <button type="submit">Entrar</button>
                </form>
            </StyledLogin>
            <p>Não possui cadastro? <a href="/register">Clique aqui</a></p>
        </StyledContainer>
    );

};

export default LoginModal;
