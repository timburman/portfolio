import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses
  compress: true,

  // Strict trailing slash for canonical URLs
  trailingSlash: false,

  // Power the site with proper security + SEO headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // SEO: disallow iframe embedding (prevents duplicate-content framing)
          { key: "X-Frame-Options", value: "DENY" },
          // Security + trust signals help crawlers
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://api.github.com",
              "frame-ancestors 'none'",
            ].join("; "),
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Instruct crawlers this is the canonical secure version
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      // Long-term cache for static assets (fonts, images, JS chunks)
      {
        source: "/(.*)\\.(woff2|woff|ttf|otf|ico|png|jpg|jpeg|svg|webp|avif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // Redirect www → non-www for canonical consistency
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aryankaushik.com" }],
        destination: "https://aryankaushik.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

