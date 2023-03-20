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
} from "react-native";
import {
	Feather,
	FontAwesome,
	Ionicons,
	FontAwesome5,
	MaterialIcons,
	AntDesign,
} from "@expo/vector-icons";
import React from "react";
import imgLogo from "../../../assets/userimg.png";
import RectangleOne from "../../../assets/RectangleOne.png";
import RectangleTwo from "../../../assets/RectangleTwo.png";
import RectangleThree from "../../../assets/RectangleThree.png";
import beachOne from "../../../assets/beachOne.jpg";
import beachTwo from "../../../assets/beachTwo.jpg";
import beachThree from "../../../assets/beachThree.jpg";
import rating from "../../../assets/ratings.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../Favorites";
import Settings from "../Settings";
import Union from "../../../assets/Union.png";
import { History } from "../History";
import { UserContext } from "../../AppContext";
const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get("screen").width;

export function Home(props) {
	const [userData, setUserData] = React.useContext(UserContext);
	const [textValue, setTextValue] = React.useState("");
	const [showSearchMenu, setShowSearchMenu] = React.useState(false);
	const [linearListData, setLinearData] = React.useState([
		{
			id: 0,
			img: RectangleOne,
			title: "Lorem ipsum",
			subDesc: "Lorem ipsum",
			rating: 5,
		},
		{
			id: 1,
			img: RectangleTwo,
			title: "Lorem ipsum",
			subDesc: "Lorem ipsum",
			rating: 5,
		},
		{
			id: 2,
			img: RectangleThree,
			title: "Lorem ipsum",
			subDesc: "Lorem ipsum",
			rating: 5,
		},
	]);
	const [verticalData, setVerticalData] = React.useState([
		{
			id: 0,
			img: beachOne,
			title: "French Hotel",
			location: "New York",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 1,
			img: beachTwo,
			title: "Maldives Hotel",
			location: "California",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 2,
			img: beachThree,
			title: "Barca Hotel",
			location: "Barcelona",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
	]);
	const saveMe = (item) => {
		let savedItems = [...userData.savedItems];
		savedItems.push(item);
		setUserData({ ...userData, savedItems: savedItems });
	};
	const unSaveMe = (item) => {
		let savedItems = [...userData.savedItems];
		savedItems = savedItems.filter((itm) => itm.id !== item.id);
		setUserData({ ...userData, savedItems: savedItems });
	};
	const linearDataRenderer = ({ item }) => {
		return (
			<View style={styles.smallCard}>
				<Image source={{ uri: item.img }} style={styles.linearImageStyling} />
				<View style={styles.rowing}>
					<View style={styles.colStart}>
						<Text style={styles.smallHotelTitle}>{item.title}</Text>
						<Text style={styles.smallHotelSub}>{item.subDesc}</Text>
					</View>
					<Image source={rating} style={styles.ratingImg} />
				</View>
			</View>
		);
	};
	const renderVerticalData = ({ item }) => {
		return (
			<TouchableOpacity
				style={[{ flexDirection: "row" }, styles.bigCard]}
				onPress={() => {
					props.navigation.navigate("HotelDetails", {
						itemId: item.id,
					});
				}}
			>
				<Image source={{ uri: item.img }} style={styles.bigImage} />
				<View style={{ paddingTop: 20 }}>
					<View style={[styles.rowing]}>
						<View style={styles.rowTopStart}>
							<FontAwesome5 name="building" size={24} color="#006d86" />
							<View style={[styles.colStart, { marginLeft: 5 }]}>
								<Text style={styles.vTitle}>{item.title}</Text>
								<Text style={styles.vTitle}>{item.reviews}/10 Reviews</Text>
								<Image source={rating} style={styles.ratingImg} />
							</View>
						</View>
						{userData.savedItems.findIndex((itm) => itm.id === item.id) > -1 ? (
							<TouchableOpacity onPress={() => unSaveMe(item)}>
								<AntDesign name="heart" size={24} color="#006d86" />
							</TouchableOpacity>
						) : (
							<TouchableOpacity onPress={() => saveMe(item)}>
								<AntDesign name="hearto" size={24} color="#006d86" />
							</TouchableOpacity>
						)}
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
							$200/Night
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};
	const fetchVerticalData = () => {};

	const fetchHorizontalData = () => {};
	return (
		<ScrollView>
			<View style={{ paddingBottom: 120 }}>
				<View style={[styles.topHeader, styles.rowing]}>
					<View>
						<Text style={[styles.whiteText, { textTransform: "uppercase" }]}>
							Sierra lodging system
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
				{!showSearchMenu && (
					<TouchableOpacity
						style={[styles.searchSmolBtn, styles.rowStart]}
						onPress={() => setShowSearchMenu(true)}
					>
						<FontAwesome name="search" size={24} color="#fff" />
						<Text style={styles.smolSearchTxt}>Search</Text>
					</TouchableOpacity>
				)}
				{showSearchMenu && (
					<View>
						<View style={styles.paddingHorizontal20}>
							<View style={styles.detailsBar}>
								<View style={[styles.rowing, styles.inputStyling]}>
									<View style={styles.rowStart}>
										<FontAwesome name="search" size={24} color="#fff" />
										<TextInput
											placeholder="Search by name or location"
											style={[styles.textInput, { width: screenWidth / 2 }]}
											placeholderTextColor={"#fff"}
											onChangeText={(e) => {
												setTextValue(e);
											}}
										/>
									</View>
									<Ionicons name="location-sharp" size={24} color="#fff" />
								</View>
								<View style={[styles.rowing, styles.padTop10]}>
									<View style={styles.colStart}>
										<Text style={styles.label}>Check-in</Text>
										<View style={[styles.rowStart, styles.inputStyling]}>
											<MaterialIcons name="date-range" size={24} color="#fff" />
											<TextInput
												style={[styles.textInput, styles.smallInput]}
												placeholder="25 March"
												placeholderTextColor={"#fff"}
											/>
										</View>
									</View>
									<View style={styles.colStart}>
										<Text style={styles.label}>Check-out</Text>
										<View style={[styles.rowStart, styles.inputStyling]}>
											<MaterialIcons name="date-range" size={24} color="#fff" />
											<TextInput
												style={[styles.textInput, styles.smallInput]}
												placeholder="30 March"
												placeholderTextColor={"#fff"}
											/>
										</View>
									</View>
								</View>
								<View style={[styles.padTop10, styles.rowing]}>
									<View style={styles.colStart}>
										<Text style={styles.label}>Check-in</Text>
										<View style={[styles.rowStart, styles.inputStyling]}>
											<MaterialIcons
												name="people-alt"
												size={24}
												color={"#fff"}
											/>
											<TextInput
												style={[styles.textInput, styles.smallInput]}
												placeholder="2 Guests"
												placeholderTextColor={"#fff"}
											/>
										</View>
									</View>
									<View style={styles.colStart}>
										<Text style={styles.label}>Check-out</Text>
										<View style={[styles.rowStart, styles.inputStyling]}>
											<MaterialIcons
												name="meeting-room"
												size={24}
												color="#fff"
											/>
											<TextInput
												style={[styles.textInput, styles.smallInput]}
												placeholder="1 Room"
												placeholderTextColor={"#fff"}
											/>
										</View>
									</View>
								</View>
							</View>
						</View>

						<View style={[styles.centeral, { marginTop: 15 }]}>
							<TouchableOpacity
								style={[styles.searchButton, styles.centeral]}
								onPress={() => {
									if (!textValue) {
										alert("Please enter somethings first");
									}
								}}
							>
								<Text style={[styles.whiteText, { fontSize: 17 }]}>Search</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
				<View style={styles.bottomView}>
					<View style={styles.lsView}>
						<Text style={styles.latestText}>Latest Searches</Text>
						{userData.latestItems.length === 0 ? (
							<View>
								<Text style={styles.latestSearchesText}>
									No latest searches
								</Text>
							</View>
						) : (
							<View>
								<FlatList
									data={userData.latestItems}
									renderItem={linearDataRenderer}
									horizontal={true}
									scrollEnabled={true}
								/>
							</View>
						)}
					</View>
					<View style={styles.nearMeView}>
						<View style={[styles.rowing, { paddingBottom: 10 }]}>
							<Text style={styles.heading}>Near me</Text>
							<TouchableOpacity>
								<Text style={styles.seeAll}>See all</Text>
							</TouchableOpacity>
						</View>
						<View>
							<FlatList
								data={
									textValue
										? userData.allHotels.filter((item) =>
												item.title
													.toLowerCase()
													.includes(textValue.toLowerCase())
										  )
										: userData.allHotels
								}
								renderItem={renderVerticalData}
							/>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
export default function Dashboard(props) {
	return (
		<Tab.Navigator
			screenOptions={{
				lazyLoad: true,
				tabBarStyle: {
					backgroundColor: "#006d86",
					borderTopWidth: 0,
					position: "absolute",
					left: 50,
					right: 50,
					bottom: 20,
					height: 80,
					borderRadius: 20,
				},
			}}
		>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					header: () => null,
					tabBarShowLabel: false,
					tabBarIcon: ({ tintColor, focused }) =>
						focused ? (
							<Image
								source={Union}
								style={{
									resizeMode: "contain",
									width: 22,
									height: 22,
									backgroundColor: "transparent",
								}}
							/>
						) : (
							<AntDesign name="home" size={24} color="#fff" />
						),
				}}
			/>
			<Tab.Screen
				name="Favorites"
				component={Favorites}
				options={{
					header: () => null,
					tabBarShowLabel: false,
					tabBarIcon: ({ tintColor, focused }) => (
						<View
							style={{
								height: 98,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "transparent",
							}}
						>
							<MaterialIcons
								name={focused ? "favorite" : "favorite-border"}
								size={24}
								color="#fff"
							/>
							{/* <FontAwesome5
								name="shopping-cart"
								size={30}
								color={focused ? "#fff" : "#ffa57f"}
							/> */}
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="History"
				component={History}
				options={{
					header: () => null,
					tabBarShowLabel: false,
					tabBarIcon: ({ tintColor, focused }) => (
						<View
							style={{
								height: 98,
								alignItems: "center",
								justifyContent: "center",
								backgroundColor: "transparent",
							}}
						>
							<FontAwesome name="history" size={24} color="#fff" />
						</View>
					),
				}}
			/>
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{
					header: () => null,
					tabBarShowLabel: false,
					tabBarIcon: ({ tintColor, focused }) => (
						<Ionicons
							name={focused ? "settings" : "settings-outline"}
							size={24}
							color="#fff"
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
const styles = StyleSheet.create({
	latestSearchesText: {
		fontSize: 14,
		fontWeight: "500",
		letterSpacing: 1,
	},
	container: {
		flex: 1,
	},
	searchSmolBtn: {
		marginTop: 10,
		width: screenWidth / 1.1,
		alignSelf: "center",
		paddingVertical: 10,
		paddingHorizontal: 15,
		borderRadius: 12,
		backgroundColor: "#006d86",
	},
	smolSearchTxt: {
		paddingLeft: 10,
		fontSize: 15,
		color: "#fff",
	},
	map: {
		width: "100%",
		height: "100%",
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
		color: "#006d86",
		// fontWeight: "bold",
	},
	vTitle: {
		fontSize: 15,
		color: "rgba(0, 0, 0, 0.54)",
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
		height: 175,
		width: 130,
		paddingHorizontal: 10,
		paddingTop: 10,
		paddingBottom: 20,
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
		marginRight: 12,
	},
	ratingImg: {
		width: 30,
		height: 7,
		resizeMode: "contain",
	},
	smallHotelSub: {
		fontSize: 7,
		fontWeight: "500",
		color: "#006d86",
	},
	smallHotelTitle: {
		color: "#006d86",
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
		color: "#006d86",
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
	},
	padTop10: {
		paddingTop: 10,
	},
	textInput: {
		paddingLeft: 10,
		color: "#fff",
	},
	paddingHorizontal20: {
		paddingHorizontal: 20,
	},
	label: {
		color: "rgba(89, 72, 72, 0.77)",
		fontSize: 14,
		textAlign: "left",
	},
	inputStyling: {
		backgroundColor: "#006d86",
		padding: 15,
		borderRadius: 13,
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
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		borderRadius: 16,
		marginTop: 10,
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
