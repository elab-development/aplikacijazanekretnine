import React, { Component } from "react";
import "./Properties.css";
import { listData } from "../../../Data/DummyData";
// @ts-ignore
import Card from "../../../Reusables/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import PropertyHelper from "../../../Utils/PropertyHelper";
import { Property } from "../../../Utils/Property";

interface PropertiesListProps {
  setAuthModule: (module: string) => void;
}

interface PropertiesListState {
  searchQuery: string;
  filteredData: Property[];
  displayedCount: number;
}

  class PropertiesList extends Component<
  PropertiesListProps,
  PropertiesListState
  > {
constructor(props: PropertiesListProps) {
    super(props);
    this.state = {
      searchQuery: "",
      filteredData: listData,
      displayedCount: 10,
    };
  }

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    const filteredData = PropertyHelper.filterProperties(listData, searchQuery);
    this.setState({ searchQuery, filteredData, displayedCount: 10 });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      displayedCount: Math.max(prevState.displayedCount - 10, 10),
    }));
  };

  handleLoadLess = () => {
    this.setState((prevState) => ({
      displayedCount: Math.max(prevState.displayedCount - 10, 10), // Decrease the displayed count by 10 but not less than the initial count
    }));
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      displayedCount: prevState.displayedCount + 10, // Increase the displayed count by 10
    }));
  };

  handleLoadLess = () => {
    this.setState((prevState) => ({
      displayedCount: Math.max(prevState.displayedCount - 10, 10), // Decrease the displayed count by 10 but not less than the initial count
    }));
  };

  render() {
    const { searchQuery, filteredData, displayedCount } = this.state;
    const { setAuthModule } = this.props;
    const dataToDisplay = filteredData.slice(0, displayedCount);

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
          {dataToDisplay.map((item) => (
            <Card key={item.id} item={item} setAuthModule={setAuthModule} />
          ))}
        </div>
        <div className="loadButtons">
          {displayedCount < filteredData.length && (
            <button className="load-more-btn" onClick={this.handleLoadMore}>
              Load More
            </button>
          )}
          {displayedCount > 10 && (
            <button className="load-more-btn" onClick={this.handleLoadLess}>
              Load Less
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default PropertiesList;