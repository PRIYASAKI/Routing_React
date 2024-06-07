import React, { useEffect } from 'react';

const Facebook = () => {
    useEffect(() => {
        window.location.href = "https://www.youtube.com/watch?v=qt_abdPXoU4";
    }, []);

    return null; // Or you can return some loading message
};

export default Facebook;
