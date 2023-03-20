import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	FlatList,
	Dimensions,
	ScrollView,
	// Modal,
} from "react-native";
import {
	Feather,
	FontAwesome,
	Ionicons,
	FontAwesome5,
	MaterialIcons,
	Entypo,
} from "@expo/vector-icons";
import { Switch } from "react-native-paper";
import imgLogo from "../../../assets/userimg.png";
import Modal from "react-native-modal";
import FilterModal from "../Modals/FilterModal";
import { UserContext } from "../../AppContext";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export default function Payments(props) {
	const { hotelId } = props.route.params;
	const [userData, setUserData] = React.useContext(UserContext);

	const [activeTab, setActiveTab] = React.useState(1);
	const [username, setUsername] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [phoneNumber, setPhoneNumber] = React.useState("");
	const [firstName, setFirstName] = React.useState("");
	const [lastName, setLastName] = React.useState("");
	const [price, setPrice] = React.useState(200);
	const [isSwitchOn, setIsSwitchOn] = React.useState(false);
	const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

	return (
		<ScrollView>
			{activeTab === 4 ? (
				<View style={{ marginTop: 400 }}>
					<Modal
						// animationType="slide"
						// transparent={false}
						isVisible={activeTab === 4}
						// onRequestClose={() => {
						// 	setActiveTab(3);
						// }}

						style={styles.modalBackground}
					>
						<View style={{ flex: 1 }}>
							<Text
								style={{
									fontSize: 25,
									color: "#fff",
									fontWeight: "bold",
									textAlign: "center",
								}}
							>
								CONGRATULATIONS!
							</Text>
							<Text
								style={{
									color: "#006d86",
									textAlign: "center",
									marginTop: 10,
									marginBottom: 50,
								}}
							>
								Your Booking was successfully completed.
							</Text>
							<TouchableOpacity
								style={styles.closeBtn}
								onPress={() => {
									props.navigation.navigate("Dashboard");
								}}
							>
								<Text style={{ color: "#fff", fontSize: 20 }}>Close</Text>
							</TouchableOpacity>
						</View>
					</Modal>
				</View>
			) : (
				<View style={{ height: screenHeight }}>
					<View style={[styles.topHeader, styles.rowing]}>
						<View>
							<Text style={[styles.whiteText, { textTransform: "uppercase" }]}>
								SIERRA LODGING SYSTEM{" "}
							</Text>

							{/* <Image source={hotellogo} /> */}
						</View>
						<View style={styles.rowing}>
							<Feather name="bell" size={24} color="#fff" />
							<View style={styles.userView}>
								<Image source={imgLogo} style={styles.imgStyling} />
							</View>
						</View>
					</View>
					<View>
						<View style={styles.centeral}>
							<View
								style={[
									styles.rowing,
									{
										paddingHorizontal: 20,
										width: "100%",
										maxWidth: screenWidth - 50,
										marginVertical: 25,
									},
								]}
							>
								<View
									style={[
										styles.tabCircle,
										{ backgroundColor: activeTab >= 1 ? "#006d86" : "#B0B0B0" },
									]}
								>
									<Text style={[styles.tabText, { color: "#fff" }]}>1</Text>
								</View>
								<View
									style={[
										styles.bar,
										{ backgroundColor: activeTab >= 1 ? "#006d86" : "#B0B0B0" },
									]}
								/>
								<View
									style={[
										styles.tabCircle,
										{ backgroundColor: activeTab >= 2 ? "#006d86" : "#B0B0B0" },
									]}
								>
									<Text style={[styles.tabText, { color: "#fff" }]}>2</Text>
								</View>
								<View
									style={[
										styles.bar,
										{ backgroundColor: activeTab >= 2 ? "#006d86" : "#B0B0B0" },
									]}
								/>
								<View
									style={[
										styles.tabCircle,
										{ backgroundColor: activeTab >= 3 ? "#006d86" : "#B0B0B0" },
									]}
								>
									<Text style={[styles.tabText, { color: "#fff" }]}>3</Text>
								</View>
							</View>
						</View>
						{activeTab === 1 && (
							<View style={styles.container}>
								<View>
									<View style={styles.subHeading}>
										<Text style={styles.label}>Contact Information</Text>
									</View>
									<TextInput
										style={styles.inputStyling}
										placeholder="Enter name"
										defaultValue={username}
										onChangeText={setUsername}
									/>
									<TextInput
										style={styles.inputStyling}
										placeholder="Enter email"
										defaultValue={email}
										onChangeText={setEmail}
									/>
								</View>
								<View style={styles.rowing}>
									<TextInput style={styles.smallInput} />
									<TextInput
										style={styles.mediumInput}
										placeholder="Enter Phone #"
										defaultValue={phoneNumber}
										onChangeText={setPhoneNumber}
									/>
								</View>
								<View style={styles.marginTop30}>
									<View style={styles.subHeading}>
										<Text style={styles.label}>Guest Name</Text>
									</View>
									<TextInput
										style={styles.inputStyling}
										placeholder="Enter First Name"
										defaultValue={firstName}
										onChangeText={setFirstName}
									/>
									<TextInput
										style={styles.inputStyling}
										placeholder="Enter Last Name"
										defaultValue={lastName}
										onChangeText={setLastName}
									/>
								</View>
								<View style={styles.rowing}>
									<Text style={styles.saveInfoText}>
										Save this info for later?
									</Text>
									<Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
								</View>
							</View>
						)}
						{activeTab === 2 && (
							<SecondTab
								item={userData.allHotels[hotelId]}
								currentitem={userData.currentitem}
							/>
						)}
						{activeTab !== 3 && (
							<View style={[styles.rowing, styles.fixedBottom]}>
								<View style={[styles.columnn, styles.leftBtn]}>
									<Text style={styles.priceText}>
										${userData.allHotels[hotelId].rate}
									</Text>
									<Text>includes Tax & Charges</Text>
								</View>
								<View>
									<TouchableOpacity
										style={styles.nextBtn}
										onPress={() => {
											if (activeTab !== 3) {
												setActiveTab(activeTab + 1);
											}
										}}
									>
										<Text style={styles.btnText}>Next</Text>
									</TouchableOpacity>
								</View>
							</View>
						)}
						{activeTab === 3 && <ThirdTab setActiveTab={setActiveTab} />}
					</View>
				</View>
			)}
		</ScrollView>
	);
}
const SecondTab = (props) => {
	return (
		<View style={styles.container}>
			<View style={styles.rowing}>
				<View style={[styles.colStart, { width: 150 }]}>
					<Text style={styles.smallGrey}>Check-in</Text>
					{/* <Text style={styles.blackBold}>Fri, 01 Apr 2022</Text> */}
					<Text style={styles.lightBlack}>
						{props.currentitem.checkinTime.toString()}12PM
					</Text>
				</View>
				<View style={styles.widthBar} />
				<View>
					<Text style={styles.smallGrey}>1 Night</Text>
				</View>
				<View style={styles.widthBar} />
				<View style={[styles.colStart, { width: 150 }]}>
					<Text style={styles.smallGrey}>Check-out</Text>
					{/* <Text style={styles.blackBold}>Sat, 02 Apr 2022</Text> */}
					<Text style={styles.lightBlack}>
						{props.currentitem.checkoutTime.toString()}12PM
					</Text>
				</View>
			</View>
			<View style={[styles.rowStart, { marginTop: 15 }]}>
				<Text style={styles.blackBold}>Price Summary</Text>
			</View>
			<View style={styles.bigBar} />
			<View style={styles.rowing}>
				<Text style={styles.smallGrey}>Room Charges</Text>
				<Text>${props.item.rate}</Text>
			</View>
			<View style={[styles.rowing, { marginVertical: 5 }]}>
				<Text style={styles.smallGrey}>Total Discounts</Text>
				<Text style={styles.blueText}>$0</Text>
			</View>
			<View style={styles.rowing}>
				<Text
					style={[styles.blackBold, { fontSize: 13, fontWeight: "normal" }]}
				>
					Price After Discounts
				</Text>
				<Text>$200</Text>
			</View>
			<View style={styles.rowing}>
				<Text
					style={[
						styles.blackBold,
						{ fontSize: 13, fontWeight: "normal", paddingLeft: 10 },
					]}
				>
					Taxes & Fees
				</Text>
				<Text>$15</Text>
			</View>
			<View style={[styles.rowing, { marginTop: 10 }]}>
				<Text style={[styles.blackBold]}>Payable Amount</Text>
				<Text>$215</Text>
			</View>
			<View style={styles.bigBar} />
			<View style={{}}>
				<Text style={{ fontSize: 22, color: "#000000", fontWeight: "normal" }}>
					Offers & Deals
				</Text>
				<View style={styles.centeral}>
					<View style={styles.smallCard}>
						<Text>No Offers available currently</Text>
					</View>
				</View>
			</View>
			<View style={[styles.couponView, styles.rowing]}>
				<Text style={styles.prmoCodeText}>Have a Promo code?</Text>
				<TextInput style={styles.promoInput} />
				<TouchableOpacity style={styles.applyBtn}>
					<Text style={styles.applText}>Apply</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const ThirdTab = (props) => {
	const [activePaymentMethod, setActivePaymentMethod] = React.useState(0);
	return (
		<View style={styles.container}>
			<View style={styles.rowStart}>
				<Text style={styles.blackBold}>Select your Payment method</Text>
			</View>
			<View
				style={[
					styles.rowing,
					{
						// paddingHorizontal: 30,
						paddingVertical: 10,
						width: 250,
					},
				]}
			>
				<TouchableOpacity
					style={[
						styles.paymentMethodOption,
						{ backgroundColor: activePaymentMethod === 0 ? "#006d86" : "#fff" },
					]}
					onPress={() => {
						setActivePaymentMethod(0);
					}}
				>
					<FontAwesome5
						name="stripe"
						size={24}
						color={activePaymentMethod === 0 ? "#fff" : "black"}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.paymentMethodOption,
						{ backgroundColor: activePaymentMethod === 1 ? "#006d86" : "#fff" },
					]}
					onPress={() => {
						setActivePaymentMethod(1);
					}}
				>
					<Entypo
						name="paypal"
						size={24}
						color={activePaymentMethod === 1 ? "#fff" : "black"}
					/>
				</TouchableOpacity>
			</View>
			{activePaymentMethod === 0 && (
				<View>
					<View style={[styles.colStart, { paddingBottom: 10 }]}>
						<Text>Card Number</Text>
						<TextInput style={styles.cardNumberInput} />
					</View>
					<View style={[styles.colStart, { paddingBottom: 10 }]}>
						<Text>CVV</Text>
						<TextInput style={styles.cardNumberInput} />
					</View>
					<View style={[styles.colStart, { paddingBottom: 10 }]}>
						<Text>Expiration Date</Text>
						<TextInput style={styles.cardNumberInput} />
					</View>
				</View>
			)}
			{activePaymentMethod === 1 && (
				<View style={styles.marginTop30}>
					<View style={styles.colStart}>
						<Text>Email</Text>
						<TextInput style={styles.cardNumberInput} />
					</View>
				</View>
			)}
			<View style={[styles.rowing, { marginTop: 40 }]}>
				<TouchableOpacity
					style={styles.cancelBtn}
					onPress={() => props.setActiveTab(2)}
				>
					<Text style={{ color: "#000000", fontSize: 15 }}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.payButton}
					onPress={() => props.setActiveTab(4)}
				>
					<Text style={{ color: "#fff", fontSize: 15 }}>Pay</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	closeBtn: {
		height: 60,
		backgroundColor: "#006d86",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 6,
		width: screenWidth / 1.5,
	},
	modalBackground: {
		marginTop: 100,
		paddingTop: 200,
		width: screenWidth / 1.2,
		height: screenHeight / 2,
		// alignSelf: "center",
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "column",
		backgroundColor: "black",
	},
	cancelBtn: {
		height: 40,
		width: screenWidth / 2.3,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#bababa",
		borderRadius: 6,
	},
	payButton: {
		height: 40,
		width: screenWidth / 2.3,
		alignItems: "center",
		justifyContent: "center",
		// borderWidth: 1,
		// borderColor: "#bababa",
		backgroundColor: "#006d86",
		borderRadius: 6,
	},
	cardNumberInput: {
		height: 40,
		width: screenWidth / 1.2,
		paddingLeft: 15,
		backgroundColor: "#E7E7E7",
	},
	paymentMethodOption: {
		width: 80,
		height: 80,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#bababa",
		borderRadius: 6,
	},
	applText: {
		fontSize: 12,
		color: "#fff",
		fontWeight: "normal",
	},
	applyBtn: {
		height: 35,
		width: 65,
		borderRadius: 6,
		backgroundColor: "#006d86",
		alignItems: "center",
		justifyContent: "center",
	},
	prmoCodeText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	promoInput: {
		backgroundColor: "#E7E7E7",
		height: 35,
		width: 100,
		borderRadius: 6,
	},
	couponView: {
		borderWidth: 1,
		borderColor: "#bababa",
		borderRadius: 6,
		padding: 5,
		// width: screenWidth / 1.1
	},
	blueText: {
		color: "#1ADEF4",
	},
	bigBar: {
		width: screenWidth / 1.1,
		height: 1,
		borderRadius: 6,
		backgroundColor: "#000000",
		opacity: 0.5,
		marginVertical: 5,
	},
	widthBar: {
		width: 2,
		height: 50,
		borderRadius: 6,
		backgroundColor: "#000000",
	},
	lightBlack: {
		fontSize: 14.5,
		color: "#000000",
	},
	blackBold: {
		fontSize: 15,
		color: "#000000",
		fontWeight: "bold",
	},
	smallGrey: {
		color: "#67686D",
		fontSize: 13,
		fontWeight: "bold",
	},
	columnn: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
	},
	saveInfoText: {
		color: "rgba(0, 0, 0, 0.75)",
		fontSize: 15,
		fontWeight: "bold",
	},
	priceText: {
		fontSize: 19,
		color: "rgba(0, 0, 0, 0.75)",
		fontWeight: "bold",
	},
	nextBtn: {
		height: 70,
		borderRadius: 8,
		width: screenWidth / 2 - 20,
		paddingHorizontal: 15,
		backgroundColor: "#006d86",
		alignItems: "center",
		justifyContent: "center",
	},
	leftBtn: {
		height: 70,
		borderRadius: 8,
		width: screenWidth / 2 - 20,
		// paddingHorizontal: 15,
		borderColor: "#006d86",
		borderRightColor: 4,
		// borderWidth: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	btnText: {
		fontSize: 17,
		color: "#fff",
		fontWeight: "bold",
	},
	fixedBottom: {
		// position: "absolute",
		// bottom: 60,
		// left: 0,
		// right: 0,
		marginTop: 50,
		alignSelf: "center",
	},
	marginTop30: {
		marginTop: 30,
	},
	subHeading: {
		marginBottom: 10,
		marginTop: 15,
	},
	container: {
		paddingHorizontal: 15,
	},
	bar: {
		height: 5,
		width: 100,
		borderRadius: 6,
	},
	tabCircle: {
		width: 30,
		height: 30,
		borderRadius: 30 / 2,
		alignItems: "center",
		justifyContent: "center",
	},
	tabText: {
		fontSize: 15,
	},
	smallBtn: {
		borderRadius: 6,
		backgroundColor: "#006d86",
		width: 40,
		height: 40,
	},
	flexEnd: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	userView: {
		paddingLeft: 10,
	},
	rate: {
		fontSize: 15.5,
		color: "#006d86",
		fontWeight: "bold",
	},
	bigCard: {
		width: screenWidth / 1.05,
		borderRadius: 12,
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		height: 130,
		marginBottom: 12,
	},
	location: {
		fontSize: 15.5,
		color: "black",
		// fontWeight: "bold",
	},
	vTitle: {
		fontSize: 15,
		color: "#006d86",
		textAlign: "left",
	},
	bigImage: {
		height: 130,
		width: 100,
		borderTopStartRadius: 12,
		borderBottomStartRadius: 12,
		borderTopLeftRadius: 12,
		borderBottomLeftRadius: 12,
		marginRight: 10,
		resizeMode: "cover",
	},
	seeAll: {
		fontSize: 10,
		textDecorationLine: "underline",
		color: "rgba(0, 0, 0, 0.54)",
	},
	heading: {
		fontSize: 15,
		fontWeight: "600",
		color: "rgba(0, 0, 0, 0.75)",
	},
	nearMeView: {
		paddingTop: 10,
	},
	linearImageStyling: {
		width: 112,
		height: 109,
		resizeMode: "contain",
		marginBottom: 10,
	},
	smallCard: {
		height: 130,
		width: 250,
		paddingHorizontal: 20,
		paddingVertical: 30,
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 1,
		// },
		// shadowOpacity: 0.2,
		// shadowRadius: 1.41,
		// elevation: 2,
		borderRadius: 12,
		// marginRight: 12,
		marginBottom: 20,
	},
	ratingImg: {
		width: 30,
		height: 7,
		resizeMode: "contain",
	},
	smallHotelSub: {
		fontSize: 7,
		fontWeight: "500",
		color: "rgba(0, 0, 0, 0.75)",
	},
	smallHotelTitle: {
		color: "rgba(0, 0, 0, 0.75)",
		fontSize: 10,
		fontWeight: "700",
	},
	bottomView: {
		paddingHorizontal: 12,
	},
	lsView: {
		paddingVertical: 23,
	},
	latestText: {
		textAlign: "left",
		color: "rgba(0, 0, 0, 0.75)",
		fontSize: 22,
		fontWeight: "bold",
	},
	searchButton: {
		paddingHorizontal: 30,
		paddingVertical: 12,
		borderRadius: 32,
		backgroundColor: "#006d86",
	},
	centeral: {
		alignItems: "center",
		justifyContent: "center",
	},
	smallInput: {
		width: 80,
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		paddingLeft: 15,
		borderRadius: 13,
		borderWidth: 1.5,
		height: 50,
		borderColor: "#bababa",
	},
	mediumInput: {
		width: screenWidth - 120,
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		paddingLeft: 15,
		borderRadius: 13,
		borderWidth: 1.5,
		borderColor: "#bababa",
		height: 50,
	},
	padTop10: {
		paddingTop: 10,
	},
	textInput: {
		paddingLeft: 10,
		width: screenWidth / 1.5,
	},
	paddingHorizontal20: {
		paddingHorizontal: 20,
	},
	label: {
		color: "rgba(89, 72, 72, 0.77)",
		fontSize: 17,
		textAlign: "left",
	},
	inputStyling: {
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		paddingLeft: 15,
		borderRadius: 13,
		width: screenWidth - 30,

		// width: "100%",
		borderWidth: 1.5,
		borderColor: "#bababa",
		marginBottom: 20,
		height: 50,
	},
	rowStart: {
		alignItems: "center",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	rowTopStart: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexDirection: "row",
	},
	colStart: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexDirection: "column",
	},
	detailsBar: {
		paddingHorizontal: 15,
		paddingTop: 15,
		paddingBottom: 20,
		backgroundColor: "#f4f4f4",
		borderRadius: 16,
	},
	whiteText: {
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold",
	},
	imgStyling: {
		height: 41,
		width: 41,
		resizeMode: "contain",
		borderRadius: 41 / 2,
	},
	topHeader: {
		backgroundColor: "#006d86",
		paddingHorizontal: 16,
		paddingBottom: 18,
		paddingTop: 60,
		borderBottomLeftRadius: 24,
		borderBottomEndRadius: 24,
	},
	rowing: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
