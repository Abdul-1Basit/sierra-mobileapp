import {
	View,
	FlatList,
	Text,
	Image,
	ScrollView,
	Dimensions,
	TouchableOpacity,
	StyleSheet,
	TextInput,
} from "react-native";
import React from "react";
import {
	FontAwesome5,
	Foundation,
	Ionicons,
	AntDesign,
	Feather,
} from "@expo/vector-icons";
import beachOne from "../../../assets/beachOne.jpg";
import imgLogo from "../../../assets/userimg.png";
import beachTwo from "../../../assets/beachTwo.jpg";
import beachThree from "../../../assets/beachThree.jpg";
import { UserContext } from "../../AppContext";
// import { TextInput } from "react-native-paper";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export function History(props) {
	const [userData, setUserData] = React.useContext(UserContext);
	const [textValue, setTextValue] = React.useState("");
	const [index, setIndex] = React.useState(0);
	const [activeList, setActiveList] = React.useState(userData.myActiveHotels);
	const verticalData = [
		{
			id: 0,
			img: beachOne,
			title: "French Hotel",
			location: "New York",
			rating: 5,
			reviews: 8.5,
			rate: 200,
			stayDate: "12th Jan, 2023 - 20th Jan, 2023 ",
			cost: 300,
		},
		{
			id: 1,
			img: beachTwo,
			title: "Maldives Hotel",
			location: "California",
			rating: 5,
			reviews: 8.5,
			rate: 200,
			stayDate: "23rd Jan, 2023  - 26th Jan, 2023 ",
			cost: 100,
		},
		{
			id: 2,
			img: beachThree,
			title: "Barca Hotel",
			location: "Barcelona",
			rating: 5,
			reviews: 8.5,
			rate: 200,
			stayDate: "1st Feb, 2023  - 2nd Feb, 2023 ",
			cost: 400,
		},
	];
	const renderVerticalData = ({ item }) => {
		return (
			<TouchableOpacity
				style={[{ flexDirection: "row" }, styles.bigCard]}
				onPress={() => {
					props.navigation.navigate("HotelDetails");
				}}
			>
				<Image source={{ uri: item.img }} style={styles.bigImage} />
				<View style={{ paddingTop: 20 }}>
					<View style={styles.rowing}>
						<View />
						<Text
							style={{ color: "#000000", fontSize: 11, fontWeight: "bold" }}
						>
							{item.stayDate}
						</Text>
					</View>
					<View style={styles.rowTopStart}>
						<FontAwesome5 name="building" size={24} color="#006d86" />
						<View style={[styles.colStart, { marginLeft: 5 }]}>
							<Text style={styles.vTitle}>{item.title}</Text>
							{/* <Text style={styles.vTitle}>{item.reviews}/10 Reviews</Text> */}
							{/* <Image source={rating} style={styles.ratingImg} /> */}
						</View>
					</View>
					<View style={[styles.rowing, { paddingTop: 10 }]}>
						<Text style={[styles.rate]}>
							<Ionicons
								name="location-sharp"
								size={24}
								color="#006d86"
								style={{ marginRight: 5 }}
							/>
							Lorem ipsum
						</Text>
						<Text style={[styles.rate, { textAlign: "right", marginLeft: 50 }]}>
							<Text style={{ fontWeight: "normal" }}>Bill:</Text> ${item.cost}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	return (
		<ScrollView
			contentContainerStyle={{
				paddingBottom: 45,
				backgroundColor: "#fff",
				minHeight: screenHeight,
			}}
		>
			<View style={[styles.topHeader, styles.rowing]}>
				<View>
					<Text style={[styles.whiteText, { textTransform: "uppercase" }]}>
						My Bookings
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
			<View style={[styles.tabList, { marginBottom: 40 }]}>
				<TouchableOpacity
					onPress={() => {
						setIndex(0);
						setActiveList(userData.myActiveHotels);
					}}
					style={[
						styles.tab,
						index === 0 ? styles.activeTab : styles.inActiveTab,
					]}
				>
					<Text
						style={[
							styles.tabText,
							index === 0 ? styles.activeColor : styles.inActiveColor,
						]}
					>
						Active
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setIndex(1);
						setActiveList(userData.myCancelledHotels);
					}}
					style={[
						styles.tab,
						index === 1 ? styles.activeTab : styles.inActiveTab,
					]}
				>
					<Text
						style={[
							styles.tabText,
							index === 1 ? styles.activeColor : styles.inActiveColor,
						]}
					>
						Cancelled
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						setIndex(2);
						setActiveList(userData.myBookedHotels);
					}}
					style={[
						styles.tab,
						index === 2 ? styles.activeTab : styles.inActiveTab,
					]}
				>
					<Text
						style={[
							styles.tabText,
							index === 2 ? styles.activeColor : styles.inActiveColor,
						]}
					>
						Past
					</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.bottomContainer}>
				<View style={styles.inputStyling}>
					<AntDesign name="search1" size={24} color="black" />
					<TextInput
						placeholder={"Please type to search"}
						style={{
							backgroundColor: "transparent",
							width: screenWidth / 1.2,
							marginLeft: 10,
							fontSize: 15,
						}}
						onChangeText={(txt) => setTextValue(txt)}
					/>
				</View>
				<View style={styles.marginBottom20}>
					<Text style={styles.heading}>My Bookings</Text>
				</View>
				{activeList.length == 0 ? (
					<View style={styles.column}>
						<Foundation name="clipboard-notes" size={50} color="black" />
						<Text style={styles.notFoundText}>No bookings found</Text>
					</View>
				) : (
					<View>
						<FlatList
							data={
								textValue
									? activeList.filter((item) =>
											item.title.toLowerCase().includes(textValue.toLowerCase())
									  )
									: activeList
							}
							renderItem={renderVerticalData}
						/>
					</View>
				)}
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	notFoundText: {
		fontSize: 16,
		color: "#000000",
	},
	column: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "column",
		paddingTop: 40,
	},
	bottomContainer: {
		paddingHorizontal: 15,
		paddingBottom: 50,
	},
	tabText: {
		fontSize: 16,
		fontWeight: "bold",
	},
	contentContainer: {
		paddingTop: 30,
		paddingHorizontal: 5,
	},
	tab: {
		paddingBottom: 15,
		width: 120,
		textAlign: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	activeTab: {
		borderBottomWidth: 5,
		borderBottomColor: "#006d86",
		borderBottomStartRadius: 4,
		borderBottomEndRadius: 4,
	},
	inActiveTab: {
		borderBottomWidth: 5,
		borderBottomColor: "#fff",
		borderBottomStartRadius: 4,
		borderBottomEndRadius: 4,
	},
	tabList: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		paddingHorizontal: 10,
	},
	activeColor: {
		color: "#006d86",
	},
	inActiveColor: {
		color: "#ACACAC",
	},
	imgStyling: {
		height: 41,
		width: 41,
		resizeMode: "contain",
		borderRadius: 41 / 2,
	},
	userView: {
		paddingLeft: 10,
	},
	whiteText: {
		fontSize: 15,
		color: "#fff",
		fontWeight: "bold",
	},

	paddingHrzntl15: {
		paddingHorizontal: 15,
	},
	inputStyling: {
		// height: 40,
		width: screenWidth / 1.1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
		marginBottom: 10,
		borderRadius: 6,
		fontSize: 14,
		borderWidth: 1,
		padding: 15,
	},
	marginBottom20: {
		marginBottom: 10,
	},
	heading: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#006d86",
	},
	rate: {
		fontSize: 15.5,
		color: "#006d86",
		fontWeight: "bold",
	},
	container: {},
	topHeader: {
		backgroundColor: "#006d86",
		paddingHorizontal: 16,
		paddingBottom: 18,
		paddingTop: 60,
		borderBottomLeftRadius: 24,
		borderBottomEndRadius: 24,
		marginBottom: 30,
	},
	rowing: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	ratingImg: {
		width: 30,
		height: 7,
		resizeMode: "contain",
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
	colStart: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
		flexDirection: "column",
	},
	vTitle: {
		fontSize: 15,
		color: "rgba(0, 0, 0, 0.54)",
		textAlign: "left",
	},
	bigCard: {
		width: screenWidth / 1.05,
		borderRadius: 12,
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		height: 130,
		marginBottom: 12,
	},
});
