import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Icon from "../components/Icon";
import { addToFavourites } from "../redux/actionCreators";
const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToFavourites: (dish) => dispatch(addToFavourites(dish)),
  };
};

const DishDetailScreen = (props) => {
  const dish = props.route.params.dish;

  const markFavourite = (dish) => {
    if (isFavourite) {
      alert("Already added to favourites!");
    } else {
      props.addToFavourites(dish);
    }
  };

  const isFavourite = props.favourites.some((item) => item.id === dish.id);

  return (
    <View>
      <Image style={styles.image} source={{ uri: dish.image }} />
      <View style={styles.details}>
        {/* <Text style={styles.name}>{dish.name}</Text> */}
        <Icon
          action={() => markFavourite(dish)}
          name={isFavourite ? "ios-heart" : "ios-heart-empty"}
          color="#F53B50"
          size={39}
          iconStyle={{
            padding: 10,
          }}
        />
        <Text>{dish.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  details: {
    padding: 10,
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DishDetailScreen);
