import { Journal } from '@/components/journal';
import { Image,View, Text,StyleSheet, Platform,ScrollView  } from 'react-native';
import { FAB } from '@rneui/themed';
import Question from '@/components/question';

export const MindMapping = () => {
  const handlePress = ()=>{}
  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardContainer}>
        <Question queNumber={1} que={'How good do you feel today?'}/>
        <Question queNumber={2} que={'How bad do you feel today?'}/>
        <Question queNumber={3} que={'How much fun you had today?'}/>
        <Question queNumber={4} que={'How good do you feel today?'}/>
        <Question queNumber={5} que={'How good do you feel today?'}/>
        </View>
      </ScrollView>
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
        paddingVertical: 10,
      },
      cardContainer: {
        alignItems: 'center', // Centers cards horizontally
        justifyContent: 'center',
      },
});