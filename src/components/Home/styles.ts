import styled from "styled-components";

export const StyledContainer = styled.div`
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	gap: 20px;

	padding: 40px;

	color: rgb(255, 255, 255);

	h1 {
		font-size: 35px;
	}

	h1 + p {
		font-size: 18px;
	}

	.contact {
		display: flex;
		flex-direction: column;
		gap: 9px;

		.redes {
			display: flex;
			gap: 10px;

			a {
				color: rgb(255, 255, 255);
			}
		}
	}
`;
