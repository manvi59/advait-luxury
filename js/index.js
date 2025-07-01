const imageItems = document.querySelectorAll('.image-item');
  const isMobile = window.innerWidth <= 768;

  imageItems.forEach((item) => {
    if (isMobile) {
      // Touch/Click behavior for mobile
      item.addEventListener('click', () => {
        imageItems.forEach((el) => {
          el.classList.remove('hovered', 'not-hovered', 'center-item');
          if (el !== item) {
            el.classList.add('not-hovered');
          } else {
            el.classList.add('hovered');
          }
        });
      });
    } else {
      // Hover behavior for desktop
      item.addEventListener('mouseenter', () => {
        imageItems.forEach((el) => {
          el.classList.remove('hovered', 'not-hovered', 'center-item');
          if (el !== item) {
            el.classList.add('not-hovered');
          } else {
            el.classList.add('hovered');
          }
        });
      });

      item.addEventListener('mouseleave', () => {
        imageItems.forEach((el) => {
          el.classList.remove('hovered', 'not-hovered');
        });
        // Restore center image if needed
        document.querySelector('.image-flex-wrapper .image-item:nth-child(2)').classList.add('center-item');
      });
    }
  });