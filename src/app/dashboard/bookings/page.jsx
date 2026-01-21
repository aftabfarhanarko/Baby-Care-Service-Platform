import React, { use } from 'react';
import BookingsContent from '@/components/dashboard/BookingsContent';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

const BookingsPage = async () => {
    const {user} = await getServerSession(authOptions);
    console.log("UUU",user);
    
    return (
        <BookingsContent />
    );
};

export default BookingsPage;
