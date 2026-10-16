import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/service/webdevelopment/e-commerce-solutions',
        destination: '/services/web-development/e-commerce-solutions',
        permanent: true,
      },
      {
        source: '/services/webdevelopment/e-commerce-solutions',
        destination: '/services/web-development/e-commerce-solutions',
        permanent: true,
      },
      {
        source: '/services/e-commerce',
        destination: '/services/web-development/e-commerce-solutions',
        permanent: true,
      },
      {
        source: '/service/webdevelopment/cms-development',
        destination: '/services/web-development/cms-development',
        permanent: true,
      },
      {
        source: '/services/webdevelopment/cms-development',
        destination: '/services/web-development/cms-development',
        permanent: true,
      },
      {
        source: '/services/cms-development',
        destination: '/services/web-development/cms-development',
        permanent: true,
      },
      {
        source: '/service/webdevelopment/website-maintenance-and-support',
        destination: '/services/web-development/website-maintenance-and-support',
        permanent: true,
      },
      {
        source: '/services/webdevelopment/website-maintenance-and-support',
        destination: '/services/web-development/website-maintenance-and-support',
        permanent: true,
      },
      {
        source: '/services/web-development/website-maintenance',
        destination: '/services/web-development/website-maintenance-and-support',
        permanent: true,
      },
      {
        source: '/services/website-maintenance',
        destination: '/services/web-development/website-maintenance-and-support',
        permanent: true,
      },
      {
        source: '/services/web-development/website-maintenance-support',
        destination: '/services/web-development/website-maintenance-and-support',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
