const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, img, title, category, desc, price } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} />
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
