// Library Imports
import * as React from 'react';

// Local Imports
import './App.css';
import useLocalStorage from './Hooks/useLocalStorage';
import Setup from './Components/Flows/Setup';

// Type Imports
import type { AppState } from './sharedTypes';


const App = () => {

	const initialAppState : AppState = {
		turkeyTime: null,
		recipes: null,
	}
	const [appState, setAppState] = useLocalStorage<AppState>("userApp", initialAppState);
	const [hasCompletedSetup, setHasCompletedSetup] = React.useState<Boolean>(false);
	
	return (
		<>
			{!appState.turkeyTime && !hasCompletedSetup ? <Setup completeSetup={() => setHasCompletedSetup(true)}/> : ""}
			{appState.turkeyTime || hasCompletedSetup ? <span>Regular workflow</span> : ""}
		</>
	)
}

export default App; 