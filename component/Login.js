import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  useEffect(() => {
    fetch("https://654ddd9acbc325355741fc06.mockapi.io/dangnhap", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((tasks) => {
        setData(tasks);
        // Do something with the list of tasks
      })
      .catch((error) => {
        // handle error
      });
  });
  return (
    <View style={styles.container}>
      {showMessage && (
        <View
          style={{
            position: "absolute",
            width: "300",
            height: 100,
            top: 355,
            textAlign: "center",
          }}
        >
          <Text style={{ color: "red" }}>
            Đăng nhập thất bại.Tài khoảng không đúng!
          </Text>
        </View>
      )}
      <Text style={styles.text1}>LOGIN</Text>

      <TextInput
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="UserName"
      />
      <TextInput
        onChangeText={setPassword}
        style={styles.textInput1}
        placeholder="Password"
      />

      <TouchableOpacity
        style={styles.button2}
        onPress={() => {
          const user = data.find(
            (item) => item.username === username && item.password === password
          );
          if (user) {
            console.log("Login successful");
            navigation.navigate("Home");
          } else {
            setShowMessage(true);
          }
        }}
      >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ top: 130 }}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "800" }}>CREATE ACCOUNT</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
  },

  passIcon: {
    position: "absolute",
    backgroundColor: null,
    top: 76,
    left: 128,
    height: 117,
    width: 105,
  },
  inputContainer: {
    position: "absolute",

    // flexDirection: "row",
    // alignItems: "center",

    // borderRadius: 1,
    // paddingHorizontal: 8,
    backgroundColor: "#475993",
    width: 110,
    height: 45,
    top: 527,
    left: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    // position: "absolute",
    width: 30,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer1: {
    position: "absolute",

    // flexDirection: "row",
    // alignItems: "center",

    // borderRadius: 1,
    // paddingHorizontal: 8,
    backgroundColor: "#00b2ff",
    width: 110,
    height: 45,
    top: 527,
    left: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    // position: "absolute",
    width: 30,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  inputContainer2: {
    position: "absolute",

    // flexDirection: "row",
    // alignItems: "center",

    // borderRadius: 1,
    // paddingHorizontal: 8,
    backgroundColor: "#ffffff",
    width: 110,
    height: 45,
    top: 527,
    left: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  icon2: {
    // position: "absolute",
    width: 30,
    height: 33,
    // marginRight: 7,
    // top: 1,

    zIndex: 1,
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    // flex: 1,
    // marginLeft: 35,
    paddingLeft: 20,
    borderRadius: 5,
    position: "absolute",
    width: 330,
    height: 54,
    top: 221,
    alignItems: "center",

    backgroundColor: "#cae1d1",
  },
  textInput1: {
    paddingLeft: 20,
    borderRadius: 5,
    position: "absolute",
    width: 330,
    height: 54,
    top: 298,

    alignItems: "center",
    backgroundColor: "#cae1d1",
  },
  // icon: {
  //   position:'absolute',
  //   left: -160,
  //   width: 48,
  //   height: 45,

  // },

  // textInput: {
  //   position: 'absolute',
  //   width: 305,
  //   height: 45,
  //   top: 385,
  //   left: 100,
  //   backgroundColor:'#c4c4c4',
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   paddingHorizontal: 8,
  //   marginBottom: 16,
  // },
  link: {
    // textDecorationLine: "none", // Loại bỏ gạch chân
    color: "blue", // Màu của liên kết
    position: "absolute",
    // color: "#5D25FA",
    width: 300,
    height: 50,
    top: 425,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    position: "absolute",
    color: "#5D25FA",
    top: 5,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "400", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 16, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
  },

  text1: {
    position: "absolute",
    width: 89,
    height: 29,
    top: 140,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 25, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 29, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text2: {
    position: "absolute",
    width: 260,
    height: 29,
    top: 397,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 17, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },
  text3: {
    position: "absolute",
    width: 260,
    height: 20,
    top: 464,
    fontFamily: "Roboto", // Tên của font-family hoặc tên của font được cài đặt trước đó
    fontSize: 14, // Kích thước font-size
    fontWeight: "700", // Độ đậm của chữ (normal, bold, ...)
    lineHeight: 17, // Chiều cao dòng
    letterSpacing: 0, // Khoảng cách giữa các ký tự
    textAlign: "center",
    color: " #000000",
  },

  gradient: {
    position: "relative",
    width: 360,
    height: 640,
    flex: 1,
    width: "100%",
    height: "100%",
  },

  button2: {
    // position: 'relative',
    width: 330,
    height: 45,
    position: "absolute",
    top: 394,
    borderRadius: 2,

    backgroundColor: "#E53935", // Màu nền của nút
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    // top: 498,
    // left: 29,
    // position: 'absolute',
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 23,
    color: "white", // Màu văn bản
    alignItems: "center",
  },
});
