import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import GestureScreen from '../screens/GestureScreen';
import TalkingScreen from '../screens/TalkingScreen';
import SpeakingScreen from '../screens/SpeakingScreen';


const HomeNavigator = createStackNavigator({
 Home: HomeScreen,
 Gesture: GestureScreen,
 Talking: TalkingScreen,
 Speaking: SpeakingScreen
 
});

export default createAppContainer(HomeNavigator);