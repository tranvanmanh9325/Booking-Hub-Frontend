import React from 'react'

export const RegisterStyles = () => (
    <style jsx global>{`
    :root {
      --primary-color: #3b82f6;
      --primary-hover: #2563eb;
      --error-color: #ef4444;
      --success-color: #22c55e;
      --text-main: #111827;
      --text-secondary: #6b7280;
      --border-color: #e5e7eb;
      --bg-input: #f9fafb;
    }

    .register-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .register-section {
      display: flex;
      flex: 1;
      height: 100vh;
      overflow: hidden;
    }

    .register-media-container {
      display: none;
      flex: 1.2;
      position: relative;
      background-color: #1a1a1a;
    }

    @media (min-width: 1024px) {
      .register-media-container {
        display: block;
      }
    }

    .register-bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }

    .register-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2)
      );
    }

    .register-content-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background-color: #ffffff;
      position: relative;
      overflow-y: auto;
    }

    .register-card {
      width: 100%;
      max-width: 32rem; /* Slightly wider for register form */
      padding: 1rem 0;
    }

    .register-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .register-icon-wrapper {
      width: 3.5rem;
      height: 3.5rem;
      background-color: #eff6ff;
      color: var(--primary-color);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
    }

    .register-title {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }

    .register-subtitle {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* Messages */
    .register-error-message {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
      line-height: 1.4;
      background-color: #fef2f2;
      color: var(--error-color);
      border: 1px solid #fee2e2;
    }

    /* Form */
    .register-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .register-form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .register-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-main);
    }

    .register-optional {
        color: var(--text-secondary);
        font-weight: 400;
    }

    .register-input-wrapper {
      position: relative;
    }

    .register-input-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-secondary);
      pointer-events: none;
    }

    .register-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      font-size: 0.95rem;
      background-color: var(--bg-input);
      transition: all 0.2s;
      outline: none;
    }

    .register-input:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      background-color: #fff;
    }

    .register-input-error {
      border-color: var(--error-color);
    }

    .register-input-error:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      border-color: var(--error-color);
    }

    .register-field-error {
        font-size: 0.875rem;
        color: var(--error-color);
    }

    .register-password-toggle {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        color: var(--text-secondary);
        cursor: pointer;
        padding: 0;
        display: flex;
    }
    
    .register-password-toggle:hover {
        color: var(--text-main);
    }

    .register-checkbox-wrapper {
        display: flex;
        align-items: flex-start;
        gap: 0.75rem;
        cursor: pointer;
        user-select: none;
        margin-top: 0.5rem;
    }
    
    .register-checkbox {
        width: 1.125rem;
        height: 1.125rem;
        border-radius: 0.25rem;
        border: 1px solid var(--border-color);
        cursor: pointer;
        margin-top: 0.125rem;
    }

    .register-checkbox-label {
        font-size: 0.875rem;
        color: var(--text-secondary);
        line-height: 1.4;
    }

    .register-link {
        color: var(--primary-color);
        font-weight: 500;
        text-decoration: none;
    }
    
    .register-link:hover {
        text-decoration: underline;
    }

    /* Button */
    .register-submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      width: 100%;
      padding: 0.875rem;
      background-color: var(--primary-color);
      color: white;
      border: none;
      border-radius: 0.5rem;
      font-weight: 600;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.2s;
      margin-top: 0.5rem;
    }

    .register-submit-btn:hover:not(:disabled) {
      background-color: var(--primary-hover);
    }

    .register-submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    
    .register-divider {
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    .register-divider::before,
    .register-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: var(--border-color);
    }

    .register-divider span {
        padding: 0 1rem;
    }

    .register-social-buttons {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .register-social-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 0.75rem;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        font-weight: 500;
        background-color: #fff;
        cursor: pointer;
        transition: all 0.2s;
        font-size: 0.95rem;
    }
    
    .register-social-btn:hover:not(:disabled) {
        background-color: #f9fafb;
        border-color: #d1d5db;
    }
    
    .register-social-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    /* Footer */
    .register-footer {
      margin-top: 2rem;
      text-align: center;
      padding-bottom: 2rem;
    }

    .register-footer-text {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .register-footer-link {
      color: var(--primary-color);
      font-weight: 600;
      text-decoration: none;
      margin-left: 0.25rem;
      transition: color 0.2s;
    }

    .register-footer-link:hover {
      text-decoration: underline;
      color: var(--primary-hover);
    }
  `}</style>
)
