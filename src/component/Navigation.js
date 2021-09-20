/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import mainLogo from './images/type-logo-light.svg';

// Some variables for repeated values!
const logoSize = '180px';




const headerStyle = css`
width: 100vw;
background: red;
height: 6rem;


div:first-child {
  width: 60%;
  margin: 0 auto;
  display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
	font-size: 1rem;
font-weight: bold;

	button:empty {
background-image: url('${mainLogo}');
background-position: left;
background-size: ${logoSize};
background-repeat: no-repeat;
cursor: pointer;
display: inline;
padding: 0;
width: ${logoSize};
height: 40px;
border: none;
background-color: transparent;

	}

	nav ul{
		display: flex;
		grid-gap: 50px;

		li {
			list-style: none;
			cursor: pointer;


			:hover {
				text-decoration-line: underline;

			}
		}
	}

	button:last-child {
		background-color: rgb(44, 212, 217);
		font-size: 1rem;
		padding: .85rem 2rem;
		border: none;
		border-radius: 30px;
		cursor: pointer;

		:hover {
			background-image: linear-gradient(120deg, rgb(44, 212, 217) 0px, rgb(44, 212, 217) 50%, rgb(83, 51, 237) 100%)
		}


	}
}
`





export function Navigation() {
	return (
		<header css={headerStyle}>
			<div>
				<button></button>

				<nav>
					<ul>
						<li>Features</li>
						<li>Documentation</li>
						<li>FAQ</li>
						<li>Forum</li>
					</ul>
				</nav>

					<button>
            Download
					</button>
			</div>

		</header>
	)
}