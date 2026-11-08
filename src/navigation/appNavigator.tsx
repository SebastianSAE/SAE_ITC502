import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS } from '../constants/uiDesign';
import JobsFilterScreen from '../screens/jobsFilter';
import LoginScreen from '../screens/login';
import MainScreen from '../screens/mainScreen';
import SplashScreen from '../screens/splashScreen';

// Define the available screens and their parameters
export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Main: undefined;
  JobsFilter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
      />

      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Main"
        component={MainScreen}
      />

      <Stack.Screen
        name="JobsFilter"
        component={JobsFilterScreen}
      />
    </Stack.Navigator>
  );
}