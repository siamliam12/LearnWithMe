import { Journal } from '@/components/journal';
import { Image,View, Text,StyleSheet, Platform,ScrollView  } from 'react-native';
import { FAB } from '@rneui/themed';

export const HomeScreen = () => {
  const handlePress = ()=>{}
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        
        {/* April 4, 2024 */}
        {/* 2:30 PM */}
        <View style={styles.cardContainer}>
        <Journal date={'April 4, 2024'}title={'I am feeling a bit anxious'} content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sint maxime dolore.'} time={'2:30 PM'} />
        <Journal date={'April 5, 2024'}title={'I am feeling good'} content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sint maxime dolore.'} time={'2:30 PM'} />
        <Journal date={'April 6, 2024'}title={"I don't know"} content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sint maxime dolore.'} time={'2:30 PM'} />
        <Journal date={'April 7, 2024'}title={'Today was the best day'} content={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure sint maxime dolore.'} time={'2:30 PM'} />
        </View>
        {/* Add as many Journals as you need */}
      </ScrollView>
      <FAB
        icon={{ name: 'plus', type: 'feather', color: 'white' }}
        color="#007AFF"
        placement="right"
        size="large"
        containerStyle={styles.fabContainer}
        onPress={handlePress}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  scrollContainer: {
    // paddingVertical: 10,
  },
  cardContainer: {
    alignItems: 'center', // Centers cards horizontally
    justifyContent: 'center',
  },
  fabContainer: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});