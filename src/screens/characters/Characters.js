// import {View, Text} from 'react-native';
// import React from 'react';

// const Characters = () => {
//   return (
//     <View>
//       <Text>Characters</Text>
//     </View>
//   );
// };

// export default Characters;
import {useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCharacterList} from '../../store/reducers/characterActions';
import Spinner from '../../components/ui/spinner';
import screenStyle from '../../styles/screenStyle';
import CharacterCard from '../../components/characters/characterCard';

const Characters = () => {
  const dispatch = useDispatch();
  const {params, characterList, pending} = useSelector(
    state => state.characters,
  );

  useEffect(() => {
    dispatch(getCharacterList(params));
  }, [params]);
  return (
    <View style={screenStyle.container}>
      {pending ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
        />
      )}
    </View>
  );
};

export default Characters;
