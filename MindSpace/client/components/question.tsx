import { color, lightColors } from '@rneui/base';
import { Image,View, Text,StyleSheet, Platform ,TouchableOpacity} from 'react-native';
import { useColorScheme } from 'react-native';
import { PricingCard } from '@rneui/themed';
import { useState } from 'react';
import {Dimensions} from 'react-native';
import { Rating } from '@rneui/themed';

const Question = ({queNumber,que}) => {
    const theme = useColorScheme();
    const isDarkTheme = theme === 'dark';
    // const [questionNumber,SetQuestionNumber] = useState([1])
    const [selectedButton, setSelectedButton] = useState(null);
    const buttons = [20,40,60,80,100];
    const handlePress = (number) =>{
        setSelectedButton(number)
    }
  return (
<View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Question #{queNumber}</Text>
        <Text style={styles.question}>{que}</Text>
        
        <View style={styles.buttonContainer}>
          {buttons.map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() =>handlePress(number) }
              style={[
                styles.button,
                selectedButton === number && styles.selectedButton,
              ]}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedButton === number && styles.selectedButtonText,
                ]}
              >
                {number}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        padding: 14,
      },
      cardContainer: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
      },
      question: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 16,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12, // Note: gap might not work on older React Native versions
      },
      button: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: '#2196F3',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginHorizontal: 6, // Fallback for if gap doesn't work
      },
      selectedButton: {
        backgroundColor: '#2196F3',
      },
      buttonText: {
        fontSize: 18,
        color: '#2196F3',
        fontWeight: '500',
      },
      selectedButtonText: {
        color: 'white',
      },
  });
  

export default Question
