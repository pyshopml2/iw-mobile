import React, { Component } from 'react';
import { Text } from 'native-base';
import { View } from 'react-native';
import styles from './Styles/AddExperienceStyles';
import { Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import InputField from './InputField';
import _validate from '../Services/Validator';
import DateInputField from './DateInputField';

const validate = values => {
	const error = {};
  error.email = _validate('email', values.email);
  error.name = _validate('name', values.name);
	return error;
};

type Props = any;

class AddExperience extends Component<Props> {

	render() {
		return (
			<View style={styles.container}>
				<Field 
					name='name'
					component={InputField} 
					style={styles.input}
					placeholder='Your experience'
					showError={true}
				/>
				<Field 
					name='from' 
					component={DateInputField} 
					style={styles.input}
					placeholder='From'
				/>
				<Field 
					name='to' 
					component={DateInputField} 
					style={styles.input}
					placeholder='To'
				/>
				<Button block primary onPress= {() => {}}>
					<Text>Save</Text>
				</Button>
			</View>
		);
	}
}

export default reduxForm({
  form: 'add_experience',
  validate
})(AddExperience);