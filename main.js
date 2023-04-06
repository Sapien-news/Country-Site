
// get all the text-line elements
const textLines = document.querySelectorAll('.text-line');

// create a new Intersection Observer
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // add the "animate" class to the text-line element
        entry.target.classList.add('animate');
        // unobserve the target element
        observer.unobserve(entry.target);
      }
    });
  },
  {
    rootMargin: '0px',
    threshold: 0.1
  }
);

// observe each text-line element
textLines.forEach(line => observer.observe(line));