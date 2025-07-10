window.observeAboutFrame = (aboutId, frameClass) => {
    const section = document.getElementById(aboutId);
    if (!section) return;
    const frame = section.querySelector('.' + frameClass);
    if (!frame) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                frame.classList.add('visible');
                observer.disconnect();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(frame);
};

window.observePortfolioSection = (sectionId, className) => {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.classList.add(className);
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.classList.add('visible');
                    observer.disconnect();
                }
            });
        },
        { threshold: 0.2 }
    );
    observer.observe(section);
};

window.smoothScrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};