import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FILTERCHARACTERS, SEARCHCHARACTERS} from '../../utils/routes';
import {FilterSearch, SearchNormal} from 'iconsax-react-native';
import Colors from '../../theme/colors';

export default function HeaderRight() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(SEARCHCHARACTERS)}>
        <SearchNormal size={27} color={Colors.BLACK} />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate(FILTERCHARACTERS)}>
        <FilterSearch size={27} color={Colors.BLACK} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
    marginRight: 5,
  },
  button: {
    marginHorizontal: 5,
  },
});
