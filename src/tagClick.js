export const handleTagClick = (tagText, setSearchQuery, onSearch, event) => {
  setSearchQuery(tagText);
  return false;
};
