import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#121110",
          borderRadius: "7px",
        }}
      >
        <svg
          viewBox="0 0 100 60"
          width="20"
          height="12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 2H98L30 34H70L2 58L40 30H6Z" fill="#2F4BFF" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
