import { initializeApp } from "firebase/app";
import {
	GoogleAuthProvider,
	getAuth,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
} from "firebase/firestore";

import {
	getStorage,
	uploadBytesResumable,
	getDownloadURL,
	ref,
} from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
	apiKey: "AIzaSyBr5XTwZq57FiweoHTp6lGW7Igbq1VY-Jo",
	authDomain: "sierralodgingsystem.firebaseapp.com",
	projectId: "sierralodgingsystem",
	storageBucket: "sierralodgingsystem.appspot.com",
	messagingSenderId: "600357651029",
	appId: "1:600357651029:web:f63245c5b7c604d9c74adc",
	measurementId: "G-VW2B2Q9DJ7",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(app);

const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, "users"), where("uid", "==", user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, "users"), {
				uid: user.uid,
				name: user.displayName,
				authProvider: "google",
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logInWithEmailAndPassword = async (email, password) => {
	let user = null;
	try {
		const resp = await signInWithEmailAndPassword(auth, email, password);
		// console.log("response is", resp);
		user = resp.user;
		return user;
	} catch (err) {
		console.error(err);
		// alert(err.message);
		return user;
	}
};
const registerWithEmailAndPassword = async (name, email, password) => {
	try {
		const res = await createUserWithEmailAndPassword(auth, email, password);
		const user = res.user;
		await addDoc(collection(db, "users"), {
			uid: user.uid,
			name,
			authProvider: "local",
			email,
			type: "admin",
		});
		return res.user;
	} catch (err) {
		console.error(err);
		return null;
		//alert(err.message);
	}
};
//-----------Productss-----------------------

const addProduct = async (productDetails) => {
	let {
		description,
		images,
		isActive,
		measurements,
		name,
		sizeChart,
		sku,
		unitPrice,
	} = productDetails;
	let sold = 0;

	try {
		await addDoc(collection(db, "products"), {
			description,
			images,
			isActive,
			measurements,
			name,
			sizeChart,
			sku,
			unitPrice,
			sold,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllProducts = async () => {
	try {
		const querySnapshot = await getDocs(collection(db, "products"));
		let newData = [];
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			// console.log(doc.id, " => ", doc.data());
			let temp = doc.data();
			temp.id = doc.id;
			console.log("temp", temp);
			newData.push(temp);
		});
		return newData;
	} catch (err) {
		console.log("err", err);
	}
};
const updateProduct = async (product) => {
	let {
		description,
		images,
		isActive,
		measurements,
		name,
		sizeChart,
		sku,
		unitPrice,
		sold,
	} = product;

	try {
		const prodRef = await doc(db, "products", product.id);
		await updateDoc(prodRef, {
			description,
			images,
			isActive,
			measurements,
			name,

			sizeChart,
			sku,
			unitPrice,
			sold,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteProduct = async (product) => {
	try {
		await deleteDoc(doc(db, "products", product.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//-----------Menu-----------------------
const addMenu = async (menu) => {
	let { Hotel, MenuCategory, MenuName } = menu;

	try {
		await addDoc(collection(db, "menus"), {
			Hotel,
			MenuCategory,
			MenuName,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllMenus = async () => {
	const querySnapshot = await getDocs(collection(db, "menus"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		// console.log(doc.id, " => ", doc.data());
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateMenu = async (menu) => {
	let { Hotel, MenuCategory, MenuName } = menu;

	try {
		//console.log("roze", prize.id);
		const prodRef = await doc(db, "menus", menu.id);
		await updateDoc(prodRef, {
			Hotel,
			MenuCategory,
			MenuName,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteMenu = async (id) => {
	try {
		await deleteDoc(doc(db, "menus", id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//-----------Menu Items-----------------------
const addMenuItems = async (menuItem) => {
	let { MenuName, ItemName, Serving, Addons } = menuItem;

	try {
		await addDoc(collection(db, "menuItems"), {
			MenuName,
			ItemName,
			Serving,
			Addons,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllMenuItems = async () => {
	const querySnapshot = await getDocs(collection(db, "menuItems"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		// console.log(doc.id, " => ", doc.data());
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateMenuItems = async (menu) => {
	let { MenuName, ItemName, Serving, Addons } = menu;

	try {
		//console.log("roze", prize.id);
		const prodRef = await doc(db, "menuItems", menu.id);
		await updateDoc(prodRef, {
			MenuName,
			ItemName,
			Serving,
			Addons,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteMenuItems = async (id) => {
	try {
		await deleteDoc(doc(db, "menusItems", id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//-----------Menu Items-----------------------
const addHotel = async (menuItem) => {
	let {
		Name,
		Images,
		Description,
		PricePerNight,
		Facilities,
		NoOfBaths,
		NoOfBedrooms,
		Wifi,
		Gym,
		Parking,
		Hotel,
	} = menuItem;

	try {
		await addDoc(collection(db, "hotels"), {
			Name,
			Description,
			Images,
			PricePerNight,
			Facilities,
			NoOfBaths,
			NoOfBedrooms,
			Wifi,
			Gym,
			Parking,
			Hotel,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllHotels = async () => {
	const querySnapshot = await getDocs(collection(db, "hotels"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateHotel = async (menu) => {
	let {
		Name,
		Images,
		Description,
		PricePerNight,
		Facilities,
		NoOfBaths,
		NoOfBedrooms,
		Wifi,
		Gym,
		Parking,
		Hotel,
	} = menu;

	try {
		//console.log("roze", prize.id);
		const prodRef = await doc(db, "hotels", menu.id);
		await updateDoc(prodRef, {
			Name,
			Images,
			Description,
			PricePerNight,
			Facilities,
			NoOfBaths,
			NoOfBedrooms,
			Wifi,
			Gym,
			Parking,
			Hotel,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteHotel = async (id) => {
	try {
		await deleteDoc(doc(db, "hotels", id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//----------------------------------------------------

//-----------Campaigns-----------------------
const addCampaign = async (campaign) => {
	let {
		Name,
		NoofRooms,
		TargetMarket,
		LevelofService,
		OwnershipAndAffiliation,
	} = campaign;
	//console.log("capmpig", campaign);
	try {
		await addDoc(collection(db, "campaigns"), {
			Name,
			NoofRooms,
			TargetMarket,
			LevelofService,
			OwnershipAndAffiliation,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllCampaigns = async () => {
	const querySnapshot = await getDocs(collection(db, "campaigns"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		// doc.data() is never undefined for query doc snapshots
		// console.log(doc.id, " => ", doc.data());
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateCampaign = async (campaign) => {
	let {
		Name,
		NoofRooms,
		TargetMarket,
		LevelofService,
		OwnershipAndAffiliation,
	} = campaign;

	try {
		console.log("roze", campaign);
		const prodRef = await doc(db, "campaigns", campaign.id);
		await updateDoc(prodRef, {
			Name,
			NoofRooms,
			TargetMarket,
			LevelofService,
			OwnershipAndAffiliation,
		});
		// console.log("campign", campaign);
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteCampaign = async (campaign) => {
	try {
		await deleteDoc(doc(db, "campaigns", campaign.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//-----------Users-----------------------
const addUser = async (user) => {
	let {
		dob,
		emailAddress,
		firstName,
		gender,
		lastName,
		nationality = "India",
		password,
		phoneNumber,
		residency = "India",
		image,
		role = "user",
	} = user;
	//console.log("capmpig", campaign);
	try {
		await addDoc(collection(db, "classyusers"), {
			dob,
			emailAddress,
			firstName,
			gender,
			lastName,
			nationality,
			password,
			phoneNumber,
			residency,
			image,
			role,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllUsers = async () => {
	const querySnapshot = await getDocs(collection(db, "classyusers"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateUser = async (user) => {
	let {
		dob,
		emailAddress,
		firstName,
		gender,
		lastName,
		nationality = "India",
		password,
		phoneNumber,
		residency = "India",
		image,
		role = "user",
	} = user;

	try {
		//console.log("roze", prize.id);
		const prodRef = await doc(db, "classyusers", user.id);
		await updateDoc(prodRef, {
			dob,
			emailAddress,
			firstName,
			gender,
			lastName,
			nationality,
			password,
			phoneNumber,
			residency,
			image,
			role,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteUser = async (user) => {
	try {
		await deleteDoc(doc(db, "classyusers", user.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//-----------Employeeee Management-----------------------
const addEmployee = async (employee) => {
	const res = await createUserWithEmailAndPassword(
		auth,
		employee.email,
		employee.password
	);
	//const user = res.user;

	let {
		image,
		firstName,
		lastName,
		email,
		password,
		phoneNumber,
		joinningDate,
		role,
		isActive,
		gender,
	} = employee;
	//console.log("capmpig", campaign);
	try {
		await addDoc(collection(db, "employees"), {
			id: res.user.uid.toString(),
			image,
			firstName,
			lastName,
			email,
			password,
			phoneNumber,
			joinningDate,
			role,
			isActive,
			gender,
		});
		return true;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllEmployees = async () => {
	const querySnapshot = await getDocs(collection(db, "employees"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateEmployee = async (employee) => {
	let {
		id,
		image,
		firstName,
		lastName,
		email,
		password,
		phoneNumber,
		joinningDate,
		role,
		gender,
		isActive,
	} = employee;

	try {
		//console.log("roze", prize.id);
		const prodRef = await doc(db, "employees", employee.id);
		await updateDoc(prodRef, {
			id,
			image,
			firstName,
			lastName,
			email,
			password,
			phoneNumber,
			joinningDate,
			role,
			gender,
			isActive,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteEmployee = async (employee) => {
	try {
		await deleteDoc(doc(db, "employees", employee.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------
//-----------Order Management-----------------------
const addOrder = async (Order, campaign, product) => {
	const {
		deliveryStatus = "Ordered",
		startTime,
		endTime,
		date,
		campaignId,
		userId,
		assignedTo,
	} = Order;
	//console.log("capmpig", campaign);
	try {
		await addDoc(collection(db, "orders"), {
			deliveryStatus,
			startTime,
			endTime,
			date,
			campaignId,
			userId,
			assignedTo,
			deliveredDate: "",
			airwayBillNo: "",
		});
		let prod = { ...product };
		prod.sold = parseInt(prod.sold) + 1;
		//let camp = { ...campaign };
		campaign.totalItems = parseInt(campaign.totalItems) - 1;
		// console.log("product is", prod);
		// console.log("campaign is", camp);

		let resp2 = await updateCampaign(campaign);
		let resp1 = await updateProduct(prod);

		return resp1 && resp2;
	} catch (err) {
		console.error(err);
		//alert(err.message);
		return false;
	}
};
const getAllOrders = async () => {
	const querySnapshot = await getDocs(collection(db, "orders"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};
const updateOrder = async (Order) => {
	const {
		deliveryStatus,
		startTime,
		endTime,
		date,
		campaignId,
		userId,
		assignedTo,
		deliveredDate,
		airwayBillNo = "",
	} = Order;

	try {
		//console.log("roze", prize.id);
		const prodRef = await doc(db, "orders", Order.id);
		await updateDoc(prodRef, {
			deliveryStatus,
			startTime,
			endTime,
			date,
			campaignId,
			userId,
			assignedTo,
			deliveredDate,
			airwayBillNo,
		});
		return true;
	} catch (err) {
		console.log("err", err);

		console.log("err", err.message);
		return false;
	}
};

const deleteOrder = async (Order) => {
	try {
		await deleteDoc(doc(db, "orders", Order.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//-----------ImageManagement-----------------------
const addImageToCarousel = async (Image) => {
	try {
		let response = await uploadImage(Image);
		await addDoc(collection(db, "carouselImages"), {
			image: response,
		});
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
};

const getAllCarouselImages = async () => {
	const querySnapshot = await getDocs(collection(db, "carouselImages"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};

const deleteCarouselImage = async (carouseImage) => {
	try {
		await deleteDoc(doc(db, "carouselImages", carouseImage.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
const addImageToBanner = async (Image) => {
	try {
		let response = await uploadImage(Image);
		await addDoc(collection(db, "bannerImages"), {
			image: response,
		});
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
};

const getAllBannerImages = async () => {
	const querySnapshot = await getDocs(collection(db, "bannerImages"));
	let newData = [];
	querySnapshot.forEach((doc) => {
		let temp = doc.data();
		temp.id = doc.id;
		newData.push(temp);
	});
	return newData;
};

const deleteBannerImage = async (carouseImage) => {
	try {
		await deleteDoc(doc(db, "bannerImages", carouseImage.id));
		return true;
	} catch (err) {
		console.log("err", err);
		return false;
	}
};
//----------------------------------------------------

//------------------imageupload----------------
const uploadImage = async (image) => {
	try {
		let storageRef = ref(storage, `/files/ ${v4() + image.name}`);

		// progress can be paused and resumed. It also exposes progress updates.
		// Receives the storage reference and the file to upload.
		let result = await uploadBytesResumable(storageRef, image);

		let returnurl = await getDownloadURL(result.ref);
		console.log("return url", returnurl);
		return returnurl;
	} catch (e) {
		console.log("error", e);
		return "";
	}
};
//-------------------------------------------
const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		alert("Password reset link sent!");
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};
const logout = () => {
	signOut(auth);
};
export {
	auth,
	db,
	signInWithGoogle,
	logInWithEmailAndPassword,
	registerWithEmailAndPassword,
	sendPasswordReset,
	logout,
	storage,
	addProduct,
	getAllProducts,
	updateProduct,
	deleteProduct,
	getAllMenus,
	addMenu,
	updateMenu,
	deleteMenu,
	getAllCampaigns,
	addCampaign,
	updateCampaign,
	deleteCampaign,
	uploadImage,
	getAllUsers,
	addUser,
	updateUser,
	deleteUser,
	addImageToCarousel,
	getAllCarouselImages,
	deleteCarouselImage,
	addImageToBanner,
	getAllBannerImages,
	deleteBannerImage,
	addEmployee,
	updateEmployee,
	getAllEmployees,
	deleteEmployee,
	addOrder,
	updateOrder,
	getAllOrders,
	deleteOrder,
	addMenuItems,
	getAllMenuItems,
	updateMenuItems,
	deleteMenuItems,
	addHotel,
	getAllHotels,
	updateHotel,
	deleteHotel,
};
