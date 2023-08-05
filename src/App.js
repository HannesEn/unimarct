import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import { Item } from "./item";
import heavy from "./falcon-heavy.jpeg";
import vertical from "./vertical.jpeg";
import starship from "./starship.jpeg";
import { Tag } from "./tag";
import { tagSimple } from "./tagSimple";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const items = [
    {
      id: 1,
      title: "Falcon Heavy",
      price: 24.99,
      image: starship,
      tag: [<Tag tagText={"space"} />, <Tag tagText={"rocket"} />],
    },
    {
      id: 2,
      title: "Satellite Launcher",
      price: 15.99,
      image: heavy,
      tag: [<Tag tagText={"communication"} />, <Tag tagText={"technology"} />],
    },
  ];

  const filteredItems = items.filter((item) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const itemTags = item.tag.map((tag) => tag.props.tagText.toLowerCase());

    return (
      item.title.toLowerCase().includes(lowerCaseQuery) ||
      itemTags.includes(lowerCaseQuery)
    );
  });
  return (
    <div className="App">
      <Nav onSearch={(query) => setSearchQuery(query)} />
      <div className="browse-container">
        <h1 className="browse-title">Browse</h1>
        <hr className="browse-hr" />
      </div>
      <div className="item-div">
        {filteredItems.map((item, index) => (
          <Item
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            tag={item.tag}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
