import React from "react";
import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import Card from "../components/Card";
const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

const FavouritesScreen = () => {
  return (
    <View>
      <FlatList
        data={props.favourites}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default connect(mapStateToProps, null)(FavouritesScreen);
