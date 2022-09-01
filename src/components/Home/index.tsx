import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { IconType } from "react-icons/lib";

import { StyledContainer } from "./styles";

const HomeComponent = () => {
	return (
		<StyledContainer>
			<h1>Bem Vindo.</h1>

			<p>
				Orçamentos pré-definidos e personalizados para seus projetos, na palma
				da sua mão
			</p>

			<div className="contact">
				<p>iBudget@mail.com</p>
				<p>(21)55-9999-6675</p>
				<div className="redes">
					<a href="https://pt-br.facebook.com" target="_blank">
						<BsFacebook />
					</a>
					<a href="https://www.linkedin.com/" target="_blank">
						<BsLinkedin />
					</a>
					<a href="https://twitter.com/" target="_blank">
						<BsTwitter />
					</a>
				</div>
			</div>
		</StyledContainer>
	);
};

export default HomeComponent;
