import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../utils/routes';
import Characters from '../screens/characters/Characters';
import Episodes from '../screens/episodes/Episodes';
import Locations from '../screens/locations/Locations';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => <TabIcon />,
      })}></Tab.Navigator>
  );
}
