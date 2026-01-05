import Script from 'dangerous-html/react'

const PartnershipStyles: React.FC = () => {
  return (
    <Script
      html={`<style>
.partnership-wrapper {
  min-height: 100vh;
  background-color: var(--color-surface);
}

.partnership-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  padding: var(--spacing-4xl) var(--spacing-xl) var(--spacing-3xl);
  color: var(--color-surface);
  text-align: center;
}

.partnership-hero-content {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

.partnership-hero-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-heading);
  margin-bottom: var(--spacing-lg);
  color: var(--color-surface);
}

.partnership-hero-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.95;
  color: var(--color-surface);
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.partnership-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: var(--spacing-4xl) var(--spacing-xl);
}

.partnership-section-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-lg);
  text-align: center;
}

.partnership-section-description {
  font-size: var(--font-size-base);
  color: var(--color-on-surface-secondary);
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* Benefits Section */
.partnership-benefits {
  margin-bottom: var(--spacing-5xl);
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.benefit-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all 0.3s ease;
}

.benefit-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.benefit-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  border-radius: var(--border-radius-full);
}

.benefit-title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-sm);
}

.benefit-description {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  line-height: 1.6;
}

/* Partnership Types */
.partnership-types {
  margin-bottom: var(--spacing-5xl);
}

.partnership-types-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: var(--spacing-lg);
}

.partnership-type-card {
  background-color: var(--color-surface);
  border: 2px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.partnership-type-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.partnership-type-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-md);
}

.partnership-type-name {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

/* Form Section */
.partnership-form-section {
  background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 5%, transparent) 0%, color-mix(in srgb, var(--color-accent) 5%, transparent) 100%);
  padding: var(--spacing-4xl);
  border-radius: var(--border-radius-xl);
  margin-top: var(--spacing-4xl);
}

.partnership-form-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--spacing-4xl);
  align-items: start;
}

.partnership-form-content {
  background-color: var(--color-surface);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.partnership-form {
  margin-top: var(--spacing-2xl);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.form-group {
  margin-bottom: var(--spacing-lg);
}

.form-label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-xs);
}

.required {
  color: var(--color-primary);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--color-neutral);
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-family: var(--font-family-body);
  color: var(--color-on-surface);
  background-color: var(--color-surface);
  transition: all 0.2s ease;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.form-submit-btn {
  width: 100%;
  padding: var(--spacing-lg);
  background-color: var(--color-primary);
  color: var(--color-surface);
  border: none;
  border-radius: var(--border-radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: var(--spacing-lg);
}

.form-submit-btn:hover:not(:disabled) {
  background-color: var(--color-accent);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 30%, transparent);
}

.form-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-success {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background-color: color-mix(in srgb, #10b981 10%, transparent);
  color: #10b981;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.form-success svg {
  flex-shrink: 0;
}

.form-error {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background-color: color-mix(in srgb, #ef4444 10%, transparent);
  color: #ef4444;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.form-error svg {
  flex-shrink: 0;
}

/* Contact Info */
.partnership-contact-info {
  background-color: var(--color-surface);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 100px;
}

.contact-info-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-2xl);
}

.contact-info-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.contact-info-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.contact-info-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  border-radius: var(--border-radius-md);
  flex-shrink: 0;
}

.contact-info-label {
  font-size: var(--font-size-xs);
  color: var(--color-on-surface-secondary);
  margin-bottom: var(--spacing-xs);
}

.contact-info-value {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
}

.contact-info-value:hover {
  color: var(--color-primary);
}

@media (max-width: 991px) {
  .partnership-hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .partnership-form-wrapper {
    grid-template-columns: 1fr;
  }
  
  .partnership-contact-info {
    position: static;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .partnership-hero {
    padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-2xl);
  }
  
  .partnership-hero-title {
    font-size: var(--font-size-2xl);
  }
  
  .partnership-container {
    padding: var(--spacing-3xl) var(--spacing-lg);
  }
  
  .partnership-form-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
  
  .partnership-form-content,
  .partnership-contact-info {
    padding: var(--spacing-xl);
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
  }
  
  .partnership-types-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 479px) {
  .partnership-types-grid {
    grid-template-columns: 1fr;
  }
}
</style>`}
    />
  )
}

export default PartnershipStyles
