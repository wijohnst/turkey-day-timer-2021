// Library Imports
import * as React from 'react';

// Local Imports
import './App.css';
import useLocalStorage from './Hooks/useLocalStorage';
import Setup from './Components/Flows/Setup';
import Main from './Components/Flows/Main';

// Type Imports
import type { AppState } from './sharedTypes';


const App = () => {

	const initialAppState : AppState = {
		turkeyTime: null,
		recipes: null,
	}
	
	const [hasCompletedSetup, setHasCompletedSetup] = React.useState<Boolean>(false);
	const [appState, setAppState] = useLocalStorage<AppState>("userApp", initialAppState);

	return (
		<>
			{!appState.turkeyTime && !hasCompletedSetup ? <Setup completeSetup={() => setHasCompletedSetup(true)} setAppState={(data) => setAppState(data) }/> : ""}
			{appState.turkeyTime || hasCompletedSetup ? <Main appState={appState} /> : ""}
		</>
	)
}

export default App; 