import React, { Component } from "react";
import "./Properties.css";
import { listData } from "../../../Data/DummyData";
// @ts-ignore
import Card from "../../../Reusables/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PropertyHelper from "../../../Utils/PropertyHelper";
import { Property } from "../../../Utils/Property";

interface PropertiesListState {
  searchQuery: string;
  filteredData: Property[];
}

class PropertiesList extends Component<{}, PropertiesListState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      searchQuery: "",
      filteredData: listData,
    };
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    const filteredData = PropertyHelper.filterProperties(listData, searchQuery);
    this.setState({ searchQuery, filteredData });
  };

  render() {
    const { searchQuery, filteredData } = this.state;

    return (
      <div className="container">
        <div className="inputIconBox">
          <FontAwesomeIcon className="icon" icon={faLocationDot} />
          <div className="inputBox">
            <input
              type="search"
              placeholder="Search by title/ city/ address..."
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
          </div>
        </div>

        <div className="propertiesList">
          {filteredData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default PropertiesList;