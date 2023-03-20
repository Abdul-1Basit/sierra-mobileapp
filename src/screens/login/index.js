import React from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import logo from "../../../assets/mainLogo.png";
import { Feather, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { logInWithEmailAndPassword } from "../../backed";
import { Snackbar } from "react-native-paper";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function Login(props) {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");

	const [showModal, setShowModal] = React.useState(false);
	const [content, setContent] = React.useState("");
	const logmeIn = async () => {
		if (!username || !password) {
			setContent("Please enter email and password");
			setShowModal(true);
			return;
		}
		const response = await logInWithEmailAndPassword(username, password);
		if (response) {
			props.navigation.navigate("Dashboard");
		} else {
			alert("Email or Password is incorrect");
		}
	};
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<ScrollView>
				<View style={styles.main}>
					<View style={[styles.center, { paddingTop: 34 }]}>
						<Image source={logo} style={styles.logoImage} />
					</View>
					<Snackbar
						visible={showModal}
						onDismiss={() => setShowModal(false)}
						action={{
							label: "Close",
							onPress: () => setShowModal(false),
						}}
					>
						{content}
					</Snackbar>
					<View>
						{/* <Text style={styles.description}>Admin</Text> */}
						<Text style={styles.heading}>Log in</Text>
						<Text style={styles.description}>
							Fill your details or continue with social media.
						</Text>
					</View>
					<View style={[styles.rowing, { paddingTop: 30, paddingBottom: 50 }]}>
						<TouchableOpacity style={styles.socialButton}>
							<AntDesign name="google" size={24} color="#006d86" />
							<Text style={{ color: "#006d86", marginLeft: 5 }}>
								Login with Google
							</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.socialButton}>
							<FontAwesome name="apple" size={24} color="#006d86" />
							<Text style={{ color: "#006d86", marginLeft: 5 }}>
								Login with Apple
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={[
							styles.rowing,
							{ paddingBottom: 47, width: screenWidth - 80 },
						]}
					>
						<Feather name="at-sign" size={24} style={{ color: "#fff" }} />
						<TextInput
							placeholder="phoebuffly@gmail.com"
							style={styles.input}
							placeholderTextColor="#fff"
							onChangeText={setUsername}
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
					<View style={[styles.rowing, { width: screenWidth - 80 }]}>
						<Entypo name="lock" size={24} style={{ color: "#fff" }} />
						<TextInput
							placeholder="Password"
							style={styles.input}
							// secureTextEntry={true}
							placeholderTextColor="#fff"
							onChangeText={setPassword}
						/>
					</View>
					<TouchableOpacity
						style={styles.bottomFixed}
						onPress={() => {
							props.navigation.navigate("Signup");
						}}
					>
						<Text style={styles.normalText}>
							New User?<Text style={styles.blueText}> Create Account</Text>
						</Text>
					</TouchableOpacity>
					<View style={[styles.center, { paddingTop: 30 }]}>
						<TouchableOpacity style={styles.inputButton} onPress={logmeIn}>
							<Text style={styles.inputText}>Log in</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
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
		// position: "absolute",
		// bottom: 50,
		marginTop: 8,
		// right: 0,
		// left: 0,
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	normalText: { color: "#fff", fontSize: 14 },
	blueText: {
		color: "#1ADEF4",
		fontSize: 14,
	},
	inputText: {
		fontSize: 21,
		color: "#006d86",
	},
	inputButton: {
		height: 48,
		width: screenWidth - 190,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
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
		color: "#fff",
	},
	fpText: {
		color: "#fff",
		opacity: 0.54,
		textAlign: "right",
	},
	main: {
		backgroundColor: "#006d86",
		paddingHorizontal: 40,
		height: screenHeight,
	},
	label: {},
	description: {
		fontSize: 16,
		fontWeight: "400",
		color: "#e5e5e5",
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
		marginHorizontal: 5,
		paddingRight: 14,
		backgroundColor: "#fff",
		borderRadius: 7,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
