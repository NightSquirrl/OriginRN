import React from 'react';
import {View} from 'react-native';
import {Button, Text} from 'react-native-paper';
function Home({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Button
        style={{
          marginBottom: 5,
        }}
        mode="contained"
        onPress={() => {
          navigation.navigate('NavigationHome');
        }}>
        <Text variant="titleLarge">React native navigation</Text>
      </Button>
    </View>
  );
}

export default Home;
