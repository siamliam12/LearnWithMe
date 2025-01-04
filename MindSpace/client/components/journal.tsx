import { Image,View, Text,StyleSheet, Dimensions ,Platform } from 'react-native';
import { Card } from '@rneui/themed';
import { Feather } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export const Journal = ({date, title,content,time}) => {
  return (
    <View style={styles.container}>
    <Card containerStyle={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Feather name="edit-3" size={20} color="#666" />
        <Text style={styles.date}>{date}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Card.Divider style={styles.divider} />
      <Text style={styles.content}>
        {content}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.timeStamp}>{time}</Text>
      </View>
    </Card>
  </View>
);
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10, // Reduced padding for mobile
      },
      cardContainer: {
        width: width - 30, // Make card width responsive
        borderRadius: 12,
        padding: 16,
        margin: 0,
        borderWidth: 1,        // Added border
        borderColor: '#ddd',   // Light border color
        shadowColor: Platform.OS === 'ios' ? '#000' : '#000',
        shadowOffset: {
          width: 0,
          height: 4,          // Increased shadow height
        },
        shadowOpacity: 0.25,  // Increased shadow opacity
        shadowRadius: 5.84,   // Increased shadow radius
        elevation: 8,         // Increased elevation for Android
        backgroundColor: '#fff',
        marginVertical: 10,   // Added vertical margin
      },
      cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
      },
      date: {
        color: '#666',
        fontSize: 14,
        fontWeight: '500',
      },
      title: {
        fontSize: 22,         // Increased font size
        fontWeight: 'bold',   // Made font bolder
        color: '#333',
        marginBottom: 8,
      },
      divider: {
        marginVertical: 12,
        backgroundColor: '#ddd',
        height: 1,
      },
      content: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
        marginBottom: 16,
      },
      footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
      timeStamp: {
        fontSize: 12,
        color: '#888',
        fontStyle: 'italic',
      }
});