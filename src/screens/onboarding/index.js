import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Image,
} from "react-native";
import applogo from "../../../assets/UntitledDesign.png";
import splashscreenImg from "../../../assets/splashScreen.png";
// import newimg from "../../../assets/hotel.jpg";

const screenWidth = Dimensions.get("screen").width;

const screenHeight = Dimensions.get("screen").height;
export default function Onboarding(props) {
	return (
		<View style={styles.centeral}>
			<View>
				<Image source={splashscreenImg} style={styles.splashImg} />
			</View>
			<View>
				<Text style={styles.heading}>Let’s Explore the Beauty</Text>
			</View>
			<View>
				<Text style={styles.subHeading}>Get Special offers and news</Text>
			</View>
			<View style={styles.bottomFixed}>
				<TouchableOpacity
					style={styles.getStartedButton}
					onPress={() => {
						props.navigation.navigate("Login");
					}}
				>
					<Text style={styles.getStartedText}>Let's get started!</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	centeral: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		backgroundColor: "#006d86",
		height: screenHeight,
	},
	getStartedText: {
		color: "#006d86",
		fontSize: 23,
	},
	splashImg: {
		resizeMode: "contain",
		height: 391,
	},
	heading: {
		fontSize: 35,
		fontWeight: "700",
		color: "#fff",
		textAlign: "center",
	},
	main: {},
	subHeading: {
		fontSize: 20,
		color: "#fff",
		textAlign: "center",
	},
	getStartedButton: {
		height: 60,
		width: screenWidth - 116,
		backgroundColor: "#fff",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,
		elevation: 2,
	},
	bottomFixed: {
		position: "absolute",
		bottom: 70,
		right: 0,
		left: 0,
		alignItems: "center",
		justifyContent: "center",
	},
});
