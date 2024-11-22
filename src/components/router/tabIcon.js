import {View, Text} from 'react-native';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';
import {
  Book1,
  LocationTick,
  PresentionChart,
  Setting2,
} from 'iconsax-react-native';

const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  i;

  return (
    <View>
      <Text>tabIcon</Text>
    </View>
  );
};

export default TabIcon;
