/**
 * Styles Part 1 for Restaurant Reservations Page
 * Contains CSS styles for Hero Booking, Availability Search, Partners Gallery, and Booking Steps sections
 */

export const restaurantReservationsStylesPart1 = `<style>
/* Section 1: Hero Booking */
.hero-booking {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-surface);
}

.hero-booking-media {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.hero-booking-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-booking-overlay {
  position: absolute;
  inset: 0;
  background: var(--color-scrim);
  z-index: 2;
}

.hero-booking-container {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: var(--content-max-width);
  padding: var(--spacing-4xl) var(--spacing-xl);
  text-align: center;
}

.hero-booking-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-booking-content .hero-title {
  color: var(--color-surface);
  margin-bottom: var(--spacing-xl);
}

.hero-booking-content .hero-subtitle {
  color: var(--color-surface);
  margin-bottom: var(--spacing-3xl);
  font-size: var(--font-size-xl);
}

.hero-booking-actions {
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  flex-wrap: wrap;
}

/* Section 2: Availability Search */
.availability-search {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.availability-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.availability-grid {
  display: flex;
  gap: var(--spacing-4xl);
  align-items: center;
}

.availability-info, .availability-preview {
  flex: 1;
}

.availability-info .section-title {
  margin-bottom: var(--spacing-lg);
}

.availability-info .section-content {
  margin-bottom: var(--spacing-3xl);
  color: var(--color-on-surface-secondary);
}

.availability-form-wrapper {
  background: var(--color-surface);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.availability-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-group-row {
  display: flex;
  gap: var(--spacing-md);
}

.form-group-row .form-group {
  flex: 1;
}

.form-label {
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  color: var(--color-on-surface);
}

.form-input {
  padding: var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  font-family: var(--font-family-body);
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.btn-full {
  width: 100%;
}

.preview-card {
  background: var(--color-surface);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  border: 1px solid var(--color-border);
}

.preview-header {
  padding: var(--spacing-md) var(--spacing-xl);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--color-surface-elevated);
}

.preview-status {
  color: #2ecc71;
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  gap: 4px;
}

.preview-status::before {
  content: "";
  width: 8px;
  height: 8px;
  background: #2ecc71;
  border-radius: 50%;
}

.preview-time {
  font-size: var(--font-size-xs);
  color: var(--color-on-surface-secondary);
}

.preview-image-box {
  height: 200px;
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.preview-details {
  padding: var(--spacing-xl);
}

.preview-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-md);
}

.preview-meta {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
}

/* Section 3: Partners Gallery */
.partners-gallery {
  padding: var(--spacing-4xl) var(--spacing-xl);
  background: var(--color-surface);
}

.partners-header {
  max-width: var(--content-max-width);
  margin: 0 auto var(--spacing-3xl);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--spacing-2xl);
}

.partners-filters {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.partners-filters .btn.active {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.partners-masonry {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.partner-card {
  position: relative;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  cursor: pointer;
}

.partner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.partner-card:hover .partner-img {
  transform: scale(1.05);
}

.partner-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, var(--color-scrim) 0%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--spacing-xl);
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 2;
}

.partner-card:hover .partner-overlay {
  opacity: 1;
}

.partner-name {
  color: var(--color-surface);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.partner-info {
  color: var(--color-surface);
  font-size: var(--font-size-xs);
  margin-bottom: var(--spacing-sm);
  opacity: 0.9;
}

.partner-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #f1c40f;
  font-size: var(--font-size-xs);
  margin-bottom: var(--spacing-md);
}

.card-tall { grid-row: span 2; height: 600px; }
.card-medium { grid-row: span 1.5; height: 450px; }
.card-short { grid-row: span 1; height: 300px; }

/* Section 4: Booking Steps */
.booking-steps {
  padding: var(--spacing-4xl) var(--spacing-xl);
  background: var(--color-surface-elevated);
}

.steps-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.steps-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--spacing-4xl);
  gap: var(--spacing-md);
}

.step-item {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.step-icon-box {
  width: 80px;
  height: 80px;
  background: var(--color-surface);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  color: var(--color-primary);
}

.step-number {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  background: var(--color-accent);
  color: var(--color-on-accent);
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

.step-desc {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

.step-connector {
  flex: 0.5;
  height: 2px;
  background: var(--color-border);
  margin-bottom: 80px;
}
</style>`;