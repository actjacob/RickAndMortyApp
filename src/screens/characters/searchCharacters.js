import {
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
  TextInput,
  Alert,
  Animated,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import React, {
  useEffect,
  useReducer,
  useState,
  useCallback,
  useRef,
} from 'react';
import CustomButton from '../../components/ui/customButton';
import Colors from '../../theme/colors';
import screenStyle from '../../styles/screenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/reducers/characterActions';
import {changeParams} from '../../store/reducers/characterSlice';
import SearchItem from '../../components/characters/searchItem';
import Spinner from '../../components/ui/spinner';
import debounce from 'lodash.debounce';

export default function SearchCharacters() {
  const dispatch = useDispatch();
  const {characterList, pending, params} = useSelector(
    state => state.characters,
  );
  const [searchText, setSearchText] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // useEffect(() => {
  //   dispatch(getCharacterList(params));
  // }, [params]); // params değiştiğinde yeniden çalışacak

  // useEffect(() => {
  //   const debouncedSearch = debounce(() => {
  //     handleSubmit();
  //   }, 500);

  //   debouncedSearch();

  //   return () => debouncedSearch.cancel();
  // }, [searchText]);

  const handleSearch = useCallback(() => {
    if (searchText.trim()) {
      dispatch(changeParams({name: searchText}));
    } else {
      Alert.alert('warning', 'Please enter a search term');
    }
  }, [searchText]);

  const debouncedSearch = useCallback(debounce(handleSearch, 500), []);

  const ListHeaderComponent = () => {
    return (
      <KeyboardAvoidingView
        style={screenStyle.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            value={searchText}
            placeholder="Search Character"
            onChangeText={text => {
              setSearchText(text);
              debouncedSearch();
            }}
            style={{
              marginTop: 20,
              width: '95%',
              borderWidth: 0.5,
              backgroundColor: Colors.BACKTITLECOLOR,
              borderColor: Colors.BROWN,
              padding: 10,
              height: 40,
              borderRadius: 100,
            }}
          />
          <CustomButton
            onPress={debouncedSearch}
            title="Search"
            backColor={Colors.GREEN}
            titleColor={Colors.WHITE}
          />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <View style={{flex: 1}}>
      {pending ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Spinner />
          <Text>Arama yapılıyor...</Text>
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={ListHeaderComponent}
          data={characterList}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <SearchItem item={item} />}
        />
      )}
    </View>
  );
}
