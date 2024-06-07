import React, { useEffect } from 'react';

const Instagram = () => {
    useEffect(() => {
        window.location.href = "https://www.instagram.com";
    }, []);

    return null; // Or you can return some loading message
};

export default Instagram;
