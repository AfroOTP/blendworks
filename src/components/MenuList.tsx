import React from 'react';

interface MenuItem {
  text: string;
  price: string;
}

interface MenuListProps {
  items: MenuItem[];
  styles: {
    main: string;
    [key: string]: string;
  };
}

const MenuList: React.FC<MenuListProps> = ({ items, styles }) => {
  const menuType = Object.keys(styles).find(key => key.includes('menu_wrap'))?.split('menu_wrap')[0] || '';
  
  return (
    <main className={styles.main}>
      <div className={styles[`${menuType}menu_wrap`]}>
        {items.map((item, index) => (
          <div key={index} className={styles[`${menuType}menu_item`]}>
            <span className={styles[`${menuType}menu_item_text`]}>{item.text}</span>
            <span className={styles[`${menuType}menu_item_dot`]}></span>
            <span className={styles[`${menuType}menu_item_price`]}>{item.price}</span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MenuList;