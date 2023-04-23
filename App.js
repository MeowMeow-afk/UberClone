import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import { store } from "./Store/store";
import HomeScreen from "./screens/HomeScreen";
/**
 * The SafeAreaProvider component is part of the react-native-safe-area-context
 * package and provides a way to automatically handle safe area insets in
 * your React Native application.
 * Safe area insets are the area on the screen that are not covered by notches,
 * device rounded corners or the home indicator on newer iPhones. The
 * SafeAreaProvider component wraps your entire application and provides
 * information about the safe area insets to its child components.
 * This information can be used to adjust the layout of your application so
 * that content is not obscured by these areas.
 */
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <HomeScreen />
      </SafeAreaProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({});

const ReduxData = () => {
  const data = useSelector((state) => state.store);
  return (
    <View>
      <Text>{data}</Text>
    </View>
  );
};
