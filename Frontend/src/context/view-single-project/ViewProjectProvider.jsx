import { useState } from 'react';
import { ViewProjectContext } from './ViewProjectContext';

const ViewProjectProvider = ({ children }) => {
    const [viewSingleProj, setViewSingleProj] = useState(false);
    return (
        <ViewProjectContext.Provider
            value={{ viewSingleProj, setViewSingleProj }}
        >
            {children}
        </ViewProjectContext.Provider>
    );
};

export default ViewProjectProvider;
