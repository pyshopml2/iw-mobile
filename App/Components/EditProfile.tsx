import React, { Component } from 'react';
import { Text, Accordion } from 'native-base';
import { View, TouchableOpacity, FlatList } from 'react-native';
import styles from './Styles/EditProfileStyles';
import { Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';
import InputField from './InputField';
import AccordInputField from './AccordInputField';
import TextareaField from './TextareaField';
import _validate from '../Services/Validator';
import { MaterialIcons, Ionicons, Entypo } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
	Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger,
} from 'react-native-popup-menu';

const validate = values => {
	const error = {};
	error.name = _validate('name', values.name);
	error.login = _validate('name', values.login);
	return error;
};

type Props = any;

const onMenuPress = (value, id) => {
	alert('you pressed ' + (value == 1 ? 'edit' : 'delete'));
}

const renderItem = ({ item }) => {
	return (
		<View key={item.id} style={styles.editProfileItem}>
			<View style={[styles.editProfileItemTextWrap, styles.editProfileItemTextWrapFirst]}>
				<Text style={styles.editProfileItemText}>{item.name}</Text>
			</View>
			<View style={styles.editProfileItemTextWrap}>
				<Text style={styles.editProfileItemText}>{item.from}-{item.to}</Text>
			</View>
			<Menu onSelect={value => onMenuPress(value, 1)} style={styles.button}>
				<MenuTrigger>
					<Entypo name='dots-three-vertical' style={styles.dots} size={hp('2.4%')} color={'#ccc'}/>
				</MenuTrigger>
				<MenuOptions>
					<MenuOption value={1}>
						<Text style={[styles.menuOption, styles.menuOptionFirst]}>Редактировать</Text>
					</MenuOption>
					<MenuOption value={2}>
						<Text style={styles.menuOption}>Удалить</Text>
					</MenuOption>
				</MenuOptions>
			</Menu>
		</View>
	);
};

const editProfileItemsList = (items) => {
	return (
		<FlatList
			data={items}
			renderItem={renderItem}
			keyExtractor={(item) => item.id}
		/>
	);
};

class EditProfile extends Component<Props> {

	renderHeader(title, expanded) {
    return (
      <View style={styles.accordionHeader}>
        <Text style={styles.accordionHeaderText}>
          {''}{title}
        </Text>
        {expanded
          ? <Ionicons style={{ fontSize: 18 }} name='ios-arrow-up' />
          : <Ionicons style={{ fontSize: 18 }} name='ios-arrow-down' />}
      </View>
    );
	}
	
	renderContent(content) {
		if (content.type === 'contacts') {
			return (
				<View style={styles.accordionInner}>
					<Field 
						name='country' 
						component={AccordInputField} 
						style={styles.input}
						placeholder='Country'
					/>
					<Field 
						name='city' 
						component={AccordInputField} 
						style={styles.input}
						placeholder='City'
					/>
					<Field 
						name='site' 
						component={AccordInputField} 
						style={styles.input}
						placeholder='Site'
					/>
					<Field 
						name='facebook' 
						component={AccordInputField} 
						style={styles.input}
						placeholder='Facebook'
					/>
					<Field 
						name='twitter' 
						component={AccordInputField} 
						style={styles.input}
						placeholder='Twitter'
					/>
					<Field 
						name='linkedin' 
						component={AccordInputField} 
						style={styles.input}
						placeholder='LinkedIn'
					/>
				</View>
			);
		} else if (content.type === 'education') {
			return (
				<View style={styles.education}>
					<TouchableOpacity style={styles.btn} onPress={content.onPress}>
						<MaterialIcons active name='add-circle-outline' color={'#5A6978'} size={hp('2.4%')} style={styles.btnicon}/>
						<Text style={styles.btntext}>Add education</Text>
					</TouchableOpacity>
					{editProfileItemsList(content.items)}
				</View>
			);
		} else if (content.type === 'experience') {
			return (
				<View style={styles.education}>
					<TouchableOpacity style={styles.btn} onPress={content.onPress}>
						<MaterialIcons active name='add-circle-outline' color={'#5A6978'} size={hp('2.4%')} style={styles.btnicon}/>
						<Text style={styles.btntext}>Add experience</Text>
					</TouchableOpacity>
					{editProfileItemsList(content.items)}
				</View>
			);
		}
	}

	render() {
		const { jobs, educations, onAddExperiencePress, onAddEducationPress } = this.props;
		const dataArray = [
			{ title: 'Contacts', content: { type: 'contacts' } },
			{ title: 'Experience', content: { type: 'experience', items: jobs, onPress: onAddExperiencePress } },
			{ title: 'Education', content: { type: 'education', items: educations, onPress: onAddEducationPress  } }
		];

		return (
			<View style={styles.container}>
				<Field 
					name='name'
					component={InputField} 
					style={styles.input}
					placeholder='Name'
					showError={true}
				/>
				<Field 
					name='login' 
					component={InputField} 
					style={styles.login}
					placeholder='Login'
				/>
				<Field 
					name='about' 
					component={TextareaField} 
					style={styles.input}
					placeholder='About'
				/>
				<Accordion
					dataArray={dataArray}
					renderContent={this.renderContent}
					renderHeader={this.renderHeader}
					style={styles.accordion}
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
})(EditProfile);