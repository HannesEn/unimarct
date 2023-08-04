import "./item.css";
import { Tag } from "./tag";

export function Item({ price, title, link, image, tag }) {
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
          <div className="tags">{tag}</div>
        </h4>
      </div>
    </div>
  );
}
