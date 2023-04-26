import {HomeScreen, DetailsScreen} from '../components/ReactNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../page/Home';
import LottieAnimation from '../components/LottieAnimation';
import AnimatableScreen from '../components/AnimatableScreen';
import ImageBlurStorage from '../components/ImageBlurStorage';
const routes = [
  {
    name: 'Home',
    component: Home,
  },
];
const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerStyle: {
        //     backgroundColor: "orange",
        //   },
        //   headerTintColor: "#fff",
        //   headerTitleStyle: {
        //     fontWeight: "bold",
        //   },
        //   headerBackTitle: "",
        // }}
      >
        {routes.map(route => (
          <Stack.Screen
            name={route.name}
            component={route.component}
            options={route.options}
            key={route.name}
            initialParams={route.initialParams}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
