import React from "react";
import ServiceDetailContent from "@/components/services/ServiceDetailContent";
import { getSingleServices, singleData } from "@/actions/serverData/getData";

export async function generateMetadata({ params }) {
  const { service_id } = await params;
  const service = await getSingleServices(service_id);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    };
  }

  return {
    title: `${service.name || "Service Details"}`,
    description: service.description
      ? service.description.slice(0, 160)
      : "View detailed information about this service on Care.xyz.",
    openGraph: {
      title: service.name,
      description: service.description,
      images: service.image ? [{ url: service.image }] : [],
    },
  };
}

const ServiceDetailPage = async ({ params }) => {
  const { service_id } = await params;
  const service = await getSingleServices(service_id);

  return <ServiceDetailContent service={service} />;
};

export default ServiceDetailPage;
