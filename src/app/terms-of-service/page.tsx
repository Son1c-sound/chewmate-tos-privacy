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
      lineHeight: 1.6,
      color: "#000000",
    }}
  >
    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
      Terms of Service
    </h1>
    <p style={{ fontSize: "1.125rem", marginBottom: "2rem" }}>
      By using Chewmate, you agree to the terms outlined below. Please review them carefully before continuing to use the app.
    </p>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        1. Data Storage
      </h2>
      <p>
        Chewmate stores all data <strong>locally</strong> on your device. Your food logs, meal tracking history, and any associated data never leave your phone. We do not collect, sync, or transmit personal data to external servers or third parties.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        2. User Responsibility
      </h2>
      <ul style={{ paddingLeft: "1.5rem", listStyle: "disc", marginTop: "0.5rem" }}>
        <li style={{ marginBottom: "0.5rem" }}>
          You are solely responsible for the accuracy of the data you input into Chewmate.
        </li>
        <li style={{ marginBottom: "0.5rem" }}>
          Chewmate is not liable for any data loss resulting from deletion, app uninstallation, device issues, or system resets.
        </li>
        <li>
          You are encouraged to manually back up your data if your device or operating system supports it.
        </li>
      </ul>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        3. No Medical Advice
      </h2>
      <p>
        Chewmate is intended for informational and personal tracking purposes only. It does not provide medical or dietary advice. Always consult a qualified healthcare provider before making changes to your nutrition or lifestyle.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        4. No Warranty
      </h2>
      <p>
        Chewmate is provided “as is.” We make no guarantees regarding availability, accuracy, or performance. Use of the app is at your own risk.
      </p>
    </section>

    <section style={{ marginBottom: "2rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        5. Changes to Terms
      </h2>
      <p>
        We reserve the right to modify these Terms of Service at any time. Continued use of the app after changes indicates your acceptance of the revised terms.
      </p>
    </section>

    <section>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        6. Contact Us
      </h2>
      <p>
        For questions or concerns about these terms, please contact the Chewmate team at [your-support-email@example.com].
      </p>
    </section>
  </main>
);

export default TermsOfService;
