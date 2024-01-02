import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import AppNavigator from "./app/AppNavigator";
import store from "./app/redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
