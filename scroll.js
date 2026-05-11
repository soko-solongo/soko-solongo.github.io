const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.style.filter = entry.isIntersecting ? 'grayscale(0%)' : 'grayscale(100%)';
    });
}, { rootMargin: "-30% 0% -30% 0%" });

document.querySelectorAll("section").forEach(section => {
    sectionObserver.observe(section);
});