/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import mainLogo from './images/type-logo-light.svg';

// Some variables for repeated values!
const logoSize = '180px';




const headerStyle = css`
width: 100vw;
height: 6rem;
background: red;



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
		background-size: 300% 100%;
		font-size: 1rem;
		color: #0c022f;
		padding: .85rem 2rem;
		border: none;
		border-radius: 30px;
		cursor: pointer;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;


		:hover {
		background-position: 80% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
		background-image: linear-gradient(120deg, rgb(44, 212, 217) 0px, rgb(44, 212, 217) 50%, rgb(83, 51, 237) 100%);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
		color: #ffffff;

		}


	}
}
`





export default function Navigation() {
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