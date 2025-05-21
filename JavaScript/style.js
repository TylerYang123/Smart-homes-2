function handleSearch() {
    const input = document.getElementById("searchInput").value.trim();
    if (input) {
      alert("You searched for: " + input);
      // You can replace this with redirecting or filtering results
      // e.g., window.location.href = `/search?q=${encodeURIComponent(input)}`
    } else {
      alert("Please enter a search term.");
    }
  }
  