import { useState } from 'react';
import { SideberExpendContext } from './SideberExpendContext';

const SideberExpendProvider = ({ children }) => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

    return (
        <SideberExpendContext.Provider
            value={{ isSidebarExpanded, setIsSidebarExpanded }}
        >
            {children}
        </SideberExpendContext.Provider>
    );
};

export default SideberExpendProvider;
