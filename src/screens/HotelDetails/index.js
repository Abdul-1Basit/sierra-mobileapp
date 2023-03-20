import React from "react";
import {
	View,
	Text,
	ImageBackground,
	Dimensions,
	StyleSheet,
	ScrollView,
	Image,
	FlatList,
	TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import img from "../../../assets/room.jpg";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import gropimg from "./../../../assets/grop.png";
import {
	Ionicons,
	AntDesign,
	FontAwesome,
	MaterialIcons,
	Feather,
	FontAwesome5,
} from "@expo/vector-icons";
import { UserContext } from "../../AppContext";
// import RNDateTimePicker from "@react-native-community/datetimepicker";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export default function HotelDetails(props) {
	const { itemId } = props.route.params;
	const [userData, setUserData] = React.useContext(UserContext);
	const [checkinTime, setCheckinTime] = React.useState("Pick-Time");
	const [checkoutTime, setCheckoutTime] = React.useState("Pick-Time");
	const [isCiVisible, setIsCiVisible] = React.useState(false);
	const [isCoVisible, setIsCoVisible] = React.useState(false);
	const renderItem = ({ item }) => {
		return (
			<View style={[styles.borderedBox, styles.columncenter]}>
				<TouchableOpacity style={styles.capsuleButton}>
					<Text style={styles.capsuleText}>
						{item.price}/{item.type.toString().toUpperCase()}
					</Text>
				</TouchableOpacity>
				<View style={styles.subHeadingView}>
					<Text style={styles.cardSubHeading}>{item.title}</Text>
				</View>
				<View style={styles.cardDescriptionView}>
					<Text style={styles.descriptioncrdd}>{item.description}</Text>
				</View>
			</View>
		);
	};
	// {
	// 	id: 0,
	// 	img: "https://firebasestorage.googleapis.com/v0/b/sierralodgingsystem.appspot.com/o/beachOne.jpg?alt=media&token=2c7f283d-474d-4b27-8542-9a041d2a07ec",
	// 	title: "French Hotel",
	// 	location: "New York",
	// 	rating: 5,
	// 	reviews: 8.5,
	// 	rate: 200,
	// 	description:
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
	// 	reviewed: [
	// 		{
	// 			by: 23,
	// 			text: "Best Hotel!",
	// 			rating: 3.6,
	// 		},
	// 	],
	// 	guestLimit: 2,
	// 	bedrooms: 1,
	// 	baths: 1,
	// 	aminities: ["Parking", "Bath", "Bar", "Gym", "Wifi"],
	// 	offerDeals: [
	// 		{
	// 			price: 100,
	// 			type: "Day",
	// 			title: "Your spring with us",
	// 			description: "Offering full spring. From 1st Feb to 20th March.",
	// 		},
	// 	],
	// 	checkinTime: "11 Am",
	// 	checkoutTime: "11 Pm",
	// },
	const returnIcon = (itm) => {
		if (itm === "Parking")
			return <MaterialIcons name="local-parking" size={24} color="#fff" />;
		else if (itm === "Bath")
			return <FontAwesome name="bathtub" size={24} color="#fff" />;
		else if (itm === "Bar")
			return <MaterialIcons name="local-bar" size={24} color="#fff" />;
		else if (itm === "Gym")
			return <FontAwesome5 name="dumbbell" size={24} color="#fff" />;
		else if (itm === "Wifi")
			return <Feather name="wifi" size={24} color="#fff" />;
	};
	return (
		<ScrollView>
			<ImageBackground
				source={{ uri: userData.allHotels[itemId].img }}
				style={{ width: screenWidth, height: 400 }}
			>
				<TouchableOpacity
					style={styles.topButton}
					onPress={() => props.navigation.goBack()}
				>
					<Ionicons name="caret-back" size={25} color="#006d86" />
				</TouchableOpacity>
			</ImageBackground>
			<View style={styles.bottomView}>
				<View style={styles.rowing}>
					<View style={styles.column}>
						<Text style={styles.heading}>
							{userData.allHotels[itemId].title}
						</Text>
						<Text style={styles.subHeading}>
							{userData.allHotels[itemId].guestLimit} Guests •{" "}
							{userData.allHotels[itemId].bedrooms} Bedrooms •{" "}
							{userData.allHotels[itemId].baths} Bath
						</Text>
					</View>
					<View style={styles.column}>
						<Text style={styles.heading}>
							$ {userData.allHotels[itemId].rate}
						</Text>
						<Text style={styles.subHeading}>Per Night</Text>
					</View>
				</View>
				<View style={styles.description}>
					<Text style={styles.description}>
						{userData.allHotels[itemId].description}
					</Text>
				</View>
				<View
					style={[
						styles.rowStart,
						{ marginTop: 15, marginLeft: 20, marginBottom: 20 },
					]}
				>
					<AntDesign
						name="star"
						size={24}
						color="#FFDF00"
						style={{ marginRight: 5 }}
					/>
					<AntDesign
						name="star"
						size={24}
						color="#FFDF00"
						style={{ marginRight: 5 }}
					/>
					<AntDesign
						name="star"
						size={24}
						color="#FFDF00"
						style={{ marginRight: 5 }}
					/>
					<AntDesign
						name="star"
						size={24}
						color="#FFDF00"
						style={{ marginRight: 5 }}
					/>
				</View>
				<View style={[styles.rowing, { marginLeft: 20 }]}>
					<Text style={styles.reviewText}>
						{userData.allHotels[itemId].reviewed.length} Reviews
					</Text>
					<Image source={gropimg} style={styles.grpImg} />
				</View>
				<View style={[styles.rowStart, { marginTop: 10, marginBottom: 5 }]}>
					<Text style={styles.newheading}>Amenities</Text>
				</View>
				<View style={styles.rowing}>
					{userData.allHotels[itemId].aminities.map((item, index) => (
						<View style={styles.columncenter} key={index}>
							<View style={styles.box}>{returnIcon(item)}</View>
							<Text style={styles.aminityText}>{item}</Text>
						</View>
					))}
					{/* <View style={styles.columncenter}>
						<View style={styles.box}>
							<MaterialIcons name="local-parking" size={24} color="#fff" />
						</View>
						<Text style={styles.aminityText}>Parking</Text>
					</View>
					<View style={styles.columncenter}>
						<View style={styles.box}>
							<FontAwesome name="bathtub" size={24} color="#fff" />
						</View>
						<Text style={styles.aminityText}>Bath</Text>
					</View>
					<View style={styles.columncenter}>
						<View style={styles.box}>
							<MaterialIcons name="local-bar" size={24} color="#fff" />
						</View>
						<Text style={styles.aminityText}>Bar</Text>
					</View>
					<View style={styles.columncenter}>
						<View style={styles.box}>
							<FontAwesome5 name="dumbbell" size={24} color="#fff" />
						</View>
						<Text style={styles.aminityText}>Gym</Text>
					</View>
					<View style={styles.columncenter}>
						<View style={styles.box}>
							<Feather name="wifi" size={24} color="#fff" />
						</View>
						<Text style={styles.aminityText}>Wifi</Text>
					</View> */}
				</View>
				<View>
					<View
						style={{
							width: screenWidth / 1.1,
							alignSelf: "center",
							marginTop: 15,
							height: 170,
							backgroundColor: "#fff",
						}}
					>
						<MapView
							style={styles.map}
							initialRegion={{
								latitude: 37.78825,
								longitude: -122.4324,
								latitudeDelta: 0.0922,
								longitudeDelta: 0.0421,
							}}
						>
							{/* <Marker
								coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
								pinColor={"#006d86"} // any color
								title={"newTitle"}
								description={"new description"}
							/> */}
						</MapView>
					</View>
				</View>
				<View style={[styles.rowStart, { marginTop: 20, marginBottom: 5 }]}>
					<Text style={styles.newheading}>Offer & Deals</Text>
				</View>
				<View>
					<FlatList
						data={userData.allHotels[itemId].offerDeals}
						renderItem={renderItem}
						horizontal
						scrollEnabled
					/>
				</View>
				<View style={[styles.rowStart, { marginTop: 20, marginBottom: 5 }]}>
					<Text style={styles.newheading}>Property Policies</Text>
				</View>
				<View style={styles.checkinView}>
					<View style={styles.columncenter}>
						<Text style={styles.checkingText}>Check-in</Text>
						<TouchableOpacity
							onPress={() => setIsCiVisible(true)}
							style={{
								width: checkinTime.toString() !== "Pick-Time" ? 150 : 150,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text style={styles.time}>
								{/* {userData.allHotels[itemId].checkinTime} */}
								{/* <RNDateTimePicker
								value={new Date()}
								onChange={(e) => {
									setCheckinTime(e);
								}}
							/> */}
								{checkinTime.toString()}
								<DateTimePickerModal
									isVisible={isCiVisible}
									mode="date"
									onConfirm={(time) => {
										setIsCiVisible(false);
										setCheckinTime(time);
									}}
									onCancel={() => setIsCiVisible(false)}
								/>
							</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.columncenter}>
						<Text style={styles.checkingText}>Check-out</Text>
						<TouchableOpacity
							onPress={() => setIsCoVisible(true)}
							style={{
								width: checkoutTime.toString() !== "Pick-Time" ? 150 : 150,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Text style={styles.time}>
								{checkoutTime.toString()}
								<DateTimePickerModal
									isVisible={isCoVisible}
									mode="date"
									onConfirm={(time) => {
										setIsCoVisible(false);
										setCheckoutTime(time);
									}}
									onCancel={() => setIsCoVisible(false)}
								/>
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={[styles.rowingEven, { marginTop: 30, marginBottom: 10 }]}>
					<View style={styles.columncenter}>
						<Text style={styles.btnBlackText}>
							${userData.allHotels[itemId].rate}
						</Text>
						<Text style={styles.btnGreyText}>for 1 room/1 Night</Text>
					</View>
					<TouchableOpacity
						style={[styles.columncenter, styles.paymentBtn]}
						onPress={() => {
							let temp = userData.currentitem;
							temp.checkinTime = checkinTime;
							temp.checkoutTime = checkoutTime;
							setUserData({
								...userData,
								currentitem: temp,
							});

							props.navigation.navigate("Payments", {
								hotelId: itemId,
							});
						}}
					>
						<Text style={styles.btnWhiteText}>Proceed to payment</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	map: {
		width: "100%",
		height: "100%",
	},
	rowingEven: {
		alignItems: "center",
		justifyContent: "space-evenly",
		flexDirection: "row",
	},
	paymentBtn: {
		height: 70,
		borderRadius: 8,
		width: 180,
		paddingHorizontal: 15,
		backgroundColor: "#006d86",
		alignItems: "center",
		justifyContent: "center",
	},
	btnBlackText: {
		fontSize: 17,
		color: "black",
	},
	btnWhiteText: {
		textAlign: "center",
		fontSize: 17,
		color: "#fff",
	},
	btnGreyText: {
		fontSize: 14,
		color: "#67686D",
	},
	time: {
		fontSize: 17,
		color: "black",
	},
	checkingText: {
		color: "#67686D",
		fontSize: 16,
	},
	checkinView: {
		borderTopColor: "1px solid rgba(0, 0, 0, 0.25)",
		borderBottomColor: "1px solid rgba(0, 0, 0, 0.25)",
		borderTopWidth: 1,
		borderBottomWidth: 1,
		paddingVertical: 10,
		alignItems: "center",
		justifyContent: "space-between",
		flexDirection: "row",
		paddingHorizontal: 30,
	},
	cardDescriptionView: {
		paddingHorizontal: 10,
	},
	descriptioncrdd: {
		fontSize: 14.5,
		color: "#000000",
		textAlign: "center",
	},
	subHeadingView: {
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 10,
	},
	cardSubHeading: {
		fontSize: 16,
		color: "#67686D",
	},
	capsuleButton: {
		height: 30,
		width: 170,
		borderRadius: 18,
		backgroundColor: "#006d86",
		alignItems: "center",
		justifyContent: "center",
	},
	capsuleText: {
		fontSize: 12,
		color: "#fff",
	},
	borderedBox: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "#67686D",
		width: 220,
		marginRight: 20,
		paddingVertical: 15,
	},
	aminityText: {
		color: "#67686D",
		fontSize: 12,
		letterSpacing: 0,
	},
	box: {
		height: 50,
		width: 50,
		borderRadius: 8,
		backgroundColor: "#006d86",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 15,
		marginTop: 10,
	},
	grpImg: {
		resizeMode: "contain",
	},
	reviewText: {
		fontSize: 16,
		color: "#67686D",
	},
	rowStart: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	description: {
		fontSize: 14,
		color: "#000000",
		paddingTop: 15,
		paddingHorizontal: 10,
	},
	heading: {
		fontSize: 20,
		color: "#006d86",
	},
	newheading: {
		fontSize: 19,
		color: "#006d86",
	},
	subHeading: {
		fontSize: 14,
		color: "#67686D",
	},
	column: {
		flexDirection: "column",
		alignItems: "flex-start",
		justifyContent: "space-between",
	},
	columncenter: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
	},
	rowing: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	bottomView: {
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
		backgroundColor: "#fff",
		marginTop: -20,
		padding: 20,
	},
	topButton: {
		marginTop: 50,
		marginLeft: 20,
		width: 45,
		height: 45,
		backgroundColor: "#fff",
		borderRadius: 45 / 2,
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
});
