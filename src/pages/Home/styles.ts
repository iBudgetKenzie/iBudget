import styled from 'styled-components';

export const StyledBody = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column-reverse;

	@media screen and (min-width: 700px) {
		flex-direction: row;
	}

	.logo-section {
		width: 100%;
		height: 55%;
		padding: 50px;
		background-color: rgba(var(--color-black));
		color: rgba(var(--color-white));

		img {
			width: 100px;
			height: 100px;

			@media screen and (min-width: 700px) {
				width: 280px;
			}
		}

		display: flex;
		align-items: center;

		.logo-paragraph {
			color: rgba(var(--color-white));
			font-size: 14px;
			font-weight: bold;

			@media screen and (min-width: 700px) {
				font-size: 1.25rem;
			}
		}

		@media screen and (min-width: 700px) {
			width: 50%;
			height: 100%;
			flex-direction: column;
			align-items: flex-start;
			justify-content: center;
		}
	}

	.header-section {
		width: 100%;
		height: 85%;
		background-color: rgba(var(--color-purple));
		display: flex;
		flex-direction: column;
		align-items: center;

		header {
			display: flex;
			justify-content: space-around;
			align-items: flex-start;
			width: 100%;
			height: 40%;
			padding: 20px;
			@media screen and (min-width: 700px) {
				height: 50px;
			}
		}

		.header-menu {
			background-color: rgba(var(--color-purple));
			color: rgba(var(--color-white));
			font-family: var(--font-menu-base);
			font-weight: 300;
			:hover {
				text-decoration: underline;
			}
		}

		@media screen and (min-width: 700px) {
			width: 50%;
			height: 100%;

			header {
				justify-content: space-evenly;
			}
		}

		@media screen and (min-width: 1000px) {
			header {
				width: 70%;
				height: 40px;
			}
		}
	}

	.content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;

		position: relative;
		@media screen and (min-width: 700px) {
			align-items: center;
		}
	}
`;
