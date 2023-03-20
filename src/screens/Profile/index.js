import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
	// TextInput,
	Dimensions,
} from "react-native";
import React from "react";
import { TextInput, RadioButton } from "react-native-paper";
import usrImg from "../../../assets/userimg.png";
import {
	// AntDesign,
	// Foundation,
	Feather,
	// FontAwesome5,
	Octicons,
	Ionicons,
} from "@expo/vector-icons";
// import imgOne from "../../../assets/vectorImg.png";
// import imgTwo from "../../../assets/carbonstarreview.png";
import { Picker } from "@react-native-picker/picker";

const screenWidth = Dimensions.get("screen").width;
export default function Profile(props) {
	const [value, setValue] = React.useState("Male");
	const [selectedLanguage, setSelectedLanguage] = React.useState("English");
	const languages = [
		"English",
		"French",
		"German",
		"Portuguese",
		"Arabic",
		"Dari",
		"Farsi",
		"Hebrew",
		"Kurdish",
		"Pashtu",
		"Punjabi",
		"Urdu",
	];
	return (
		<View style={styles.main}>
			<View style={[styles.topHeader, styles.rowing]}>
				<Ionicons
					name="caret-back"
					size={27}
					color="#fff"
					onPress={() => {
						props.navigation.goBack();
					}}
				/>
				<View>
					<Text style={[styles.whiteText, { textTransform: "uppercase" }]}>
						Profile
					</Text>
				</View>
				<View style={styles.rowing}>
					<Feather name="bell" size={24} color="#fff" />
					<Octicons
						name="three-bars"
						size={24}
						color="#fff"
						style={{ marginLeft: 15 }}
					/>
				</View>
			</View>
			<View style={[styles.userView, styles.rowing]}>
				<Image source={usrImg} style={styles.userImg} />
				<View style={styles.column}>
					<Text style={styles.userTitle}>Phoebe Buffay</Text>
					<Text style={[styles.subTitle, { marginTop: -5 }]}>
						@phoebebuffay
					</Text>
				</View>
				<View />
				{/* <AntDesign name="right" size={20} color="#000000" /> */}
			</View>
			<ScrollView
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingTop: 20,
					borderTopWidth: 1,
					borderTopColor: "rgba(0, 0, 0, 0.25)",
				}}
			>
				<View style={[styles.rowing, { paddingBottom: 10 }]}>
					<View style={styles.colStart}>
						{/* <Text style={styles.label}>First Name</Text> */}
						<TextInput
							label="First Name"
							placeholder="First Name"
							style={styles.smallInput}
							mode="outlined"
						/>
					</View>
					<View style={styles.colStart}>
						{/* <Text style={styles.label}>Last Name</Text> */}
						<TextInput
							label="Last Name"
							placeholder="Last Name"
							style={styles.smallInput}
							mode="outlined"
						/>
					</View>
				</View>
				<View style={[styles.colStart, { paddingBottom: 10 }]}>
					{/* <Text style={styles.label}>Email</Text> */}
					<TextInput
						label="Email"
						placeholder="phoebebuffay@gmail.com"
						style={styles.largeInput}
						mode="outlined"
					/>
				</View>
				<View style={[styles.colStart, { paddingBottom: 10 }]}>
					{/* <Text style={styles.label}>Email</Text> */}
					<TextInput
						label="Password"
						placeholder="******"
						style={styles.largeInput}
						secureTextEntry={true}
						mode="outlined"
					/>
				</View>
				<View style={[styles.colStart, { paddingBottom: 10 }]}>
					<Text style={styles.Biglabel}>Gender</Text>
					<RadioButton.Group
						onValueChange={(newValue) => setValue(newValue)}
						value={value}
					>
						<View style={[styles.rowStart, { width: screenWidth / 1.2 }]}>
							<View style={[styles.rowStart, { marginRight: 50 }]}>
								<RadioButton value="Male" />
								<Text style={styles.label}>Male</Text>
							</View>
							<View style={[styles.rowStart]}>
								<RadioButton value="Female" />
								<Text style={styles.label}>Female</Text>
							</View>
						</View>
					</RadioButton.Group>
				</View>
				<View style={[styles.colStart, { paddingBottom: 10 }]}>
					<Text style={styles.Biglabel}>Language</Text>
					<Picker
						selectedValue={selectedLanguage}
						onValueChange={(itemValue, itemIndex) =>
							setSelectedLanguage(itemValue)
						}
						style={{
							backgroundColor: "#f4f4f4",
							width: screenWidth / 1.1,
							borderWidth: 1,
							borderColor: "#bababa",
						}}
					>
						{languages.map((item) => (
							<Picker.Item label={item} value={item} />
						))}
					</Picker>
				</View>
				<View style={[styles.colStart, { paddingBottom: 10 }]}>
					{/* <Text style={styles.label}>Email</Text> */}
					<TextInput
						label="Phone #"
						placeholder="+012345678"
						style={styles.largeInput}
						secureTextEntry={true}
						mode="outlined"
					/>
				</View>
				<View style={[styles.colStart, { paddingBottom: 10 }]}>
					{/* <Text style={styles.label}>Email</Text> */}
					<TextInput
						label="Address"
						placeholder="House# 12,Street# 21, Block Area"
						style={styles.largeInput}
						secureTextEntry={true}
						mode="outlined"
					/>
				</View>
				<TouchableOpacity style={[styles.button, styles.central]}>
					<Text style={styles.buttonText}>Save</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	central: {
		alignItems: "center",
		justifyContent: "center",
	},
	main: {
		backgroundColor: "#fff",
	},
	rowStart: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	smallInput: {
		// borderWidth: 1,
		// borderColor: "#222",
		borderRadius: 6,
		height: 50,
		paddingLeft: 7,
		width: screenWidth / 2.25,
	},
	largeInput: {
		// borderWidth: 1,
		// borderColor: "#222",
		borderRadius: 6,
		height: 50,
		paddingLeft: 7,
		width: screenWidth / 1.1,
	},
	Biglabel: {
		fontSize: 14.5,
		fontWeight: "600",
		color: "#222222",
		textTransform: "uppercase",
	},
	label: {
		fontSize: 12,
		fontWeight: "600",
		color: "#222222",
		textTransform: "uppercase",
	},
	colStart: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexDirection: "column",
	},
	topHeader: {
		backgroundColor: "#006d86",
		paddingHorizontal: 16,
		// paddingBottom: 18,
		paddingTop: 30,
		borderBottomLeftRadius: 24,
		borderBottomEndRadius: 24,
		height: 120,
	},
	whiteText: {
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold",
	},
	button: {
		backgroundColor: "#006d86",
		height: 68,
		paddingLeft: 19,
		paddingRight: 31,
		borderRadius: 9,
		marginVertical: 6,
	},
	buttonText: {
		fontSize: 19,
		letterSpacing: 1,
		fontWeight: "700",
		color: "#fff",
	},
	smallIcon: { width: 23, height: 25, resizeMode: "contain" },
	statTitle: {
		fontWeight: "700",
		fontSize: 14,
		textAlign: "center",
		color: "rgba(0, 0, 0, 0.75)",
	},
	statDesc: {
		// fontStyle: "normal",
		fontWeight: "400",
		fontSize: 13,
		lineHeight: 16,
		textAlign: "center",
		color: "#1ADEF4",
	},
	statsView: {
		paddingTop: 9,
		paddingBottom: 12,
		borderTopWidth: 1,
		borderColor: "1px solid rgba(0, 0, 0, 0.25)",
		borderBottomWidth: 1,
	},
	subTitle: {
		fontSize: 13,
		fontWeight: "400",
		color: "#006d86",
	},
	userTitle: {
		fontSize: 22,
		fontWeight: "700",
		color: "#000000",
	},
	column: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	},
	rowing: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	rowingEven: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	userView: {
		paddingVertical: 25,
		paddingLeft: 35,
		paddingRight: 30,
	},
	userImg: {
		width: 77,
		height: 77,
		borderRadius: 77 / 2,
		borderWidth: 2,
		borderColor: "#1ADEF4",
	},
});
