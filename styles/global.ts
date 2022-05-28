import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../src/constants/colors';

export const GlobalStyle = createGlobalStyle`
	* {
		margin:0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%;
		}
	}

	body {
		background: ${COLORS.WHITE200};
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font: 400 1rem "DM Sans", sans-serif;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 400;
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
