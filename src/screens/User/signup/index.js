import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Dimensions,
	Image,
	ScrollView,
} from "react-native";
// import logo from "../../../../assets/secondLogo.png";
import logo from "../../../../assets/mainLogo.png";

import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;

export default function UserSignup(props) {
	return (
		<ScrollView>
			<View style={styles.main}>
				<View style={[styles.center, { paddingTop: 34 }]}>
					<Image source={logo} style={styles.logoImage} />
				</View>
				<View>
					<Text style={styles.description}>User</Text>
					<Text style={styles.heading}>Sign up</Text>
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
				<View style={[styles.rowing, { paddingBottom: 47 }]}>
					<Feather name="at-sign" size={24} style={{ color: "#fff" }} />
					<TextInput
						placeholder="phoebuffly@gmail.com"
						style={styles.input}
						placeholderTextColor="#fff"
					/>
				</View>
				<View style={[styles.rowing, { paddingBottom: 47 }]}>
					<AntDesign name="user" size={24} color="white" />
					<TextInput
						placeholder="Full name"
						style={styles.input}
						secureTextEntry={true}
						placeholderTextColor="#fff"
					/>
				</View>
				<View style={[styles.rowing, { paddingBottom: 47 }]}>
					<FontAwesome name="phone" size={24} color="white" />
					<TextInput
						placeholder="Mobile no."
						style={styles.input}
						secureTextEntry={true}
						placeholderTextColor="#fff"
					/>
				</View>
				<View style={[styles.center, { paddingBottom: 45 }]}>
					<TouchableOpacity style={styles.inputButton}>
						<Text style={styles.inputText}>Continue</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					style={styles.bottomFixed}
					onPress={() => {
						props.navigation.navigate("UserLogin");
					}}
				>
					<Text style={styles.normalText}>
						Joined us before? <Text style={styles.blueText}> Login</Text>
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
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
		borderRadius: 10,
		backgroundColor: "#fff",
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
		backgroundColor: "#252525",
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
		paddingLeft: 8,
		paddingRight: 14,
		backgroundColor: "#fff",
		borderRadius: 7,
	},
});
