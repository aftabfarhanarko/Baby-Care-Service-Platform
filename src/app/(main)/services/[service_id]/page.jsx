import React from "react";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { getSingleServices } from "@/actions/serverData/getData";

const ServiceDetailPage = async ({ params }) => {
  const { service_id } = await params;
  const service = await getSingleServices(service_id);

  return <ServiceDetailContent service={service} />;
};

export default ServiceDetailPage;
