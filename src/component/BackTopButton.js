import React, { useEffect, useState } from 'react';
import '../css/backtop.css';

const Scroll = ({ showBelow }) => {
    const [show, setShow] = useState(showBelow ? false : true);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.pageYOffset > showBelow);
        };

        if (showBelow) {
            window.addEventListener('scroll', handleScroll);
            handleScroll();
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [showBelow]);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (!show) {
        return null;
    }

    return (
        <button className="back-top-button" onClick={handleClick} type="button" aria-label="Back to top">
            <i className="fa fa-chevron-up" aria-hidden="true"></i>
        </button>
    );
}

export default Scroll;
