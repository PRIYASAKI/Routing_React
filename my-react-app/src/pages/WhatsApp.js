import React, { useEffect } from 'react';

const WhatsApp = () => {
    useEffect(() => {
        window.location.href = "https://www.whatsapp.com";
    }, []);

    return null; // Or you can return some loading message
};

export default WhatsApp;
