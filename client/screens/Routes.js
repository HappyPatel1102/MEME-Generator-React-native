import React from "react";

import Editimg from "./EditimgComponent/Editimg";
import PictureView from "./PictureViewComponent/PictureView";
import AddImage from "./AddImageComponent/AddImage";
import SavedImage from "./SaveImgComponent/SavedImage";
import ShowStickers from "./ShowStickerComponent/ShowStickers";
import DrawerNavigator from "../navigation/DrawerNavigator";
import About from "./AboutusComponent/about"
import StickerShop from "./StickerShopComponent/StickerShop";
import AddedStickers from "./addedStickerComponent/AddedStickers";
import MenuButton from "../components/MenuButton"

import {
  createStackNavigator,
  createAppContainer,
  createMaterialTopTabNavigator
} from "react-navigation";

import ShowSavedImg from "./SaveImgComponent/ShowSavedImg";

const MainNavigator = createStackNavigator({
  DrawerNavigator: {
    screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  },

  AddImage: {
    screen: AddImage,
    navigationOptions: {
      header: null
    }
  },

  PictureView: {
    screen: PictureView,
    navigationOptions: {
      header: null
    }
  },

  Editimg: {
    screen: Editimg,
    navigationOptions: {
      header: null
    }
  },
  AddedStickers: {
    screen: AddedStickers,
    navigationOptions: {
      header: null
    }
  },
  StickerShop: {
    screen: StickerShop,
    navigationOptions: {
      title: "Sticker Shop"
    }
  },
  ShowStickers: {
    screen: ShowStickers,
    navigationOptions: {
      title: "Sticker Details"
    }
  },
  SavedImage: {
    screen: SavedImage,
    navigationOptions: {
      title: "Save Images"
    }
  },
  ShowSavedImg: {
    screen: ShowSavedImg,
    navigationOptions: {
     title: 'Show saved img'
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      header: null
    }
  }
});

const Routes = createAppContainer(MainNavigator);
export default Routes;
