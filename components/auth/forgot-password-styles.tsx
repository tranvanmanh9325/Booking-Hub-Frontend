import React from 'react'
import ScriptHTML from 'dangerous-html/react'

export const ForgotPasswordStyles: React.FC = () => {
  return (
    <>
      <ScriptHTML
        html={`<style>
.login-section {
  display: flex;
  background: var(--color-surface);
  min-height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--spacing-4xl) var(--spacing-xl);
}

.login-media-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}

.login-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background: var(--color-scrim);
}

.login-content-wrapper {
  width: 100%;
  display: flex;
  z-index: 3;
  position: relative;
  justify-content: center;
  max-width: 500px;
}

.login-card {
  width: 100%;
  padding: var(--spacing-3xl);
  background: var(--color-surface);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-border);
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.login-icon-wrapper {
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

.login-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-sm);
}

.login-subtitle {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
}

.login-error-message {
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

.login-success-message {
  gap: var(--spacing-sm);
  display: flex;
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  background: color-mix(in oklab, #22c55e 10%, transparent);
  align-items: center;
  border-radius: var(--border-radius-md);
  border: 1px solid color-mix(in oklab, #22c55e 30%, transparent);
  color: #22c55e;
  font-size: var(--font-size-sm);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.login-form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.login-label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.login-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.login-input-icon {
  left: var(--spacing-md);
  color: var(--color-on-surface-secondary);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.login-input {
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

.login-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 10%, transparent);
}

.login-input::placeholder {
  color: var(--color-on-surface-secondary);
}

.login-input-error {
  border-color: #ef4444;
}

.login-input-error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px color-mix(in oklab, #ef4444 10%, transparent);
}

.login-field-error {
  color: #ef4444;
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-xs);
}

.login-submit-btn {
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
  margin-top: var(--spacing-lg);
}

.login-submit-btn:hover:not(:disabled) {
  background: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in oklab, var(--color-primary) 30%, transparent);
}

.login-submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.login-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-spinner {
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

.login-footer {
  text-align: center;
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.login-footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

.login-footer-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

.login-footer-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

@media (max-width: 767px) {
  .login-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
    min-height: calc(100vh - 60px);
  }
  
  .login-card {
    padding: var(--spacing-2xl);
  }
  
  .login-title {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 479px) {
  .login-card {
    padding: var(--spacing-xl);
  }
  
  .login-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .login-title {
    font-size: var(--font-size-xl);
  }
}
</style>`}
      />
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}