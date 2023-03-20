import { StatusBar } from "expo-status-bar";
import { StyleSheet, LogBox } from "react-native";
import ForgotPassword from "./src/screens/forgotpassword";
import Login from "./src/screens/login";
import ResetPassword from "./src/screens/resetpassword";
import Signup from "./src/screens/signup";
// import SplashScreen from "./src/screens/onboarding";
import { enableScreens, enableFreeze } from "react-native-screens";

import UserLogin from "./src/screens/User/login";
import UserSignup from "./src/screens/User/signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding from "./src/screens/onboarding";
import Dashboard from "./src/screens/Dashboard";
import Settings from "./src/screens/Settings";
import Profile from "./src/screens/Profile";
import Favorites from "./src/screens/Favorites";
import HotelDetails from "./src/screens/HotelDetails";
import Payments from "./src/screens/Payments";
import UserProvider from "./src/AppContext";
enableScreens();
enableFreeze();
// LogBox.ignoreLogs(["Warning: ..."]);
// LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<UserProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Onboarding"
					screenOptions={{
						header: () => null,
					}}
				>
					<Stack.Screen name="Onboarding" component={Onboarding} />
					<Stack.Screen name="Payments" component={Payments} />
					<Stack.Screen name="HotelDetails" component={HotelDetails} />
					<Stack.Screen name="Favorites" component={Favorites} />
					<Stack.Screen name="Settings" component={Settings} />
					<Stack.Screen name="Profile" component={Profile} />
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Signup" component={Signup} />
					<Stack.Screen name="ResetPassword" component={ResetPassword} />
					<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
					<Stack.Screen name="UserLogin" component={UserLogin} />
					<Stack.Screen name="UserSignup" component={UserSignup} />
					<Stack.Screen name="Dashboard" component={Dashboard} />
				</Stack.Navigator>
			</NavigationContainer>
		</UserProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
