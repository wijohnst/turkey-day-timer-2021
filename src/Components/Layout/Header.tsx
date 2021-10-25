// Library Imports
import * as React from 'react';
import styled from 'styled-components';

// Local Imports
// @ts-ignore
import TurkeyTimerIcon from '../../Assets/Images/turkey_timer_icon.svg?component';

// Type Imports

// Styling

const ComponentWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`
const HeaderTextWrapper = styled.div`
	margin-left: 1rem;
`

const HeaderText = styled.h1`
	color: #9C31E9;
`
const Header = () => {
	return (
		<ComponentWrapper>
			<TurkeyTimerIcon />
			<HeaderTextWrapper>
				<HeaderText> Turkey Day Timer, 2021</HeaderText>
			</HeaderTextWrapper>
		</ComponentWrapper>
	)
}

export default Header;