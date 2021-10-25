// Library Imports
import * as React from 'react';
import styled from 'styled-components';
// Local Imports
import Timer from '../Timer/Timer';

// Type Imports
import type { AppState } from '../../sharedTypes';

// Styling
const ComponentWrapper = styled.div`
	background-color: lightgreen;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const Divider = styled.div`
	height: .15rem;
	min-width: 75%;
	background-color: #E99431;
	margin: 1rem;
`

type Props = {
	appState: AppState,
}
const Main = ( { appState } : Props) => {

	return(
		<ComponentWrapper>
			<Divider />
			<h1>Time 'till Turkey</h1>
			{appState.turkeyTime && ( 
				<Timer expiryTimestamp={new Date(appState.turkeyTime)} />
			)}
			<Divider />
		</ComponentWrapper>
		
	)
}

export default Main;