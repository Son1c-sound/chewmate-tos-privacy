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
      lineHeight: 1.6,
      color: "#000000",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
      Privacy Policy
    </h1>
    <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
      This Privacy Policy explains how Chewmate handles your information. We are committed to protecting your privacy and ensuring transparency.
    </p>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        1. Data Collection
      </h2>
      <p>
        <strong>Chewmate does not collect any personal data.</strong> All tracking, food logging, and app usage data stays entirely on your device. We do not use external servers or cloud storage. No analytics, tracking software, advertising SDKs, or third-party data processors are integrated into the app.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        2. Local-Only Data Usage
      </h2>
      <p>
        All data entered in Chewmate is stored and processed locally on your device. This includes calorie logs, food history, and any settings or preferences. None of this data is sent to us or shared with any third party.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        3. Device Permissions
      </h2>
      <p>
        Chewmate may request access to device features such as your camera (for food image logging or barcode scanning) or local storage. These permissions are used solely to enable specific in-app functionality and are never used to collect or transmit personal information.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        4. User Responsibility
      </h2>
      <p>
        Since all data is stored locally, you are responsible for backing it up and securing your device. If you delete the app or reset your device, your data may be lost permanently.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        5. Children’s Privacy
      </h2>
      <p>
        Chewmate is not intended for use by children under the age of 13. We do not knowingly collect or store any information from children.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        6. Policy Updates
      </h2>
      <p>
        This Privacy Policy may be updated to reflect changes in the app or legal requirements. Any changes will be posted within the app. Continued use of Chewmate after changes are made constitutes your acceptance of the new policy.
      </p>
    </section>

    <section>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        7. Contact Us
      </h2>
      <p>
        If you have any questions about this policy, contact us at: <br />
        <strong>[your-support-email@example.com]</strong>
      </p>
    </section>
  </main>
);

export default PrivacyPolicy;
