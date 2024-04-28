// TransactionsSearch.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons';



function TransactionsSearch({ filterTransactions }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    filterTransactions(searchTerm);
  };
const searchIcon = <FontAwesomeIcon icon={faSearch} />
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search your Recent Transactions"
      />
        <button id='transaction-search' onClick={handleSearch}>
          {searchIcon} 
        </button>
    </div>
  );
}

export default TransactionsSearch;
