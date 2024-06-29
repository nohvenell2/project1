import React, { useState } from 'react';

function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // 검색 버튼을 눌렀을 때의 동작을 여기에 작성합니다.
    const GoogleKey = process.env.REACT_APP_API_GOOGLEKEY;
    console.log(GoogleKey);
    const GoogleId = process.env.REACT_APP_API_GOOGLEID;
    console.log(GoogleId);
    const GoogleApi = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${GoogleKey}&cx=${GoogleId}`;
    console.log(GoogleApi);
    fetch(GoogleApi)    
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        window.location.href = data['items'][0]['link'];
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    }); 

  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={styles.container}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="검색어를 입력하세요"
        style={styles.input}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch} style={styles.button}>
        검색
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '300px',
  },
  input: {
    flex: 1,
    padding: '8px',
    fontSize: '16px',
    borderRadius: '4px 0 0 4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '8px 16px',
    fontSize: '16px',
    borderRadius: '0 4px 4px 0',
    border: '1px solid #ccc',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  },
};

export default SearchBar;
