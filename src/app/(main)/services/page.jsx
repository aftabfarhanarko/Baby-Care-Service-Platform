import React from "react";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import ServicesPageContent from "@/components/services/ServicesPageContent";
import { getServerData } from "@/actions/serverData/getData";
import getQueryClient from "@/lib/getQueryClient";

const ServicesPage = async ({ searchParams }) => {
  const query = await searchParams;
  const page = parseInt(query?.page) || 1;
  // limit is handled in getData (default 6) but good to keep consistent if passed
  const search = query?.search || "";
  const sort = query?.sort || "";

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["services", { page, search, sort }],
    queryFn: () => getServerData({ page, search, sort }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ServicesPageContent />
    </HydrationBoundary>
  );
};

export default ServicesPage;
