import {
    ScrollView,
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Text,
    Button,
    Platform,
    Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import { TopicDetailHeading, Input, UIButton } from "../components";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import { Dropdown } from "react-native-element-dropdown";
import DateTimePicker from "@react-native-community/datetimepicker";
import { RadioButton } from "react-native-paper";
import { COLORS, FONTSIZE, SPACING } from "../themes/themes";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const Registration = () => {
    const [userAvatar, setUserAvatar] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [nationality, setNationality] = useState([]);
    const [password, setPassword] = useState("");
    const [selectNational, setSelectNational] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [date, setDate] = useState(new Date());
    const [checkedGender, setCheckedGender] = useState("");

    const handleDateChange = (event, selectedDate) => {
        // setIsFocus(Platform.OS === "ios");
        if (selectedDate) {
            setDate(selectedDate);
        }
    };
    useEffect(() => {
        async () => {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to access camera roll is required!");
            }
        };
        const getCountry = async () => {
            try {
                let response = await axios.get(
                    "http://192.168.1.8:4000/api/v1/country"
                );
                const formattedResponse = response.data.map((item) => ({
                    label: item.nameEN,
                    value: item.id,
                }));
                setNationality(formattedResponse);
            } catch (error) { }
        };
        getCountry();
    }, []);

    const genders = [
        {
            id: 1,
            label: "Male",
            value: "male",
        },
        {
            id: 2,
            label: "Female",
            value: "female",
        },
    ];
    const getMimeTypeFromUri = (uri) => {
        const extension = uri.split(".").pop();
        switch (extension) {
            case "jpg":
            case "jpeg":
                return "image/jpeg";
            case "png":
                return "image/png";
            case "gif":
                return "image/gif";
            case "pdf":
                return "application/pdf";
            default:
                return "application/octet-stream";
        }
    };

    const handleUploadImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            //   console.log("result: ", result);
            if (!result.canceled) {
                const uri = result.assets[0].uri;
                const type = getMimeTypeFromUri(uri);
                const fileName = uri.substring(uri.lastIndexOf("/") + 1);

                const formData = new FormData();
                formData.append("file", {
                    uri,
                    type,
                    name: fileName,
                });

                setUserAvatar(formData);
            }
        } catch (error) {
            console.log("Error in handleUploadImage func", error);
        }
    };

    const handleRegister = async () => {
        try {
            if (
                !userAvatar ||
                !name ||
                !email ||
                !phone ||
                !checkedGender ||
                !selectNational ||
                !date ||
                !password
            ) {
                return (
                    Alert.alert('Please enter all fields')
                );
            }
            const response = await axios.post(
                "http://192.168.1.8:4000/api/v1/file/upload/single",
                userAvatar,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            const avatar = response.data.id
            console.log(avatar, name, email, phone, checkedGender, selectNational, date, password)

            const { data } = await axios.post('http://192.168.1.8:4000/api/v1/account', {
                fullName: name,
                phone: phone,
                email: email,
                avatar: avatar,
                dob: date,
                gender: checkedGender,
                nationality: selectNational,
                password: password
            })
            console.log("Register Data", data)
            Alert.alert('Register successfull!!')
            navigation.navigate('LoginStack')
        } catch (error) {
            console.log("Error in handleRegister func", error);
        }
    };

    //   console.log(id, name, email, phone, checkedGender, selectNational, date, password)
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={styles.header}>
                    <TopicDetailHeading icon={'caret-back'} title={"Registration"} />
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <TouchableOpacity
                            style={styles.imgInput}
                            onPress={handleUploadImage}
                        >
                            <FontAwesome
                                style={styles.Camicon}
                                name="camera"
                                size={30}
                                color="black"
                            />
                        </TouchableOpacity>
                        <Input
                            placeholder="Fullname"
                            heightInput={50}
                            widthInput={WIDTH * 0.7}
                            value={name}
                            onChangeText={(text) => setName(text)}
                        />
                        <Input
                            placeholder="Email"
                            heightInput={50}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            widthInput={WIDTH * 0.7}
                        />
                        <Input
                            placeholder="Phone number"
                            heightInput={50}
                            widthInput={WIDTH * 0.7}
                            keyboardType={"numeric"}
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={genders}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? "Choose your gender" : "..."}
                            value={checkedGender}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={(item) => {
                                setCheckedGender(item.value);
                                setIsFocus(false);
                            }}
                        />
                        <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={nationality}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? "Choose your country" : "..."}
                            searchPlaceholder="Search..."
                            value={selectNational}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={(item) => {
                                setSelectNational(item.value);
                                setIsFocus(false);
                            }}
                        />
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateText}>Choose your birth</Text>
                            <DateTimePicker
                                value={date}
                                mode="date"
                                is24Hour={false}
                                display="default"
                                onChange={handleDateChange}
                            />
                        </View>
                        <Input
                            placeholder="Password"
                            heightInput={50}
                            widthInput={WIDTH * 0.7}
                            secureTextEntry={true}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <UIButton
                            title="sign up"
                            backgroundColor="#0A6EBD"
                            textColor="white"
                            size={18}
                            event={handleRegister}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Registration;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F0EEED",
    },
    header: {
        width: WIDTH,
    },
    content: {
        alignItems: "center",
        width: WIDTH,
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    imgInput: {
        backgroundColor: COLORS.WhiteRGBA75,
        width: WIDTH * 0.25,
        height: WIDTH * 0.25,
        justifyContent: "center",
        alignContent: "center",
        borderRadius: 50,
        marginVertical: SPACING.space_10,
    },
    Camicon: {
        alignSelf: "center",
    },
    dropdown: {
        width: WIDTH * 0.7,
        height: 50,
        padding: 15,
        marginVertical: 7,
        fontSize: SPACING.size_16,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#444",
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: "absolute",
        backgroundColor: "white",
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
        color: COLORS.LightBlack,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: SPACING.size_16,
    },
    dateContainer: {
        width: WIDTH * 0.7,
        height: 50,
        padding: 15,
        marginVertical: 7,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#444",
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
        flexDirection: "row",
        paddingVertical: SPACING.space_10,
        paddingHorizontal: SPACING.space_10,
    },
    dateText: {
        alignSelf: "center",
        fontSize: FONTSIZE.size_16,
        color: COLORS.LightBlack,
    },
    genderContainer: {
        width: WIDTH * 0.7,
        height: 70,
        padding: 15,
        marginVertical: 7,
        backgroundColor: "white",
        borderRadius: 10,
        shadowColor: "#444",
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
        flexDirection: "row",
        // paddingVertical: SPACING.space_10,
        // paddingHorizontal: SPACING.space_10,
        alignContent: "center",
    },
    customAlertContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.Grey,
    },
    alertBox: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        width: 300,
    },
    titleAlert: {
        color: COLORS.Black,
        fontWeight: "bold",
        fontSize: FONTSIZE.size_20,
        textAlign: "center",
        textTransform: "uppercase",
        marginVertical: SPACING.space_10,
    },
    redText: {
        color: COLORS.Red,
        textTransform: "capitalize",
    },
    btnContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    cancelButton: {
        borderColor: COLORS.Red,
        borderWidth: 1,
        borderRadius: SPACING.space_10,
        width: WIDTH * 0.25,
        height: 30,
        paddingHorizontal: SPACING.space_18,
        marginHorizontal: SPACING.space_10,
        marginVertical: SPACING.space_15,
        alignItem: "center",
        justifyContent: "center",
    },
    confirmButton: {
        backgroundColor: COLORS.Red,
        width: WIDTH * 0.25,
        borderRadius: SPACING.space_10,
        paddingHorizontal: SPACING.space_18,
        marginHorizontal: SPACING.space_10,
        marginVertical: SPACING.space_15,
        alignItem: "center",
        height: 30,
        justifyContent: "center",
    },
});
