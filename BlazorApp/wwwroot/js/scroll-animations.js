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