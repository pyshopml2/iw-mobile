import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import RegisterScreen from '../Containers/RegisterScreen';
import PoolsScreen from '../Containers/PoolsScreen';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  ProfileScreen: { screen: ProfileScreen },
  RegisterScreen: { screen: RegisterScreen },
  PoolsScreen: { screen: PoolsScreen }
}, {
  // Default config for all screens
  headerMode: 'screen',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
		headerStyle: styles.header,
		headerTintColor: '#fff'
  }
});

export default PrimaryNav;
