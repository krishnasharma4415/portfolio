"use client";

import dynamic from "next/dynamic";

// Lazy load client-only components
const MagneticCursor = dynamic(() => import("@/components/shared/MagneticCursor"), {
  ssr: false,
  loading: () => null,
});

const KonamiCode = dynamic(() => import("@/components/shared/KonamiCode"), {
  ssr: false,
  loading: () => null,
});

const PerformanceMonitor = dynamic(() => import("@/components/shared/PerformanceMonitor"), {
  ssr: false,
  loading: () => null,
});

const ServiceWorkerRegistration = dynamic(() => import("@/components/shared/ServiceWorkerRegistration"), {
  ssr: false,
  loading: () => null,
});

export default function ClientProviders() {
  return (
    <>
      <PerformanceMonitor />
      <ServiceWorkerRegistration />
      <MagneticCursor />
      <KonamiCode />
    </>
  );
}