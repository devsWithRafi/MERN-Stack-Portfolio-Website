import { useState } from 'react';
import { SideberContext } from './SideberContext';

const SideberProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <SideberContext.Provider value={{ isOpen, setIsOpen }}>
            {children}
        </SideberContext.Provider>
    );
};

export default SideberProvider;
