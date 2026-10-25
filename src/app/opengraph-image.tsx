import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Neelkanth Gym — Your stronger self starts here. Laxmi Nagar, Delhi.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = `data:image/png;base64,${(
    await readFile(join(process.cwd(), "public/images/logo-mark.png"))
  ).toString("base64")}`;
  return new ImageResponse(
    <div
      style={{
        background: "#111211",
        color: "#f6f5f0",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "62px 70px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 23,
          letterSpacing: 3,
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 18, color: "#f5d633", fontWeight: 700 }}>
          <img src={logo} width={64} height={64} style={{ borderRadius: 32 }} alt="" />
          NEELKANTH GYM
        </span>
        <span style={{ fontSize: 17, color: "#aaa99e" }}>
          LAXMI NAGAR · DELHI
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 95,
          fontWeight: 800,
          letterSpacing: -4,
          lineHeight: 1.02,
          marginTop: 65,
        }}
      >
        <span>YOUR STRONGER</span>
        <span style={{ color: "#f5d633" }}>SELF STARTS HERE.</span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#bdbdb5",
          marginTop: 35,
        }}
      >
        Built by you. Backed by us.
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "1px solid #44443b",
          paddingTop: 24,
          marginTop: "auto",
          justifyContent: "space-between",
          fontSize: 18,
        }}
      >
        <span>WEIGHTS · PT · GROUP TRAINING · YOGA · ZUMBA</span>
        <span style={{ color: "#f5d633" }}>+91 98106 42646</span>
      </div>
    </div>,
    size,
  );
}
