import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const alt = siteConfig.name;
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px",
          background: "linear-gradient(135deg, #1a3a5c 0%, #0f172a 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Badge */}
        <div
          style={{
            fontSize: 24,
            opacity: 0.8,
            marginBottom: 20,
            letterSpacing: "2px",
          }}
        >
          EARLY CHILDHOOD EDUCATION
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          Banner Of Excellence
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            opacity: 0.9,
            maxWidth: "900px",
          }}
        >
          Crèche • Nursery • Primary Education in Akwa Ibom State, Nigeria
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: 40,
            fontSize: 20,
            opacity: 0.7,
          }}
        >
          Excellence in early learning & child development
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
          }
