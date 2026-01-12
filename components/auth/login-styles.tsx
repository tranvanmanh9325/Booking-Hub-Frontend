import React from 'react'

export const LoginStyles = () => (
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

    .login-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .login-section {
      display: flex;
      flex: 1;
      height: 100vh;
      overflow: hidden;
    }

    .login-media-container {
      display: none;
      flex: 1.2;
      position: relative;
      background-color: #1a1a1a;
    }

    @media (min-width: 1024px) {
      .login-media-container {
        display: block;
      }
    }

    .login-bg-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.9;
    }

    .login-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom right,
        rgba(0, 0, 0, 0.4),
        rgba(0, 0, 0, 0.2)
      );
    }

    .login-content-wrapper {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background-color: #ffffff;
      position: relative;
    }

    .login-card-content {
        width: 100%;
        max-width: 28rem;
        background: transparent;
        box-shadow: none;
        border: none;
        padding: 0;
    }

    .login-header {
      text-align: center;
      margin-bottom: 2.5rem;
    }

    .login-icon-wrapper {
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

    .login-title {
      font-size: 1.875rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.75rem;
      line-height: 1.2;
    }

    .login-subtitle {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* Messages */
    .login-error-message {
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
    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .login-form-options {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 0.5rem;
    }

    .login-checkbox-wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        user-select: none;
    }

    .login-checkbox {
        width: 1rem;
        height: 1rem;
        border-radius: 0.25rem;
        border: 1px solid var(--border-color);
        cursor: pointer;
    }

    .login-checkbox-label {
        font-size: 0.875rem;
        color: var(--text-secondary);
    }

    .login-forgot-link {
        font-size: 0.875rem;
        font-weight: 500;
        color: var(--primary-color);
        text-decoration: none;
    }

    .login-forgot-link:hover {
        text-decoration: underline;
    }

    .login-divider {
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
        color: var(--text-secondary);
        font-size: 0.875rem;
    }

    .login-divider::before,
    .login-divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background-color: var(--border-color);
    }

    .login-divider span {
        padding: 0 1rem;
    }

    .login-social-buttons {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .login-social-btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        font-weight: 500;
    }

    /* Footer */
    .login-footer {
      margin-top: 2rem;
      text-align: center;
    }

    .login-footer-text {
      color: var(--text-secondary);
      font-size: 0.875rem;
    }

    .login-footer-link {
      color: var(--primary-color);
      font-weight: 600;
      text-decoration: none;
      margin-left: 0.25rem;
      transition: color 0.2s;
    }

    .login-footer-link:hover {
      text-decoration: underline;
      color: var(--primary-hover);
    }
  `}</style>
)
