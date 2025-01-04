import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { MindMapping } from '../screens/MindMapping';


const Stack = createStackNavigator();
export default function TabTwoScreen() {
  return (
  <SafeAreaProvider>
        <Stack.Navigator>
      <Stack.Screen 
        name="mindmapper"
        component={MindMapping}
        options={{
          headerTitle: 'MindSpace',
          headerStyle: {
            backgroundColor: '#09294f',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});
