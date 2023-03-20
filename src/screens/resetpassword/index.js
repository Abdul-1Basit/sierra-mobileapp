import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
} from "react-native";
import logo from "../../../assets/secondLogo.png";
import { Entypo } from "@expo/vector-icons";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function ResetPassword(props) {
	return (
		<View style={styles.main}>
			<View style={[styles.center, { paddingTop: 34 }]}>
				<Image source={logo} style={styles.logoImage} />
			</View>
			<View>
				<Text style={styles.heading}>Reset Password</Text>
				<Text style={styles.description}>
					Your password must be different from previous used passwords.{" "}
				</Text>
			</View>
			<View style={[styles.rowing, { paddingBottom: 47, paddingTop: 36 }]}>
				<Entypo name="lock" size={24} style={{ color: "#fff" }} />
				<TextInput
					placeholder="New Password"
					style={styles.input}
					secureTextEntry={true}
					placeholderTextColor="#fff"
				/>
			</View>
			<View style={[styles.rowing, { paddingBottom: 47 }]}>
				<Entypo name="lock" size={24} style={{ color: "#fff" }} />
				<TextInput
					placeholder="Confirm Password"
					style={styles.input}
					secureTextEntry={true}
					placeholderTextColor="#fff"
				/>
			</View>
			<View style={styles.center}>
				<TouchableOpacity
					style={styles.inputButton}
					onPress={() => {
						props.navigation.navigate("Login");
					}}
				>
					<Text style={styles.inputText}>Continue</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
		justifyContent: "center",
	},
	logoImage: { height: 316, resizeMode: "contain" },
	bottomFixed: {
		position: "absolute",
		bottom: 24,
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
	},
	input: {
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#fff",
		width: 287,
		fontSize: 19,
		paddingBottom: 10,
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
		width: screenWidth,
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
		paddingRight: 14,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
});
