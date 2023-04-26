import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen, DetailsScreen} from '../components/ReactNavigation';

import Home from '../page/Home';

const routes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'NavigationHome',
    component: HomeScreen,
    options: {
      //   headerShown: false,
    },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    initialParams: {itemId: 42},
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
