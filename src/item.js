import "./item.css";
import { Tag } from "./tag";

export function Item({ price, title, link, image }) {
  return (
    <div className="container-item">
      <div className="image-container">
        <img className="item-image" alt="Item image" src={image} />
      </div>
      <div className="text-container">
        <a href={link} className="item-title">
          {title}
        </a>
        <h4 className="item-price">
          AUD$ <span className="item-price-span">{price}</span>
          <div className="tags">
            <Tag tagText={"hello"} />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </div>
        </h4>
      </div>
    </div>
  );
}
