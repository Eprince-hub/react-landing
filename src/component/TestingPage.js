/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const testingPagestyle = css`
height: 100vh;
width: 100vw;
text-align: center;
`

export default function TestingPage() {
	return (
		<div css={testingPagestyle}>
			<h1>HERE IS JUST FOR DEBUGGING AND TESTING THE PROGRESS,, THANKS</h1>
		</div>
	)
}