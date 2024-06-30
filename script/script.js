document.addEventListener('DOMContentLoaded', () => {
  const options = {
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startTypingAnimation(entry.target);
        observer.unobserve(entry.target); // Прекратить наблюдение за секцией
      }
    });
  }, options);

  document.querySelectorAll('.screen-text p').forEach(p => {
    observer.observe(p);
  });

  function startTypingAnimation(element) {
    const paragraphs = document.querySelectorAll('.screen-text p');
    let currentIndex = 0;

    function typeNextParagraph() {
      if (currentIndex < paragraphs.length) {
        const p = paragraphs[currentIndex];
        p.classList.add('typing');
        p.addEventListener('animationend', () => {
          const span = p.querySelector('.new-line');
          if (span) {
            span.classList.add('typing');
            span.addEventListener('animationend', () => {
              currentIndex++;
              typeNextParagraph();
            }, { once: true });
          } else {
            currentIndex++;
            typeNextParagraph();
          }
        }, { once: true });
      }
    }

  typeNextParagraph();
  }
});