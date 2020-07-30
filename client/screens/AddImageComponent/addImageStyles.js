import { StyleSheet } from "react-native";
import { Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70
  },
  headrTitle: {
    fontSize: 21,
    color: "black",
    justifyContent: "center",
    margin: 10,
    fontWeight: "bold",
    marginLeft: 45
  },
  preview: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 400,
    flex: 1
  },
  icon: {
    // margin: 10,
    // marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    color: "#bc2b78"
  },
  viewImg: {
    flexDirection: "row",
    margin: 10
  },
  header: {
    backgroundColor: "#ffffff",
    height: Platform.OS === "android" ? 55 : 65
  },
  title: {
    flex: 7,
    flexDirection: "column"
  },
  text:{
    fontSize:20,
    color:'#000',
    fontWeight: "bold",
  }
});
