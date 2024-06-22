import React, { useState } from "react";
import styles from "./Properties.module.css";
import { listData } from "../../../Data/DummyData";
import Card from "../../../Reusables/Card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const PropertiesList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter the data based on the search query
  const filteredData = listData.filter((item) => {
    const title = item.title ? item.title.toLowerCase() : "";
    const city = item.city ? item.city.toLowerCase() : "";
    const address = item.address ? item.address.toLowerCase() : "";
    const query = searchQuery.toLowerCase();

    return (
      title.includes(query) || city.includes(query) || address.includes(query)
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.inputIconBox}>
        <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
        <div className={styles.inputBox}>
          <input
            type="search"
            placeholder="Search by title/ city/ address..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.propertiesList}>
        {filteredData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PropertiesList;