import React, { useState } from "react";
import "./App.css";
import Nav from "./Nav";
import { Item } from "./item";
import heavy from "./falcon-heavy.jpeg";
import vertical from "./vertical.jpeg";
import starship from "./starship.jpeg";
import { Tag } from "./tag";
import { tagSimple } from "./tagSimple";
import backpack from "./backpack.webp";
import book from "./book.jpeg";
import globe from "./globe.avif";
import jwst from "./jwst.jpg";
import modelRocket from "./modelRocket.jpeg";
import rover from "./rover.jpeg";
import solarSystem from "./solarSystem.jpeg";
import spaceSuit from "./spaceSuit.jpeg";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const maxLength = 11;

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
    {
      id: 3,
      title: "Mars Rover Model",
      price: 79.99,
      image: rover,
      tag: [<Tag tagText={"space"} />, <Tag tagText={"science"} />],
    },
    {
      id: 4,
      title: "Telescope Kit",
      price: 129.99,
      image: jwst,
      tag: [<Tag tagText={"science"} />, <Tag tagText={"astronomy"} />],
    },
    {
      id: 5,
      title: "Astronaut Space Suit",
      price: 499.99,
      image: spaceSuit,
      tag: [<Tag tagText={"space"} />, <Tag tagText={"fashion"} />],
    },
    {
      id: 6,
      title: "Planetary Globe",
      price: 34.99,
      image: globe,
      tag: [<Tag tagText={"education"} />, <Tag tagText={"geography"} />],
    },
    {
      id: 7,
      title: "Solar System Poster",
      price: 9.99,
      image: solarSystem,
      tag: [<Tag tagText={"education"} />, <Tag tagText={"art"} />],
    },
    {
      id: 8,
      title: "Rocket Building Kit",
      price: 59.99,
      image: modelRocket,
      tag: [<Tag tagText={"science"} />, <Tag tagText={"DIY"} />],
    },
    {
      id: 9,
      title: "Space-themed Backpack",
      price: 39.99,
      image: backpack,
      tag: [<Tag tagText={"fashion"} />, <Tag tagText={"travel"} />],
    },
    {
      id: 10,
      title: "Astronomy Book Set",
      price: 69.99,
      image: book,
      tag: [<Tag tagText={"education"} />, <Tag tagText={"books"} />],
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
        {filteredItems.map((item, index) => {
          const truncatedTitle =
            item.title.length > maxLength
              ? item.title.substring(0, maxLength) + "..."
              : item.title;
          return (
            <Item
              key={item.id}
              title={truncatedTitle}
              price={item.price}
              image={item.image}
              tag={item.tag}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
