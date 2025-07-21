import React from "react";

const TermsOfService = () => (
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
      Terms of Service
    </h1>
    <p style={{ fontSize: "1.125rem", color: "#444", marginBottom: "2rem" }}>
      Welcome to Chewmate. By using our app, you agree to the following terms. Please read them carefully.
    </p>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>1. Local Data Storage</h2>
      <p>
        All data entered into Chewmate is stored <strong>locally</strong> on your device. We do not use cloud storage, external servers, or transmit your data elsewhere. You are solely responsible for backing up your data and ensuring your device's security.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>2. User Responsibilities</h2>
      <ul style={{ paddingLeft: "1.5rem", color: "#444", marginTop: "0.5rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>
          You are responsible for the accuracy and integrity of the data you provide or generate.
        </li>
        <li>
          Chewmate is not liable for any data loss due to device issues, deletion, or misuse.
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>3. No Warranty</h2>
      <p>
        Chewmate is provided “as is” without any warranties, express or implied. We do not guarantee the app will be uninterrupted, secure, or error-free.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>4. Updates to Terms</h2>
      <p>
        We may update these Terms of Service at any time. Continued use of Chewmate after changes are made constitutes acceptance of the new terms.
      </p>
    </section>

    <section>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>5. Contact</h2>
      <p>
        If you have any questions about these terms, reach out to the Chewmate team.
      </p>
    </section>
  </main>
);

export default TermsOfService;
