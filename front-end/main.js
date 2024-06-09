document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const resultsContainer = document.getElementById('results');


  function debounce(func, delay) {
    let timeout;
    return function(...args) {
      console.log(args)
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
    };
  }

  async function fetchResults(query) {
    if (query.length <= 3) {
      resultsContainer.innerHTML = '';
      return;
    }
    const response = await fetch(`http://localhost:3000/search?q=${query}`);
    const results = await response.json();
    displayResults(results);
    console.log(results)
  }

  function displayResults(results) {
    if (results.length === 0) {
      resultsContainer.innerHTML = '<p>No results found.</p>';
      return;
    }
    const resultsHTML = results.map(result => `<div class="border-b py-2 flex w-full"><h1>${result.name}</h1><img src=${result.image} /></div>`).join('');
    resultsContainer.innerHTML = resultsHTML;
  }

  const debouncedFetchResults = debounce(fetchResults, 300);

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
    debouncedFetchResults(query);
  });
});