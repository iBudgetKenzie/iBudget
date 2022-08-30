import { StyledLogin } from '../Login/styles';


const Login = () => {

    return (
        <StyledLogin>
            <div className='container'>
                <h4>Login</h4>
                <form action="submit">
                    <label htmlFor="">email:</label>
                    <input type="text" />
                    <label htmlFor="">senha:</label>
                    <input type="text" />
                    <button type="submit">Entrar</button>
                </form>
            </div>

        </StyledLogin>
    )

}

export default Login
