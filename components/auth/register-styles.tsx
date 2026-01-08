import React from 'react'
import ScriptHTML from 'dangerous-html/react'

export const RegisterStyles: React.FC = () => {
  return (
    <>
      <ScriptHTML
        html={`<style>
.register-section {
  display: flex;
  background: var(--color-surface);
  min-height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--spacing-4xl) var(--spacing-xl);
}

.register-media-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}

.register-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.register-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background: var(--color-scrim);
}

.register-content-wrapper {
  width: 100%;
  display: flex;
  z-index: 3;
  position: relative;
  justify-content: center;
  max-width: 550px;
}

.register-card {
  width: 100%;
  padding: var(--spacing-3xl);
  background: var(--color-surface);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-border);
  max-height: 90vh;
  overflow-y: auto;
}

.register-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.register-icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  margin: 0 auto var(--spacing-lg);
  background: color-mix(in oklab, var(--color-primary) 10%, transparent);
  align-items: center;
  border-radius: var(--border-radius-full);
  justify-content: center;
  color: var(--color-primary);
}

.register-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-sm);
}

.register-subtitle {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
}

.register-error-message {
  gap: var(--spacing-sm);
  display: flex;
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  background: color-mix(in oklab, #ef4444 10%, transparent);
  align-items: center;
  border-radius: var(--border-radius-md);
  border: 1px solid color-mix(in oklab, #ef4444 30%, transparent);
  color: #ef4444;
  font-size: var(--font-size-sm);
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.register-form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.register-label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.register-optional {
  color: var(--color-on-surface-secondary);
  font-weight: var(--font-weight-body);
  font-size: var(--font-size-xs);
}

.register-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.register-input-icon {
  left: var(--spacing-md);
  color: var(--color-on-surface-secondary);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.register-input {
  width: 100%;
  border: 1px solid var(--color-border);
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 48px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  background: var(--color-surface-elevated);
  transition: all 0.2s ease;
  border-radius: var(--border-radius-control);
  color: var(--color-on-surface);
}

.register-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 10%, transparent);
}

.register-input::placeholder {
  color: var(--color-on-surface-secondary);
}

.register-input-error {
  border-color: #ef4444;
}

.register-input-error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px color-mix(in oklab, #ef4444 10%, transparent);
}

.register-password-toggle {
  right: var(--spacing-md);
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  position: absolute;
  background: none;
  color: var(--color-on-surface-secondary);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-password-toggle:hover {
  color: var(--color-primary);
}

.register-field-error {
  color: #ef4444;
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-xs);
}

.register-checkbox-wrapper {
  gap: var(--spacing-sm);
  cursor: pointer;
  display: flex;
  align-items: flex-start;
}

.register-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--color-primary);
  margin-top: 2px;
  flex-shrink: 0;
}

.register-checkbox-label {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  user-select: none;
  line-height: 1.5;
}

.register-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

.register-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

.register-submit-btn {
  width: 100%;
  border: none;
  cursor: pointer;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-primary);
  background: var(--color-primary);
  transition: all 0.3s ease;
  border-radius: var(--border-radius-control);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.register-submit-btn:hover:not(:disabled) {
  background: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in oklab, var(--color-primary) 30%, transparent);
}

.register-submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.register-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.register-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.register-divider {
  display: flex;
  align-items: center;
  margin: var(--spacing-3xl) 0;
  text-align: center;
}

.register-divider::before,
.register-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--color-border);
}

.register-divider span {
  padding: 0 var(--spacing-lg);
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
}

.register-social-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.register-social-btn {
  width: 100%;
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  background: var(--color-surface);
  transition: all 0.2s ease;
  border-radius: var(--border-radius-control);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  color: var(--color-on-surface);
}

.register-social-btn:hover:not(:disabled) {
  background: var(--color-surface-elevated);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.register-social-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.register-social-btn svg {
  flex-shrink: 0;
}

.register-footer {
  text-align: center;
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.register-footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

.register-footer-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

.register-footer-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

@media (max-width: 767px) {
  .register-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
    min-height: calc(100vh - 60px);
  }
  
  .register-card {
    padding: var(--spacing-2xl);
    max-height: 95vh;
  }
  
  .register-title {
    font-size: var(--font-size-2xl);
  }
  
  .register-form {
    gap: var(--spacing-md);
  }
}

@media (max-width: 479px) {
  .register-card {
    padding: var(--spacing-xl);
  }
  
  .register-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .register-title {
    font-size: var(--font-size-xl);
  }
  
  .register-checkbox-label {
    font-size: var(--font-size-xs);
  }
}
</style>`}
      />
      <style jsx>
        {`
          .register-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}