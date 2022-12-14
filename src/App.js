import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import './css/app.css';
import {useDispatch} from 'react-redux';
import {inputSearchChange, selectedBranchIdsChange, selectedTypeIdsChange, categoryIdChange, priceStartChange, priceEndChange} from './redux/actions';


function App() {
  const dispatch = useDispatch();

  const [inputSearch, setInputSearch] = useState('');
  const [selectedBranchIds, setSelectedBranchIds] = useState([]);
  const [selectedTypeIds, setSelectedTypeIds] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [priceStart, setPriceStart] = useState('');
  const [priceEnd, setPriceEnd] = useState('');

  const clearFilter = () => {
    setInputSearch('');
    setSelectedBranchIds([]);
    setSelectedTypeIds([]);
    setCategoryId('');
    setPriceStart('');
    setPriceEnd('');

    dispatch(inputSearchChange(''));
    dispatch(selectedBranchIdsChange([]));
    dispatch(selectedTypeIdsChange([]));
    dispatch(categoryIdChange(''));
    dispatch(priceStartChange(''));
    dispatch(priceEndChange(''));
  };

  return (
    <div className="container-fluid">
      <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <div className="content-wrapper">
        <Menu
          selectedBranchIds={selectedBranchIds}
          setSelectedBranchIds={setSelectedBranchIds}
          selectedTypeIds={selectedTypeIds}
          setSelectedTypeIds={setSelectedTypeIds}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
          clearFilter={clearFilter}
          priceStart={priceStart}
          setPriceStart={setPriceStart}
          priceEnd={priceEnd}
          setPriceEnd={setPriceEnd} />
        <Main />
      </div>
    </div>
  );
}

export default App;
