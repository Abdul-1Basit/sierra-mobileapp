import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
} from "react-native";
// import logo from "../../../../assets/mainLogo.png";
import logo from "../../../../assets/mainLogo.png";
import { Feather, Entypo } from "@expo/vector-icons";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function UserLogin(props) {
	return (
		<View style={styles.main}>
			<View style={[styles.center, { paddingTop: 34 }]}>
				<Image source={logo} style={styles.logoImage} />
			</View>
			<View>
				<Text style={styles.description}>User</Text>
				<Text style={styles.heading}>Log in</Text>
				<Text style={styles.description}>
					Fill your details or continue with social media.
				</Text>
			</View>
			<View style={[styles.rowing, { paddingTop: 30, paddingBottom: 50 }]}>
				<TouchableOpacity style={styles.socialButton}>
					<Text>Login with Google</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.socialButton}>
					<Text>Login with Apple</Text>
				</TouchableOpacity>
			</View>
			<View
				style={[styles.rowing, { paddingBottom: 47, width: screenWidth - 80 }]}
			>
				<Feather name="at-sign" size={24} style={{ color: "#fff" }} />
				<TextInput
					placeholder="phoebuffly@gmail.com"
					style={styles.input}
					placeholderTextColor="#fff"
				/>
			</View>
			<View style={[styles.rowing, { width: screenWidth - 80 }]}>
				<Entypo name="lock" size={24} style={{ color: "#fff" }} />
				<TextInput
					placeholder="Password"
					style={styles.input}
					secureTextEntry={true}
					placeholderTextColor="#fff"
				/>
			</View>
			<TouchableOpacity
				style={styles.paddingTopSeven}
				onPress={() => {
					props.navigation.navigate("ForgotPassword");
				}}
			>
				<Text style={styles.fpText}>Forgot Password?</Text>
			</TouchableOpacity>
			<View style={[styles.center, { paddingTop: 30 }]}>
				<TouchableOpacity
					style={styles.inputButton}
					onPress={() => {
						alert("Welcome");
					}}
				>
					<Text style={styles.inputText}>Continue</Text>
				</TouchableOpacity>
			</View>
			<TouchableOpacity
				style={styles.bottomFixed}
				onPress={() => {
					props.navigation.navigate("UserSignup");
				}}
			>
				<Text style={styles.normalText}>
					New User?<Text style={styles.blueText}> Create Account</Text>
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	paddingTopSeven: {
		paddingTop: 7,
	},
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	logoImage: { height: 316, resizeMode: "contain" },
	bottomFixed: {
		position: "absolute",
		bottom: 60,
		right: 0,
		left: 0,
		alignItems: "center",
		justifyContent: "center",
	},
	normalText: { color: "#fff", fontSize: 14 },
	blueText: {
		color: "#1ADEF4",
		fontSize: 14,
	},
	inputText: {
		fontSize: 21,
		color: "#2a2a2a",
	},
	inputButton: {
		height: 48,
		width: screenWidth - 190,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 10,
	},
	input: {
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#fff",
		width: 297,
		paddingBottom: 5,
		fontSize: 19,
	},
	fpText: {
		color: "#fff",
		opacity: 0.54,
		textAlign: "right",
	},
	main: {
		backgroundColor: "#252525",
		paddingHorizontal: 40,
		height: screenHeight,
	},
	label: {},
	description: {
		fontSize: 16,
		fontWeight: "400",
		color: "#fff",
	},
	heading: {
		fontSize: 37,
		fontWeight: "700",
		color: "#fff",
	},
	rowing: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	socialButton: {
		paddingVertical: 14,
		paddingLeft: 8,
		paddingRight: 14,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
});
