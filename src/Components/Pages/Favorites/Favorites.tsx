import React, { Component } from "react";
import { connect } from "react-redux";
import "./Favorites.css";
// @ts-ignore
import Card from "../../../Reusables/Card/Card";
import PropertyHelper from "../../../Utils/PropertyHelper";
import { Property } from "../../../Utils/Property";

interface FavoritesProps {
  favorites: Property[];
}

class Favorites extends Component<FavoritesProps> {
  render() {
    const { favorites } = this.props;

    return (
      <div className="container">
        <h2>Your Favorite Properties</h2>
        <div className="cardsContainer">
          {favorites.length > 0 ? (
            favorites.map((item) => (
              <Card
                key={item.id}
                item={{
                  ...item,
                  formattedPrice: PropertyHelper.formatPrice(item.price),
                  formattedAddress: PropertyHelper.formatAddress(item.address),
                }}
              />
            ))
          ) : (
            <p>You have no favorite properties.</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  favorites: state.user.favorites,
});

export default connect(mapStateToProps)(Favorites);