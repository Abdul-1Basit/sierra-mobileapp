import React from "react";
export const UserContext = React.createContext();
const UserProvider = (props) => {
	const [userData, setUserData] = React.useState({
		user: {},
		savedItems: [],
		allHotels: [
			{
				id: 0,
				img: "https://firebasestorage.googleapis.com/v0/b/sierralodgingsystem.appspot.com/o/beachOne.jpg?alt=media&token=2c7f283d-474d-4b27-8542-9a041d2a07ec",
				title: "French Hotel",
				location: "New York",
				rating: 5,
				reviews: 8.5,
				rate: 200,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
				reviewed: [
					{
						by: 23,
						text: "Best Hotel!",
						rating: 3.6,
					},
				],
				guestLimit: 2,
				bedrooms: 1,
				baths: 1,
				aminities: ["Parking", "Bath", "Bar", "Gym", "Wifi"],
				offerDeals: [
					{
						price: 100,
						type: "Day",
						title: "Your spring with us",
						description: "Offering full spring. From 1st Feb to 20th March.",
					},
				],
				checkinTime: "11 Am",
				checkoutTime: "11 Pm",
			},
			{
				id: 1,
				img: "https://firebasestorage.googleapis.com/v0/b/sierralodgingsystem.appspot.com/o/beachTwo.jpg?alt=media&token=b18dc60c-5eb0-4836-8a45-d958d9bc71c2",
				title: "Maldives Hotel",
				location: "California",
				rating: 5,
				reviews: 8.5,
				rate: 200,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
				reviewed: [
					{
						by: 23,
						text: "Best Hotel!",
						rating: 3.6,
					},
				],
				guestLimit: 2,
				bedrooms: 1,
				baths: 1,
				aminities: ["Parking", "Bath", "Bar", "Gym", "Wifi"],
				offerDeals: [
					{
						price: 100,
						type: "Day",
						title: "Your spring with us",
						description: "Offering full spring. From 1st Feb to 20th March.",
					},
				],
				checkinTime: "11 Am",
				checkoutTime: "11 Pm",
			},
			{
				id: 2,
				img: "https://firebasestorage.googleapis.com/v0/b/sierralodgingsystem.appspot.com/o/beachThree.jpg?alt=media&token=cd4b86cb-a85a-49e2-9715-e913b630124b",
				title: "Barca Hotel",
				location: "Barcelona",
				rating: 5,
				reviews: 8.5,
				rate: 200,
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
				reviewed: [
					{
						by: 23,
						text: "Best Hotel!",
						rating: 3.6,
					},
				],
				guestLimit: 2,
				bedrooms: 1,
				baths: 1,
				aminities: ["Parking", "Bath", "Bar", "Gym", "Wifi"],
				offerDeals: [
					{
						price: 100,
						type: "Day",
						title: "Your spring with us",
						description: "Offering full spring. From 1st Feb to 20th March.",
					},
				],
				checkinTime: "11 Am",
				checkoutTime: "11 Pm",
			},
		],
		latestItems: [],
		myCancelledHotels: [
			{
				id: 2,
				img: "https://firebasestorage.googleapis.com/v0/b/sierralodgingsystem.appspot.com/o/beachThree.jpg?alt=media&token=cd4b86cb-a85a-49e2-9715-e913b630124b",
				title: "Barca Hotel",
				location: "Barcelona",
				rating: 5,
				reviews: 8.5,
				rate: 200,
				stayDate: "---",
				cost: 0,
			},
		],
		myBookedHotels: [],
		myActiveHotels: [],
		currentitem: {
			checkinTime: "",
			checkoutTime: "",
		},
	});
	React.useEffect(() => {}, [userData]);
	return (
		<UserContext.Provider value={[userData, setUserData]}>
			{props.children}
		</UserContext.Provider>
	);
};
export default UserProvider;
