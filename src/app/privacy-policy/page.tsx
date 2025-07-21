import React from "react";

const PrivacyPolicy = () => (
  <main
    style={{
      maxWidth: 720,
      margin: "3rem auto",
      padding: "2rem",
      fontFamily: "system-ui, sans-serif",
      background: "#ffffff",
      borderRadius: "1rem",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
      lineHeight: 1.6,
      color: "#2e2e2e",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: 700 }}>
      Privacy Policy
    </h1>
    <p style={{ fontSize: "1.125rem", color: "#444", marginBottom: "2rem" }}>
      At Chewmate, your privacy is our priority. This document outlines how we handle and protect your data.
    </p>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>1. No Data Collection</h2>
      <p>
        Chewmate <strong>does not</strong> collect, transmit, or store any of your personal data on external servers. Everything stays on your device — nothing leaves it.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>2. Local Data Usage</h2>
      <p>
        All data is used solely to power Chewmate’s features on your device. We do not analyze, sell, or share your data with anyone.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>3. Your Responsibility</h2>
      <p>
        Because your data is stored locally, it's your responsibility to keep your device secure and regularly back up important information.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>4. Updates</h2>
      <p>
        We may revise this policy over time. If changes are made, your continued use of Chewmate means you agree to the updated terms.
      </p>
    </section>

    <section>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>5. Contact</h2>
      <p>
        Questions or concerns? Reach out to the Chewmate team — we're here to help.
      </p>
    </section>
  </main>
);

export default PrivacyPolicy;
