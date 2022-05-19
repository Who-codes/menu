const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, img, title, desc, price } = item;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h3>{title}</h3>
                <h4 className="price">${price}</h4>
              </header>
              <p className="i">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
