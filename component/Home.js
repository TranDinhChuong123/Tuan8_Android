import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Keyboard,
  FlatList,
  ScrollView,
} from "react-native";
import moment from "moment";
import React, { useEffect, useState } from "react";

export default function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [note, setNote] = useState("");
  const [title, setTitle] = useState("");
  const date = moment().format();
  const [id, setId] = useState(null);

  //   fetch("https://654ddd9acbc325355741fc06.mockapi.io/note", {
  //     method: "GET",
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       // handle error
  //     })
  //     .then((tasks) => {
  //       setData(tasks);
  //       // Do something with the list of tasks
  //     })
  //     .catch((error) => {
  //       // handle error
  //     });

  // useEffect(() => {
  //   fetch("https://654ddd9acbc325355741fc06.mockapi.io/note", {
  //     method: "GET",
  //     headers: { "content-type": "application/json" },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         return res.json();
  //       }
  //       // handle error
  //     })
  //     .then((tasks) => {
  //       setData(tasks);
  //       // Do something with the list of tasks
  //     })
  //     .catch((error) => {
  //       // handle error
  //     });
  // });

  const delete1 = () => {
    fetch("https://654ddd9acbc325355741fc06.mockapi.io/note/" + id + "", {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // Do something with deleted task
      })
      .catch((error) => {
        // handle error
      });
  };

  useEffect(() => {
    fetch("https://654ddd9acbc325355741fc06.mockapi.io/note")
      .then((response) => response.json())
      .then((json) => setData(json));
  });

  const registerUser = () => {
    fetch("https://654ddd9acbc325355741fc06.mockapi.io/note", {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify({ title, note, date }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        // handle error
      });
  };

  if (!setId && data.length > 0) {
    setId(data[0].id);
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setTitle}
        placeholder="Note title"
        placeholderTextColor={"gray"}
        style={{
          position: "absolute",
          padding: 10,
          top: 20,
          width: "80%",
          height: 40,
          borderWidth: 1,
          borderRadius: 5,
        }}
      ></TextInput>
      <TextInput
        multiline={true}
        onChangeText={setNote}
        style={{
          padding: 10,
          top: 75,
          position: "absolute",
          width: "80%",
          height: 300,
          borderWidth: 1,
          borderRadius: 5,
        }}
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          // Xử lý sự kiện khi nút 2 được nhấn
          if (note && title) {
            registerUser();
          }
        }}
        style={{
          position: "absolute",
          top: 400,
          width: 100,
          height: 40,
          backgroundColor: "#5ab9c1",
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Save</Text>
      </TouchableOpacity>

      <FlatList
        style={{ position: "absolute", top: 450, width: "100%" }}
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: "red",
              margin: 10,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 23,
                fontWeight: "700",
                left: 30,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                left: 30,
              }}
            >
              {item.date}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setId(item.id);
                delete1();
              }}
              style={{
                position: "absolute",
                width: 90,
                height: 30,
                left: 150,
                backgroundColor: "red",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}
              >
                Delete
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                position: "absolute",
                width: 90,
                height: 30,
                left: 250,
                backgroundColor: "red",
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "600", textAlign: "center" }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>

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
