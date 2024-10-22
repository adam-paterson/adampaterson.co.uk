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
          backgroundColor: "#1a202c",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="avatar.jpeg"
            alt="Adam Paterson"
            style={{
              width: "150px",
              height: "150px",
              borderRadius: "75px",
              marginBottom: "20px",
            }}
          />
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              color: "#ffffff",
              marginBottom: "10px",
            }}
          >
            Adam Paterson
          </h1>
          <p
            style={{
              fontSize: "30px",
              color: "#E63946",
              marginBottom: "20px",
            }}
          >
            Technical Architect & Software Engineer
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
