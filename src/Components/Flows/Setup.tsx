// Library Imports
import * as React from 'react';
import styled from 'styled-components';
import { useForm, useFieldArray } from 'react-hook-form'

// Local Imports
import Header from '../Layout/Header'

// Type Imports
import type { AppState } from '../../sharedTypes'

// Styling
const ComponentWrapper = styled.section`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	padding: 5px;
`

const Divider = styled.div`
	height: .15rem;
	min-width: 75%;
	background-color: #E99431;
	margin: 1rem;
`

const Paragraph = styled.p`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	font-size: 1.25rem;
	padding: 2rem;
`
const FormWrapper = styled.section`
`
const Inputs = styled.div`
	display: flex;
	justify-content: space-evenly;
`
const InputWrapper = styled.div`
`
const Label = styled.label`
	font-weight: 700;
`
const ErrorText = styled.span`
	color: red;
`

// Local Types
type Props = {
	completeSetup: () => void,
	setAppState: (data: any) => void,
}

// Render
const Setup = ({ completeSetup, setAppState } : Props) => {

	const initialAppState : AppState = {
		turkeyTime: null,
		recipes: null,
	}

	// const [appState, setAppState] = useLocalStorage<AppState>("userApp", initialAppState);

	const { register, handleSubmit, watch, control, formState : { errors } } = useForm();
	const { fields, append, remove } = useFieldArray({
		name: "recipes",
		control
	})

	const onSubmit = handleSubmit((data) => {
		// @ts-ignore - Can't reconcile app state and form state
		setAppState(data)
		completeSetup();
	});

	const watchDate = watch("turkeyTime");

	return (
		<>
			<Header />
			<Divider />
			<ComponentWrapper>
				<h1> Welcome to the Turkey Day Timer 2021 edition!</h1>
				<Paragraph>
					{`This little app is designed to help you prepare and present your big dinner like a pro. All you need to do is tell us what you want to cook
					and when you want everything to be ready, and we will help you with the tedious planning. By counting backwards to meal time (like the
					countdown for a rocket launch), we make it easy and intuitive to serve your feast easily and on-time.`}
				</Paragraph>
				<h2>To get started, tell us when you want to serve your meal:</h2>
				<FormWrapper>
					<form onSubmit={onSubmit}>
						<input type="datetime-local" {...register("turkeyTime")} />
						{
							watchDate && (
								<>
								<h2>Awesome! Now we just need to know what you're cooking. Make sure to include each dish so we can accurately generate your meal plan.</h2>
									{fields.map((field, index) => (
									<Inputs key={`fragment-${index}`}>
										<InputWrapper>
											<Label>Recipe name </Label>
											<input
												placeholder="Enter a name"
												type="text"
												{...register(`recipes.${index}.name` as const, {
													required: true
												})}
											/>
											{errors?.recipes?.[index]?.name ? <ErrorText>A name is required</ErrorText> : ""}
										</InputWrapper>
										<InputWrapper>
											<Label>Total prep time:</Label>
											<input 
												type="number"
												{...register(`recipes.${index}.totalPrepTime` as const, {
													valueAsNumber: true,
													required: true
												})}
											/>
											{errors?.recipes?.[index]?.totalPrepTime ? <ErrorText>A number is required</ErrorText> : ""}
										</InputWrapper>
										<InputWrapper>
												<Label>Time unit: </Label>
												<select
													{...register(`recipes.${index}.prepTimeUnit` as const, {
														required: true
													})}
												>
													<option>minutes</option>
													<option>hours</option>
													<option>days</option>
												</select>
										</InputWrapper>
										<InputWrapper>
											<Label>Recipe link: </Label>
											<input 
												type="text"
												placeholder="Provide a link to your recipe (optional)"
												{...register(`recipes.${index}.link` as const)}
											/>
										</InputWrapper>
										<button type="button" onClick={() => remove(index)}>X</button>
									</Inputs>
								))}
								<button
									type="button"
									onClick={() => append({
										name: ""
									})}
								>
									Add Recipe
								</button>	
								</>
							)
						}
						<input type="submit" />
					</form>
				</FormWrapper>
			</ComponentWrapper>
		</>
	)
}

export default Setup;