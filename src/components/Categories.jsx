import React, { useState } from 'react'

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  const onClickCategory = (index) => {
    setActiveIndex(index)
    window.scrollBy(0, 2400);
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((value, index) => 
          <li onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''} key={index}>
            {value}
          </li>)}
      </ul>
    </div>
  );
};

export default Categories;
