import React from 'react';
import DashboardLayoutContent from '@/components/dashboard/DashboardLayoutContent';

const DashboardLayout = ({ children }) => {
    return (
        <DashboardLayoutContent>
            {children}
        </DashboardLayoutContent>
    );
};

export default DashboardLayout;
