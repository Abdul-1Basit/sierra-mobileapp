import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from "react-native";
import usrImg from "../../../assets/userimg.png";
import {
	AntDesign,
	Foundation,
	Feather,
	FontAwesome5,
	Octicons,
} from "@expo/vector-icons";
import imgOne from "../../../assets/vectorImg.png";
import imgTwo from "../../../assets/carbonstarreview.png";

export default function Settings(props) {
	return (
		<View style={styles.main}>
			<View style={[styles.topHeader, styles.rowing]}>
				<View />
				<View>
					<Text style={[styles.whiteText, { textTransform: "uppercase" }]}>
						Settings
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
				<AntDesign
					name="right"
					size={20}
					color="#006d86"
					onPress={() => {
						props.navigation.navigate("Profile");
					}}
				/>
			</View>
			<View style={[styles.statsView, styles.rowingEven]}>
				<View style={styles.column}>
					<Image source={imgOne} style={styles.smallIcon} />
					<Text style={styles.statTitle}>Bookings</Text>
					<Text style={styles.statDesc}>20</Text>
				</View>
				<View style={styles.column}>
					<Image source={imgTwo} style={styles.smallIcon} />
					<Text style={styles.statTitle}>Reviews</Text>
					<Text style={styles.statDesc}>20</Text>
				</View>
				<View style={styles.column}>
					{/* <Image source={imgOne} style={styles.smallIcon} /> */}
					<Foundation
						name="heart"
						size={24}
						color="#1ADEF4"
						// style={styles.smallIcon}
					/>
					<Text style={styles.statTitle}>Favorites</Text>
					<Text style={styles.statDesc}>50</Text>
				</View>
			</View>
			<View>
				<ScrollView
					contentContainerStyle={{
						paddingHorizontal: 16,
						paddingTop: 20,
						paddingBottom: 550,
						// height: "100%",
					}}
				>
					<View style={{ paddingBottom: 200, height: "100%" }}>
						<TouchableOpacity
							style={[styles.button, styles.rowing]}
							onPress={() => {
								props.navigation.navigate("Profile");
							}}
						>
							<Text style={styles.buttonText}>Manage your account</Text>
							<AntDesign
								name="right"
								size={20}
								// color="#ffffff"
								style={{ color: "#fff" }}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.rowing]}>
							<Text style={styles.buttonText}>Rewards & Wallet</Text>
							<AntDesign
								name="right"
								size={20}
								// color="#fff""
								style={{ color: "#fff" }}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.rowing]}>
							<Text style={styles.buttonText}>Gift cards</Text>
							<AntDesign
								name="right"
								size={20}
								// color="#fff""
								style={{ color: "#fff" }}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.rowing]}>
							<Text style={styles.buttonText}>Contact us</Text>
							<AntDesign
								name="right"
								size={20}
								// color="#fff""
								style={{ color: "#fff" }}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.rowing]}>
							<Text style={styles.buttonText}>Settings</Text>
							<AntDesign
								name="right"
								size={20}
								// color="#fff""
								style={{ color: "#fff" }}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={[styles.button, styles.rowing]}>
							<Text style={[styles.buttonText, { color: "#fff" }]}>
								Sign out
							</Text>
							<AntDesign
								name="right"
								size={20}
								// color="#fff""
								style={{ color: "#fff" }}
							/>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		paddingBottom: 100,
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
		fontSize: 17,
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
		color: "#000000",
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
		color: "#1ADEF4",
	},
	userTitle: {
		fontSize: 22,
		fontWeight: "700",
		color: "#006d86",
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
