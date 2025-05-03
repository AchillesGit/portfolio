import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Google-Site-Verification",
            value: "googlec9a9b45540e2246d.html",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
