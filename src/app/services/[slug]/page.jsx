import { notFound } from 'next/navigation';
import ServiceDetailClient from '@/components/services/ServiceDetailClient';
import { servicesList } from '@/data/servicesData';

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | TXCO Sealing Products',
    };
  }

  return {
    title: `${service.shortTitle} | TXCO Specialized Engineering Services`,
    description: service.cardDesc,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailClient service={service} />;
}
