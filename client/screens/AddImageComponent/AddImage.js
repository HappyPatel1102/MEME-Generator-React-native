/** AddImage is Home page and show 2 buttons
 * 1) image picker
 * 2) saved Image show
 */

import React, { Component } from "react";
import { Text, View, Dimensions } from "react-native";
import { Header } from "native-base";
import Picker from "react-native-image-picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MenuButton from "../../components/MenuButton";
const HEIGHT = Dimensions.get("screen").height;
const WIDTH = Dimensions.get("screen").width;
import styles from "./addImageStyles";

export default class AddImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: undefined,
      show: false
    };
    this.state = { animating: false };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Header style={styles.header}>
          <MenuButton navigation={this.props.navigation} />
          <View style={styles.title}>
            <Text style={styles.headrTitle}> MEME Generator </Text>
          </View>
        </Header>
        <View>
          <View
            style={{
              flex: 1,
              flexDirection: "column"
            }}
          >
            <View
              style={{
                marginLeft:45,
                marginRight:45,
                marginTop:45,
                marginBottom:45,
                borderColor:'#e7e7e7',
                borderWidth:2,
                height: HEIGHT / 3,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Icon
                name="image-plus"
                color="#606060"
                size={80}
                style={styles.icon}
                onPress={() => this._pickImage("image")}
              />
              <Text style={styles.text}>Add Image</Text>
            </View>
            <View
              style={{
                height: HEIGHT / 3,
                marginLeft:45,
                marginRight:45,
                marginBottom:45,
                borderColor:'#e7e7e7',
                borderWidth:2,
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
              }}
            >
              <Icon
                name="folder-multiple-image"
                color="#606060"
                size={80}
                style={styles.icon}
                onPress={() => navigation.navigate("SavedImage")}
              />
              <Text style={styles.text}>Saved Image</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
  //image picker
  _pickImage = type => {
    this.setState({ show: true });
    let options = {
      title: "MEME Generator",
      takePhotoButtonTitle: "Camera",
      chooseFromLibraryButtonTitle: "Gallery",
      cancelButtonTitle: "cancel",
      quality: 0.5,
      mediaType: "photo",
      maxWidth: 2000,
      noData: true,
      maxHeight: 2000,
      dateFormat: "yyyy-MM-dd HH:mm:ss",
      allowsEditing: false
    };
    Picker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log("User cancelled photo picker");
      } else if (response.error) {
        console.log("ImagePickerManager Error: ", response.error);
      } else if (response.customButton) {
      } else {
        const uri = response.uri;
        this.props.navigation.navigate("PictureView", { image: response.uri });
        this.setState({ name: response.fileName, image: uri, animating: true });
      }
    });
  };
}
