import React from 'react';
import ReactDOM from 'react-dom';

export const initAxe = async () => {
    if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
        try {
            const axe = await import('@axe-core/react');
            await axe.default(React, ReactDOM, 5000);
            console.log('Axe-core initialized');
        } catch (error) {
            console.error('Failed to initialize axe-core:', error);
        }
    }
};