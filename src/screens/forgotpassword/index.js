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
import { Feather } from "@expo/vector-icons";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function ForgotPassword(props) {
	return (
		<View style={styles.main}>
			<View style={[styles.center, { paddingTop: 34 }]}>
				<Image source={logo} style={styles.logoImage} />
			</View>
			<View>
				<Text style={[styles.heading, { paddingVertical: 13 }]}>
					Forgot Password
				</Text>
				<Text style={styles.description}>
					Enter your Email address to recieve a verification code.
				</Text>
			</View>

			<View style={[styles.rowing, { paddingVertical: 47 }]}>
				<Feather name="at-sign" size={24} style={{ color: "#fff" }} />
				<TextInput
					placeholder="phoebuffly@gmail.com"
					style={styles.input}
					placeholderTextColor="#fff"
				/>
			</View>
			<View style={[styles.center, { paddingTop: 80 }]}>
				<TouchableOpacity
					style={styles.inputButton}
					onPress={() => {
						props.navigation.navigate("ResetPassword");
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
		// position: "absolute",
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
		backgroundColor: "#fff",
		borderRadius: 10,
	},
	input: {
		borderTopWidth: 0,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderBottomWidth: 1,
		borderBottomColor: "#fff",
		fontSize: 19,
		paddingBottom: 10,
		width: 287,
	},
	fpText: {
		color: "#fff",
		opacity: 0.54,
		textAlign: "right",
	},
	main: {
		backgroundColor: "#006d86",
		width: screenWidth,
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
