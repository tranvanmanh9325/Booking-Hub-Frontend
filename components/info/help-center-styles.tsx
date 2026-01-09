import Script from 'dangerous-html/react'

const HelpCenterStyles: React.FC = () => {
  return (
    <Script
      html={`<style>
.help-center-wrapper {
  min-height: 100vh;
  background-color: var(--color-surface);
}

.help-center-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
  padding: var(--spacing-4xl) var(--spacing-xl) var(--spacing-3xl);
  color: var(--color-surface);
  text-align: center;
}

.help-center-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.help-center-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-heading);
  margin-bottom: var(--spacing-md);
  color: var(--color-surface);
}

.help-center-subtitle {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-3xl);
  opacity: 0.95;
  color: var(--color-surface);
}

.help-center-search {
  max-width: 700px;
  margin: 0 auto;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--color-surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.search-icon {
  color: var(--color-on-surface-secondary);
  margin-right: var(--spacing-md);
  flex-shrink: 0;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: var(--font-size-base);
  color: var(--color-on-surface);
  background: transparent;
}

.search-input::placeholder {
  color: var(--color-on-surface-secondary);
}

.search-clear {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-on-surface-secondary);
  padding: var(--spacing-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  transition: all 0.2s ease;
}

.search-clear:hover {
  background-color: var(--color-neutral);
  color: var(--color-on-surface);
}

.help-center-content {
  padding: var(--spacing-4xl) 0;
}

.help-section {
  margin-bottom: var(--spacing-4xl);
}

.help-section-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-2xl);
}

.help-section-description {
  font-size: var(--font-size-base);
  color: var(--color-on-surface-secondary);
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xl);
  background-color: var(--color-surface);
  border: 2px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.category-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.category-card.active {
  border-color: var(--color-primary);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
}

.category-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-primary);
}

.category-icon svg {
  width: 100%;
  height: 100%;
}

.category-name {
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-3xl);
}

.faq-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.faq-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.faq-card-question {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
  margin: 0;
  flex: 1;
}

.faq-card-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-card-icon.expanded {
  transform: rotate(180deg);
}

.faq-card-answer {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-neutral);
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.6;
}

.faq-card-answer p {
  margin: var(--spacing-xs) 0;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.faq-item {
  background-color: var(--color-surface);
  border: 1px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.faq-item.expanded {
  border-color: var(--color-primary);
}

.faq-item-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-lg);
  padding: var(--spacing-lg);
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-item-question {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
  margin: 0;
  flex: 1;
}

.faq-item-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-item.expanded .faq-item-icon {
  transform: rotate(180deg);
}

.faq-item-answer {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
  line-height: 1.7;
  animation: fadeIn 0.3s ease;
}

.faq-item-answer p {
  margin: var(--spacing-sm) 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.no-results {
  text-align: center;
  padding: var(--spacing-4xl) var(--spacing-xl);
  color: var(--color-on-surface-secondary);
}

.no-results svg {
  color: var(--color-on-surface-secondary);
  margin-bottom: var(--spacing-lg);
  opacity: 0.5;
}

.no-results h3 {
  font-size: var(--font-size-xl);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-sm);
}

.contact-section {
  background: linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 5%, transparent) 0%, color-mix(in srgb, var(--color-accent) 5%, transparent) 100%);
  padding: var(--spacing-4xl);
  border-radius: var(--border-radius-xl);
  text-align: center;
}

.contact-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-3xl);
}

.contact-card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-neutral);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-2xl);
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.contact-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.contact-icon {
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-full);
  background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-sm);
}

.contact-card h3 {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin: 0;
}

.contact-card p {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  margin: 0;
}

.contact-action {
  font-size: var(--font-size-xs);
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  margin-top: var(--spacing-xs);
}

@media (max-width: 991px) {
  .help-center-title {
    font-size: var(--font-size-3xl);
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .categories-grid {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
}

@media (max-width: 767px) {
  .help-center-hero {
    padding: var(--spacing-3xl) var(--spacing-lg) var(--spacing-2xl);
  }
  
  .help-center-title {
    font-size: var(--font-size-2xl);
  }
  
  .help-center-subtitle {
    font-size: var(--font-size-base);
  }
  
  .help-center-content {
    padding: var(--spacing-3xl) 0;
  }
  
  .contact-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }
  
  .contact-options {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 479px) {
  .help-center-container {
    padding: 0 var(--spacing-lg);
  }
  
  .category-card {
    padding: var(--spacing-lg);
  }
}
</style>`}
    />
  )
}

export default HelpCenterStyles