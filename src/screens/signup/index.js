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
import React from "react";
import logo from "../../../assets/secondLogo.png";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import { registerWithEmailAndPassword } from "../../backed";
import { Snackbar } from "react-native-paper";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function Signup(props) {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [showModal, setShowModal] = React.useState(false);
	const [content, setContent] = React.useState("");
	const signmeUp = async () => {
		if (!email || !username || !password) {
			// alert("All fields are mandatory");
			setContent("All fields are mandatory!");
			setShowModal(true);
			return;
		}
		const respo = await registerWithEmailAndPassword(
			username,
			email.toLowerCase(),
			password
		);
		if (!respo) {
			setContent("Failed! Please try again later");
			setShowModal(true);
			return;
		} else {
			setContent("Successfully Registered! Please login");
			setShowModal(true);
			props.navigation.navigate("Login");
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
						<Text style={styles.heading}>Sign up</Text>
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
					<View style={[styles.rowing, { paddingBottom: 47 }]}>
						<Feather name="at-sign" size={24} style={{ color: "#fff" }} />
						<TextInput
							placeholder="phoebuffly@gmail.com"
							style={styles.input}
							onChangeText={(text) => setEmail(text)}
							placeholderTextColor="#fff"
						/>
					</View>
					<View style={[styles.rowing, { paddingBottom: 47 }]}>
						<AntDesign name="user" size={24} color="white" />
						<TextInput
							placeholder="Full name"
							style={styles.input}
							onChangeText={(text) => setUsername(text)}
							placeholderTextColor="#fff"
						/>
					</View>
					<View style={[styles.rowing, { paddingBottom: 10 }]}>
						<AntDesign name="lock" size={24} color="white" />
						<TextInput
							placeholder="Password"
							style={styles.input}
							onChangeText={(text) => setPassword(text)}
							secureTextEntry={true}
							placeholderTextColor="#fff"
						/>
					</View>
					<TouchableOpacity
						style={styles.bottomFixed}
						onPress={() => {
							props.navigation.navigate("Login");
						}}
					>
						<Text style={styles.normalText}>
							Joined us before? <Text style={styles.blueText}> Login</Text>
						</Text>
					</TouchableOpacity>
					<View style={[styles.center, { paddingBottom: 45 }]}>
						<TouchableOpacity
							style={styles.inputButton}
							onPress={() => signmeUp()}
						>
							<Text style={styles.inputText}>Register</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	logoImage: { height: 316, resizeMode: "contain" },
	bottomFixed: {
		// position: "absolute",
		marginBottom: 30,
		right: 0,
		left: 0,
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
		borderRadius: 10,
		backgroundColor: "#fff",
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
		color: "#fff",
		width: 287,
		fontSize: 19,
		paddingBottom: 5,
	},
	fpText: {
		color: "#fff",
		opacity: 0.54,
		textAlign: "right",
	},
	main: {
		backgroundColor: "#006d86",
		width: screenWidth,
		height: "100%",
		paddingHorizontal: 40,
		paddingBottom: 20,
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
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 8,
		paddingRight: 14,
		marginHorizontal: 5,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
});
