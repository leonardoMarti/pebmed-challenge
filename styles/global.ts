import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../src/constants/colors';
import { MEDIA_QUERIES } from '../src/constants/media-queries';

export const GlobalStyle = createGlobalStyle`
	* {
		margin:0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		${MEDIA_QUERIES.lgDown} {
			font-size: 93.75%;
		}

		${MEDIA_QUERIES.smDown}  {
			font-size: 87.5%;
		}
	}

	body {
		background: ${COLORS.WHITE100};
		-webkit-font-smoothing: antialiased;
	}

	body, input, button {
		font: 400 1rem "DM Sans", sans-serif;
	}

	span {
		color: ${COLORS.BLACK900};
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 400;
		color: ${COLORS.BLACK900};
	}

	button {
		cursor: pointer;
	}

	[disabled] {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
