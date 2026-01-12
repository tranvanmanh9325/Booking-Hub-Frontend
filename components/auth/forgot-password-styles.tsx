import React from 'react'

export const ForgotPasswordStyles = () => (
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

    .login-card {
      width: 100%;
      max-width: 28rem;
      animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
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
    .login-error-message, .login-success-message {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1.5rem;
      font-size: 0.875rem;
      line-height: 1.4;
    }

    .login-error-message {
      background-color: #fef2f2;
      color: var(--error-color);
      border: 1px solid #fee2e2;
    }

    .login-success-message {
      background-color: #f0fdf4;
      color: var(--success-color);
      border: 1px solid #dcfce7;
    }

    /* Form */
    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .login-form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .login-label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-main);
    }

    .login-input-wrapper {
      position: relative;
    }

    .login-input-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-secondary);
      pointer-events: none;
    }

    .login-input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.75rem;
      border: 1px solid var(--border-color);
      border-radius: 0.5rem;
      font-size: 0.95rem;
      background-color: var(--bg-input);
      transition: all 0.2s;
      outline: none;
    }

    .login-input:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
      background-color: #fff;
    }

    .login-input-error {
      border-color: var(--error-color);
    }

    .login-input-error:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
      border-color: var(--error-color);
    }

    /* Button */
    .login-submit-btn {
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
    }

    .login-submit-btn:hover:not(:disabled) {
      background-color: var(--primary-hover);
    }

    .login-submit-btn:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    .login-spinner {
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
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
