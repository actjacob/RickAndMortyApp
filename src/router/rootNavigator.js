import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CHARACTERDETAIL,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import TabNavigator from './tabRouter';
import CharacterDetail from '../screens/characters/characterDetail';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';
import Colors from '../theme/colors';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: Colors.BACKGROUNDCOLOR,
        },
        headerBackTitle: 'Back',
      }}>
      <Stack.Group>
        <Stack.Screen name={TABNAVIGATOR} component={TabNavigator} />
        <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
        <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
        <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
