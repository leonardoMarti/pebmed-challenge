import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	:root {
    --blue-900:#191847;
		
		--orange-900: #F5850B;

		--black-900: #151516;

		--grey-500: #666173;
		--grey-300: #C9C5D4;
		--grey-100: #F4F3F6;

		--white-100: #FFFFFF;

		--background:#E5E5E5;
	}

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
		background: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
    font-family: "DM Sans";
		font-weight: 400;
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
