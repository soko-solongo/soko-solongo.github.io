const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.style.opacity = entry.isIntersecting ? 1 : 0;
    });
}, { rootMargin: "-20% 0% -20% 0%" });

document.querySelectorAll("section").forEach(section => {
    sectionObserver.observe(section);
});