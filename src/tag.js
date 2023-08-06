import "./tag.css";
export function Tag({ tagText, onClick }) {
  return (
    <h4 className="tag-file-main" onClick={() => onClick(tagText)}>
      #{tagText}
    </h4>
  );
}
