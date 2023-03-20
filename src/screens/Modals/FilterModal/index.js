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
import { useState } from "react";
import {
	AntDesign,
	FontAwesome,
	Feather,
	FontAwesome5,
} from "@expo/vector-icons";
// import RangeSlider, { Slider } from "react-native-range-slider-expo";
import Slider from "@react-native-community/slider";
import sliderImg from "../../../../assets/Ellipse4.png";
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
export default function FilterModal(props) {
	const [value, setValue] = useState(0);
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<View>
			<Modal
				animationType="slide"
				transparent={true}
				visible={props.modalVisible}
				onRequestClose={() => {
					//   Alert.alert("Modal has been closed.");
					props.setModalVisible(false);
				}}
			>
				<ScrollView>
					<View style={styles.modalStyling}>
						<View style={styles.topBar} />
						<View style={[styles.rowing, { paddingBottom: 16 }]}>
							<Text style={[styles.heading, { color: "black" }]}>Set</Text>
							<Text style={styles.heading}>Set Filters</Text>
							<TouchableOpacity onPress={() => props.setModalVisible(false)}>
								<Text style={styles.smallText}>Reset</Text>
							</TouchableOpacity>
						</View>
						<View style={styles.main}>
							<View style={styles.flexStart}>
								<Text style={styles.subHeading}>RATING</Text>
							</View>
							<View style={styles.centeral}>
								<View style={[styles.capsule, styles.rowing]}>
									<View style={[styles.smallCurveBox, styles.rowing]}>
										<AntDesign name="star" size={14} color="#FFA132" />
										<Text style={styles.ratingText}>1</Text>
									</View>
									<View style={[styles.smallCurveBox, styles.rowing]}>
										<AntDesign name="star" size={14} color="#FFA132" />
										<Text style={styles.ratingText}>2</Text>
									</View>
									<View style={[styles.smallCurveBox, styles.rowing]}>
										<AntDesign name="star" size={14} color="#FFA132" />
										<Text style={styles.ratingText}>3</Text>
									</View>
									<View style={[styles.smallCurveBox, styles.rowing]}>
										<AntDesign
											name="star"
											size={14}
											color="rgba(0, 0, 0, 0.75)"
										/>
										<Text style={styles.ratingText}>4</Text>
									</View>
									<View style={[styles.smallCurveBox, styles.rowing]}>
										<AntDesign
											name="star"
											size={14}
											color="rgba(0, 0, 0, 0.75)"
										/>
										<Text style={styles.ratingText}>5</Text>
									</View>
								</View>
							</View>
							<View
								style={[
									styles.flexStart,
									styles.rowing,
									{ paddingTop: 26, paddingRight: 0 },
								]}
							>
								<Text style={styles.subHeading}>PRICE RANGE</Text>
								<Text style={styles.smallLabel}>($0-${value})</Text>
							</View>
							<View style={styles.centeral}>
								<View style={[styles.capsule, styles.centeral]}>
									<Slider
										style={{
											width: screenWidth - 100,
											height: 40,
										}}
										minimumValue={0}
										maximumValue={1000}
										step={10}
										minimumTrackTintColor="#000000"
										maximumTrackTintColor="#000000"
										// thumbImage={() => <View style={styles.circular} />}
										thumbImage={sliderImg}
										trackImage={sliderImg}
										onValueChange={(val) => setValue(val)}
									/>
								</View>
							</View>
							<View
								style={[styles.flexStart, { paddingTop: 26, paddingBottom: 7 }]}
							>
								<Text style={styles.subHeading}>FACILITIES</Text>
							</View>
							<View style={[styles.rowing]}>
								<View style={[styles.facilityBox, styles.centeral]}>
									<FontAwesome name="car" size={24} color="black" />
								</View>
								<View style={[styles.facilityBox, styles.centeral]}>
									<Feather name="wifi" size={24} color="black" />
								</View>
								<View style={[styles.facilityBox, styles.centeral]}>
									<FontAwesome name="paw" size={24} color="black" />
								</View>
								<View style={[styles.facilityBox, styles.centeral]}>
									<FontAwesome5 name="utensils" size={24} color="black" />
								</View>
							</View>
							<View
								style={[styles.flexStart, { paddingTop: 26, paddingBottom: 7 }]}
							>
								<Text style={styles.subHeading}>DISTANCE FROM ADDRESS</Text>
							</View>
							<View
								style={[
									styles.capsule,
									styles.rowing,
									{ width: screenWidth - 80 },
								]}
							>
								<TouchableOpacity
									style={[styles.smallCapsule, styles.centeral]}
								>
									<Text style={styles.smallCapsuleText}>Less than 1 Km</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={[styles.smallCapsule, styles.centeral]}
								>
									<Text style={styles.smallCapsuleText}>Less than 2 Km</Text>
								</TouchableOpacity>
								<TouchableOpacity
									style={[styles.smallCapsule, styles.centeral]}
								>
									<Text style={styles.smallCapsuleText}>Less than 5 Km</Text>
								</TouchableOpacity>
							</View>
							<View
								style={[
									styles.flexStart,
									styles.rowing,
									{ paddingTop: 26, paddingRight: 0 },
								]}
							>
								<Text style={styles.subHeading}>FREE CANCELLATION</Text>
								<Switch
									trackColor={{ false: "#767577", true: "#81b0ff" }}
									thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
									ios_backgroundColor="#3e3e3e"
									onValueChange={toggleSwitch}
									value={isEnabled}
								/>
							</View>
							<View
								style={[styles.flexStart, { paddingTop: 26, paddingBottom: 7 }]}
							>
								<Text style={styles.subHeading}>PAYMENT MODE</Text>
							</View>
							<View
								style={[
									styles.capsule,
									styles.rowing,
									{ width: screenWidth - 80 },
								]}
							>
								<TouchableOpacity
									style={[styles.smallCapsule, styles.centeral]}
								>
									<Text style={styles.smallCapsuleText}>PAY AT HOTEL</Text>
								</TouchableOpacity>
							</View>
							<View style={[styles.centeral, { paddingTop: 50 }]}>
								<TouchableOpacity
									style={[
										styles.capsule,
										styles.centeral,
										{ width: screenWidth - 80 },
									]}
									onPress={() => props.setModalVisible(false)}
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
		borderTopStartRadius: 10,
		borderTopEndRadius: 10,
		borderBottomStartRadius: 10,
		borderBottomEndRadius: 10,
		borderRadius: 10,
		height: 50,
		backgroundColor: "#fff",
		width: screenWidth - 60,
		paddingHorizontal: 15,
		marginTop: 7,
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
		backgroundColor: "black",
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
