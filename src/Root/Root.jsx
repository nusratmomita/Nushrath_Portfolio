import React from 'react';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Outlet className="min-h-screen"></Outlet>
        </div>
    );
};

export default Root;