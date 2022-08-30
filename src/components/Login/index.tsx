import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'

import iBudgetApi from "../../services/iBudgetApi";
import { AxiosError, AxiosResponse } from 'axios';

import { StyledLogin } from '../Login/styles';
import "./container.css";

interface IData {
    email:    string
    password: string
}

interface IUser {
    email: string
    name: string
    username: string
    position: string
    imagemUrl: string
    id: number
}

interface IResponse {
    accessToken: string | number
    user: IUser
}




const LoginModal = () => {

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
        } catch (error) {
            
        }

        
    };

    return (
        <div className="container">
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
            <p>Não possui cadastro? <a href="">Clique aqui</a></p>
        </div>
    );

};

export default LoginModal;
