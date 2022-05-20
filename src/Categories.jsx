const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((item, index) => (
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems(item)}
          key={index}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Categories;
