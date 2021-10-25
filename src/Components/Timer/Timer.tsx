// Library Imports
import React from 'react';
import { useTimer } from 'react-timer-hook';
import styled from 'styled-components';

// Local Imports

// Type Imports

// Styling

const TimerWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	box-shadow: 1rem .5rem .5rem rgba(0,0,0,.25);
	border-radius: .75rem;
`

const TimerValueWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: .5rem;
`
const TimerValue = styled.span`
	font-size: 4rem;
	font-weight: 900;
	margin: 1rem;
`
const TimerValueLabel = styled.span`
	font-size: 2rem;
	font-weight: 300;
`
type Props = {
	expiryTimestamp : Date,
}

const Timer = ({ expiryTimestamp } : Props) => {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart : true });

  return (
		<TimerWrapper>
			<TimerValueWrapper>
				<TimerValue>
					{days} :
				</TimerValue>
				<TimerValueLabel>
						Days
				</TimerValueLabel>
			</TimerValueWrapper>
			<TimerValueWrapper>
				<TimerValue>
					{hours} :
				</TimerValue>
				<TimerValueLabel>
					Hours
				</TimerValueLabel>
			</TimerValueWrapper>
			<TimerValueWrapper>
				<TimerValue>
					{minutes} :
				</TimerValue>
				<TimerValueLabel>
					Minutes
				</TimerValueLabel>
			</TimerValueWrapper>
			<TimerValueWrapper>
				<TimerValue>
					{seconds}
				</TimerValue>
				<TimerValueLabel>
					Seconds
				</TimerValueLabel>
			</TimerValueWrapper>
		</TimerWrapper>
  );
}

export default Timer;
