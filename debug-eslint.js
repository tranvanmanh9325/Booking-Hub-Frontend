
try {
    const coreWebVitals = require('eslint-config-next/core-web-vitals');
    console.log('Type:', typeof coreWebVitals);
    console.log('Is Array:', Array.isArray(coreWebVitals));
    console.log('Keys:', Object.keys(coreWebVitals));
} catch (e) {
    console.error(e);
    try {
        const next = require('eslint-config-next');
        console.log('Root Type:', typeof next);
    } catch (e2) {
        console.error(e2);
    }
}
