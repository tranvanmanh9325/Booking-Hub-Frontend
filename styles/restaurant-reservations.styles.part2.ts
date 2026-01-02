/**
 * Styles Part 2 for Restaurant Reservations Page
 * Contains CSS styles for Security Info, Loyalty Features, CTA Modal, Testimonials sections,
 * Responsive Overrides, and JavaScript logic
 */

export const restaurantReservationsStylesPart2 = `<style>
/* Section 5: Security Info */
.security-info {
  padding: var(--spacing-4xl) var(--spacing-xl);
  background: var(--color-surface);
}

.security-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.security-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.security-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.security-card {
  padding: var(--spacing-2xl);
  background: var(--color-surface-elevated);
  border-radius: var(--border-radius-lg);
  transition: transform 0.3s;
}

.security-card:hover {
  transform: translateY(-5px);
}

.security-icon {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

.security-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
}

.security-desc {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

/* Section 6: Loyalty Features */
.loyalty-features {
  padding: var(--spacing-4xl) var(--spacing-xl);
  background: var(--color-surface-elevated);
}

.loyalty-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.loyalty-header {
  text-align: center;
  margin-bottom: var(--spacing-4xl);
}

.loyalty-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.loyalty-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.loyalty-icon-box {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  color: var(--color-on-primary);
  border-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.loyalty-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-md);
}

.loyalty-desc {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

/* Section 7: CTA Modal */
.cta-modal-section {
  padding: var(--spacing-4xl) var(--spacing-xl);
  text-align: center;
}

.floating-cta {
  box-shadow: 0 10px 30px rgba(0, 119, 204, 0.3);
}

.cta-dialog {
  border: none;
  padding: 0;
  border-radius: var(--border-radius-xl);
  max-width: 900px;
  width: 90%;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.cta-dialog::backdrop {
  background: var(--color-scrim);
  backdrop-filter: blur(4px);
}

.cta-modal-inner {
  display: flex;
}

.cta-modal-media {
  flex: 1;
  background: var(--color-neutral);
}

.cta-modal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-modal-content {
  flex: 1;
  padding: var(--spacing-4xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
}

.cta-form {
  margin-top: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.cta-form-buttons {
  display: flex;
  gap: var(--spacing-md);
}

/* Section 8: Testimonials */
.testimonials-carousel {
  padding: var(--spacing-4xl) var(--spacing-xl);
  background: var(--color-surface);
  overflow: hidden;
}

.testimonials-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.carousel-wrapper {
  margin-top: var(--spacing-3xl);
  position: relative;
}

.carousel-track {
  display: flex;
  gap: var(--spacing-xl);
  transition: transform 0.5s ease-in-out;
}

.testimonial-card {
  flex: 0 0 calc(33.333% - (var(--spacing-xl) * 2 / 3));
  background: var(--color-surface-elevated);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.testimonial-rating {
  display: flex;
  gap: 2px;
  color: #f1c40f;
}

.testimonial-text {
  font-style: italic;
  color: var(--color-on-surface);
  line-height: var(--line-height-body);
}

.testimonial-user {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-top: auto;
}

.user-avatar {
  width: 48px;
  height: 48px;
  background: var(--color-secondary);
  color: var(--color-on-secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-base);
}

.user-role {
  font-size: var(--font-size-xs);
  color: var(--color-on-surface-secondary);
}

.carousel-nav {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-3xl);
}

.text-center {
  text-align: center;
}

/* Responsive Overrides */
@media (max-width: 991px) {
  .availability-grid { flex-direction: column; }
  .partners-masonry { grid-template-columns: repeat(2, 1fr); }
  .security-grid, .loyalty-grid { grid-template-columns: repeat(2, 1fr); }
  .testimonial-card { flex: 0 0 calc(50% - (var(--spacing-xl) / 2)); }
  .cta-modal-inner { flex-direction: column; }
  .cta-modal-media { height: 250px; }
}

@media (max-width: 767px) {
  .hero-title { font-size: var(--font-size-3xl); }
  .steps-row { flex-direction: column; gap: var(--spacing-2xl); }
  .step-connector { display: none; }
  .partners-header { flex-direction: column; align-items: flex-start; }
  .testimonial-card { flex: 0 0 100%; }
}

@media (max-width: 479px) {
  .partners-masonry { grid-template-columns: 1fr; }
  .security-grid, .loyalty-grid { grid-template-columns: 1fr; }
  .form-group-row { flex-direction: column; }
  .cta-form-buttons { flex-direction: column; }
}
</style>`;

export const restaurantReservationsScript = `<script defer data-name="restaurant-booking-logic">
(function() {
  const modal = document.getElementById('ctaModal');
  const openBtn = document.getElementById('openCtaModal');
  const closeCtaBtn = document.getElementById('closeCtaModal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => {
      modal.showModal();
    });
  }

  if (closeCtaBtn && modal) {
    closeCtaBtn.addEventListener('click', () => {
      modal.close();
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.close();
      }
    });
  }

  const track = document.getElementById('testimonialTrack');
  const nextBtn = document.getElementById('nextTestimonial');
  const prevBtn = document.getElementById('prevTestimonial');
  
  if (track && nextBtn && prevBtn) {
    let index = 0;
    const cards = track.querySelectorAll('.testimonial-card');
    
    const updateCarousel = () => {
      const cardWidth = cards[0].offsetWidth + 24;
      track.style.transform = \`translateX(-\${index * cardWidth}px)\`;
    };

    nextBtn.addEventListener('click', () => {
      const visibleCount = window.innerWidth > 991 ? 3 : (window.innerWidth > 767 ? 2 : 1);
      if (index < cards.length - visibleCount) {
        index++;
        updateCarousel();
      } else {
        index = 0;
        updateCarousel();
      }
    });

    prevBtn.addEventListener('click', () => {
      if (index > 0) {
        index--;
        updateCarousel();
      } else {
        const visibleCount = window.innerWidth > 991 ? 3 : (window.innerWidth > 767 ? 2 : 1);
        index = cards.length - visibleCount;
        updateCarousel();
      }
    });

    window.addEventListener('resize', updateCarousel);
  }

  const filterBtns = document.querySelectorAll('.partners-filters .btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
})();
</script>`;