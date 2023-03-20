import {
	View,
	Modal,
	StyleSheet,
	Text,
	Dimensions,
	TouchableOpacity,
	Switch,
	ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
	AntDesign,
	FontAwesome,
	Feather,
	FontAwesome5,
} from "@expo/vector-icons";

// import RangeSlider, { Slider } from "react-native-range-slider-expo";
import Slider from "@react-native-community/slider";
import sliderImg from "../../../../assets/Ellipse4.png";
import { Picker } from "@react-native-picker/picker";

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export default function SortModal(props) {
	const [category, setCategory] = React.useState("");
	const categories = ["Popularity", "Cheapest", "Expensive"];
	const [ascending, setAscending] = React.useState("");
	const ascendingTypes = ["Price:Ascending", "Price:Descending", "Date Posted"];
	const [underFilter, setUnderFilter] = React.useState("");
	const underFilterOptions = [
		"Under $500",
		"Under $800",
		"Under $1000",
		"Under $1500",
	];
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={props.sortModal}
				onRequestClose={() => {
					//   Alert.alert("Modal has been closed.");
					props.setSortModalVisible(false);
				}}
			>
				<ScrollView>
					<View style={styles.modalStyling}>
						<View style={styles.topBar} />
						<View style={[styles.centeral, { paddingBottom: 30 }]}>
							<Text style={styles.heading}>Sort By</Text>
						</View>
						<View style={styles.main}>
							<View style={styles.centeral}>
								<View style={[styles.capsule, styles.centeral]}>
									<Picker
										selectedValue={category}
										onValueChange={(itemValue, itemIndex) =>
											setCategory(itemValue)
										}
										style={{
											backgroundColor: "#f4f4f4",
											width: screenWidth / 1.1,
											borderWidth: 1,
											borderColor: "#bababa",
										}}
									>
										{categories.map((item) => (
											<Picker.Item label={item} value={item} key={item} />
										))}
									</Picker>
								</View>
							</View>
							<View style={styles.centeral}>
								<View style={[styles.capsule, styles.centeral]}>
									<Picker
										selectedValue={ascending}
										onValueChange={(itemValue, itemIndex) =>
											setAscending(itemValue)
										}
										style={{
											backgroundColor: "#f4f4f4",
											width: screenWidth / 1.1,
											borderWidth: 1,
											borderColor: "#bababa",
										}}
									>
										{ascendingTypes.map((item) => (
											<Picker.Item label={item} value={item} key={item} />
										))}
									</Picker>
								</View>
							</View>
							<View style={styles.centeral}>
								<View style={[styles.capsule, styles.centeral]}>
									<Picker
										selectedValue={underFilter}
										onValueChange={(itemValue, itemIndex) =>
											setUnderFilter(itemValue)
										}
										style={{
											backgroundColor: "#f4f4f4",
											width: screenWidth / 1.1,
											borderWidth: 1,
											borderColor: "#bababa",
										}}
									>
										{underFilterOptions.map((item) => (
											<Picker.Item label={item} value={item} key={item} />
										))}
									</Picker>
								</View>
							</View>
							<View style={[styles.centeral, { paddingTop: 50 }]}>
								<TouchableOpacity
									style={[
										styles.capsule,
										styles.centeral,
										{
											width: screenWidth - 80,
											backgroundColor: "#fff",
											borderTopStartRadius: 10,
											borderTopEndRadius: 10,
											borderBottomStartRadius: 10,
											borderBottomEndRadius: 10,
											borderRadius: 10,
											height: 60,
										},
									]}
									onPress={() => props.setSortModalVisible(false)}
								>
									<Text style={styles.showText}>SHOW RESULTS</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	topBar: {
		height: 5,
		width: 120,
		backgroundColor: "#fff",
		borderRadius: 12,
		alignSelf: "center",
		marginBottom: 30,
	},
	showText: {
		fontSize: 15,
		fontWeight: "700",
		color: "#1ADEF4",
	},
	smallCapsuleText: {
		fontSize: 9,
		fontWeight: "bold",
	},
	smallCapsule: {
		backgroundColor: "rgba(0, 0, 0, 0.25)",
		width: 90,
		height: 27,
		borderRadius: 18,
	},
	facilityBox: {
		height: 50,
		width: 70,
		backgroundColor: "#fff",
		borderRadius: 10,
	},
	main: {
		paddingHorizontal: 30,
	},
	circular: {
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: "black",
	},
	ratingText: {
		fontSize: 9,
		color: "black",
	},
	smallCurveBox: {
		height: 27,
		width: 38,
		borderRadius: 17,
		backgroundColor: "rgba(0, 0, 0, 0.25)",
		paddingHorizontal: 8,
	},
	capsule: {
		// borderTopStartRadius: 10,
		// borderTopEndRadius: 10,
		// borderBottomStartRadius: 10,
		// borderBottomEndRadius: 10,
		// borderRadius: 10,
		height: 50,
		// backgroundColor: "#fff",
		width: screenWidth - 60,
		// paddingHorizontal: 15,
		marginVertical: 7,
	},
	centeral: {
		alignItems: "center",
		justifyContent: "center",
	},
	subHeading: {
		fontSize: 15,
		fontWeight: "700",
		textTransform: "uppercase",
		color: "#fff",
		marginLeft: -20,
	},
	smallLabel: {
		fontSize: 12,
		fontWeight: "700",
		// textTransform: "uppercase",
		color: "#fff",
	},
	flexStart: {
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	heading: {
		fontSize: 24,
		fontWeight: "700",
		color: "#fff",
	},
	smallText: {
		fontSize: 17,
		fontWeight: "700",
		color: "#fff",
	},
	modalStyling: {
		backgroundColor: "#006d86",
		width: screenWidth,
		height: screenHeight,
		padding: 10,
		borderTopStartRadius: 67,
		borderTopEndRadius: 67,
	},
	rowing: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
});
