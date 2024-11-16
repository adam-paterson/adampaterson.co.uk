import React from "react";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const SocialCard = () => {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to bottom right, #1e1b4b, #4c1d95)",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "700px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #e9d5ff, #a5b4fc)",
              backgroundClip: "text",
              color: "transparent",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Adam Paterson
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#e2e8f0",
              marginBottom: "20px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Technical Architect & Software Engineer
          </p>
          <p
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              textAlign: "center",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            Specializing in e-commerce solutions and AI technologies
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};

export default SocialCard;
