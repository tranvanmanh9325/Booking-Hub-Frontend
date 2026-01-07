import Script from 'dangerous-html/react'

const BookingGuideStyles: React.FC = () => {
  return (
    <Script
      html={`<style>
.booking-guide-wrapper {
  min-height: 100vh;
  background-color: var(--color-surface);
}

.booking-guide-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  padding: var(--spacing-4xl) var(--spacing-xl) var(--spacing-3xl);
  color: var(--color-surface);
  text-align: center;
}

.booking-guide-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.booking-guide-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-heading);
  margin-bottom: var(--spacing-md);
  color: var(--color-surface);
}

.booking-guide-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-3xl);
  opacity: 0.95;
  color: var(--color-surface);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.booking-guide-content {
  padding: var(--spacing-4xl) 0;
}

.guide-steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-4xl);
}

.guide-step-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.guide-step-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.step-number {
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 120px;
  font-weight: 900;
  color: color-mix(in srgb, var(--color-primary) 5%, transparent);
  font-family: var(--font-family-heading);
  line-height: 1;
  pointer-events: none;
}

.step-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.step-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 1;
}

.step-description {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-base);
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.important-notes-section {
  background-color: color-mix(in srgb, var(--color-surface) 95%, var(--color-neutral));
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-3xl);
  margin-bottom: var(--spacing-4xl);
}

.notes-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.note-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.note-icon {
  color: var(--color-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.note-content h4 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
  margin: 0 0 var(--spacing-xs) 0;
}

.note-content p {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-base);
  margin: 0;
  line-height: 1.5;
}

.cta-section {
  text-align: center;
  padding: var(--spacing-2xl) 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background-color: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--spacing-md) var(--spacing-3xl);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-heading);
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 40%, transparent);
}

.cta-button:hover {
  background-color: color-mix(in srgb, var(--color-primary) 90%, black);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px color-mix(in srgb, var(--color-primary) 50%, transparent);
}

@media (max-width: 767px) {
  .booking-guide-hero {
    padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-2xl);
  }
  
  .booking-guide-title {
    font-size: var(--font-size-3xl);
  }
  
  .step-number {
    font-size: 80px;
    top: -10px;
    right: -10px;
  }
  
  .guide-steps-grid {
    gap: var(--spacing-xl);
  }
  
  .important-notes-section {
    padding: var(--spacing-xl);
  }
}
</style>`}
    />
  )
}

export default BookingGuideStyles
