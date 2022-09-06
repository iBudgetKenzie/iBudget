import styled from 'styled-components';

export const StyledLogin = styled.div`
	background-color: rgba(var(--color-white));
	color: rgba(var(--color-text-black));
	height: 50%;
	width: 90%;
	position: fixed;
	border-radius: 7px;
	padding: 20px 30px 40px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	h4 {
		font-size: 20px;
	}

	@media screen and (min-width: 700px) {
		height: 60%;
		width: 90%;
		position: relative;

		h4 {
			font-size: 1.25rem;
		}
		@media screen and (min-width: 1000px) {
			max-height: 50%;
			width: 65%;
		}
		@media screen and (min-width: 1400px) {
			width: 60%;
		}
		@media screen and (min-width: 2560px) {
			width: 40%;
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 10px;

		@media screen and (min-width: 700px) {
			height: 80%;
			width: 100%;
			justify-content: center;
		}

		input {
			width: 100%;
			height: 15%;
			border-radius: 5px;
			padding: 10px;
			border: solid 1px rgba(var(--color-purple));
		}

		span {
			font-size: 0.7rem;
			color: rgba(var(--color-negative-pink));
		}

		.cadastro {
			background-color: transparent;
			color: rgba(var(--color-grey-1));
			font-weight: 400;
			align-self: center;
			font-family: var(--font-menu-base);
			font-size: 0.88rem;
			cursor: pointer;
			:hover {
				text-decoration: 2px underline;
			}
		}

		.login {
			width: 100%;
			height: 35px;
			margin-top: 10px;
			border-radius: 8px;
			font-size: 1rem;
			font-family: var(--font-forms-base);
			color: rgba(var(--color-text-white));
			background-color: rgba(var(--color-purple));
		}
	}
`;
