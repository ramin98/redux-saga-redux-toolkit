import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGoods } from './reducers';

function GoodsComponent() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector(state => state.goods);

  useEffect(() => {
    dispatch(fetchGoods());
  }, [dispatch]);

  // Рендеринг состояния загрузки, ошибки и товаров

  return (
    <div>
      <h2>Goods</h2>
      <ul>
        {items.map(good => <li key={good.id}>{good.product_name}</li>)}
      </ul>
    </div>
  );
};

export default GoodsComponent;
