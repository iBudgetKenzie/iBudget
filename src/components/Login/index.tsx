import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

import { StyledLogin } from './styles';
import { useUserContext } from '../../contexts/UserContext';

interface IData {
	email: string;
	password: string;
}

const LoginModal = () => {
	const { onSubmitLogin, setIsRegister, setIsLogin } = useUserContext();

	const schema = yup.object().shape({
		email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
		password: yup.string().required('Senha obrigatória'),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IData>({
		resolver: yupResolver(schema),
	});

	const toCadastro = () => {
		setIsRegister(true);
		setIsLogin(false);
	};

	return (
		<StyledLogin
			as={motion.div}
			initial={{ y: -50, scale: 1, opacity: 0.5 }}
			animate={{ y: 0, scale: 1, opacity: 1 }}
			exit={{ y: 0, scale: 1, opacity: 0.3 }}
			transition={{ duration: 0.3 }}
		>
			<h4>Login</h4>
			<form action="submit" onSubmit={handleSubmit(onSubmitLogin)}>
				<label htmlFor="">Email:</label>
				<input
					type="text"
					placeholder="email@gmail.com"
					{...register('email')}
				/>
				<span>{errors.email?.message}</span>

				<label htmlFor="">Senha:</label>
				<input type="password" {...register('password')} />
				<span>{errors.password?.message}</span>
				<p>
					Ainda não possui cadastro?{' '}
					<button type="button" className="cadastro" onClick={toCadastro}>
						Clique aqui
					</button>
				</p>
				<button type="submit" className="login">
					Entrar
				</button>
			</form>
		</StyledLogin>
	);
};

export default LoginModal;
