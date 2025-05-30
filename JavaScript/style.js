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

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function changeSlide(direction) {
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Initial display
  showSlide(currentSlide);

