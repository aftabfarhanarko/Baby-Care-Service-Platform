import EarningsContent from '@/components/dashboard/EarningsContent';
import { getEarningsData } from '@/actions/serverData/dashbordApi';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

export default async function EarningsPage() {
    const session = await getServerSession(authOptions);
    const earningsData = await getEarningsData(session?.user?.email);
    console.log(earningsData);
    
    return <EarningsContent 
        dailyChartData={earningsData.dailyChartData}
        totalServiceEarnings={earningsData.totalServiceEarnings}
        totalCaregiverEarnings={earningsData.totalCaregiverEarnings}
        recentServices={earningsData.recentServices}
        recentCaregivers={earningsData.recentCaregivers}
    />;
}
