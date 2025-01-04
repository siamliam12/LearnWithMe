import { Image,View, Text,StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '@/app/screens/HomeScreen';

const Stack = createStackNavigator();
export default function index() {
  return (
    <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
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
