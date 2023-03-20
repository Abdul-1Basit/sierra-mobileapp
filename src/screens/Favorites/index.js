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
	Modal,
} from "react-native";
import {
	Feather,
	FontAwesome,
	Ionicons,
	FontAwesome5,
	MaterialIcons,
	Fontisto,
} from "@expo/vector-icons";
import imgLogo from "../../../assets/userimg.png";
import RectangleOne from "../../../assets/RectangleOne.png";
import RectangleTwo from "../../../assets/RectangleTwo.png";
import RectangleThree from "../../../assets/RectangleThree.png";
import beachOne from "../../../assets/beachOne.jpg";
import beachTwo from "../../../assets/beachTwo.jpg";
import beachThree from "../../../assets/beachThree.jpg";
import rating from "../../../assets/ratings.png";
import SortModal from "../Modals/SortModal";
import FilterModal from "../Modals/FilterModal";
import { UserContext } from "../../AppContext";
const screenWidth = Dimensions.get("screen").width;

export default function Favorites(props) {
	const [modal, setModalVisible] = React.useState(false);
	const [sortModal, setSortModalVisible] = React.useState(false);
	const [userData, setUserData] = React.useContext(UserContext);
	const [searchQuery, setSearchQuery] = React.useState("");
	const verticalData = [
		{
			id: 0,
			img: beachOne,
			title: "Maldives Hotel",
			location: "Lorem ipsum",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 1,
			img: beachTwo,
			title: "Maldives Hotel",
			location: "Lorem ipsum",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 2,
			img: beachThree,
			title: "Maldives Hotel",
			location: "Lorem ipsum",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 3,
			img: beachOne,
			title: "Maldives Hotel",
			location: "Lorem ipsum",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 4,
			img: beachTwo,
			title: "Maldives Hotel",
			location: "Lorem ipsum",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
		{
			id: 5,
			img: beachThree,
			title: "Maldives Hotel",
			location: "Lorem ipsum",
			rating: 5,
			reviews: 8.5,
			rate: 200,
		},
	];

	const renderVerticalData = ({ item }) => {
		return (
			<View style={[{ flexDirection: "row" }, styles.bigCard]}>
				<Image source={item.img} style={styles.bigImage} />
				<View style={{ paddingTop: 20 }}>
					<View style={styles.rowTopStart}>
						<FontAwesome5 name="building" size={24} color="#006d86" />
						<View style={[styles.colStart, { marginLeft: 5 }]}>
							<Text style={styles.vTitle}>{item.title}</Text>
							<Text style={styles.vTitle}>{item.reviews}/10 Reviews</Text>
							<Image source={rating} style={styles.ratingImg} />
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
							$200/Night
						</Text>
					</View>
				</View>
			</View>
		);
	};
	return (
		<ScrollView>
			<View style={{ marginBottom: 120 }}>
				<View style={[styles.topHeader, styles.rowing]}>
					<View>
						<Text style={[styles.whiteText, { textTransform: "uppercase" }]}>
							Favourites{" "}
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
				{modal && <FilterModal {...{ modal, setModalVisible }} />}
				{sortModal && <SortModal {...{ sortModal, setSortModalVisible }} />}
				<View style={[styles.centeral, { paddingTop: 20 }]}>
					<View style={[styles.rowing, styles.inputStyling]}>
						<View style={styles.rowStart}>
							<FontAwesome name="search" size={24} color="#006d86" />
							<TextInput
								placeholder="New York"
								style={styles.textInput}
								placeholderTextColor={"#006d86"}
								onChangeText={(text) => setSearchQuery(text)}
							/>
						</View>
						<Ionicons name="location-sharp" size={24} color="#006d86" />
					</View>
				</View>
				<View
					style={[styles.flexEnd, { paddingVertical: 7, paddingRight: 10 }]}
				>
					<TouchableOpacity
						style={[styles.smallBtn, styles.centeral]}
						onPress={() => setSortModalVisible(true)}
					>
						<Fontisto name="arrow-swap" size={23} color="#fff" />
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.smallBtn, styles.centeral, { marginLeft: 5 }]}
						onPress={() => setModalVisible(true)}
					>
						<Ionicons name="filter" size={24} color="#fff" />
					</TouchableOpacity>
				</View>
				<View style={styles.bottomView}>
					<View style={styles.nearMeView}>
						<View>
							<FlatList
								data={
									searchQuery
										? userData.savedItems.filter((itm) =>
												itm.title
													.toLowerCase()
													.includes(searchQuery.toLowerCase())
										  )
										: userData.savedItems
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
const styles = StyleSheet.create({
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
		fontSize: 14,
		textAlign: "left",
	},
	inputStyling: {
		backgroundColor: "rgba(0, 0, 0, 0.04)",
		padding: 15,
		borderRadius: 13,
		width: screenWidth / 1.05,
		borderWidth: 1.5,
		borderColor: "#bababa",
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
