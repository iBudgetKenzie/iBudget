import { StyledLogin } from '../Login/styles';


const Login = () => {

    return (
        <StyledLogin>
            <h4>Login</h4>
            <form action="submit">
                <label htmlFor="">email:</label>
                <input type="text" />
                <label htmlFor="">senha:</label>
                <input type="text" />
                <button type="submit">Entrar</button>
            </form>
        </StyledLogin>
    )

}

export default Login
