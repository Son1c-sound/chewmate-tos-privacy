import React from "react";

const TermsOfService = () => (
  <main style={{ maxWidth: 700, margin: "2rem auto", padding: "2rem 1.5rem", fontFamily: 'system-ui, sans-serif', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
    <h1 style={{ fontSize: '2.2rem', marginBottom: 16 }}>Terms of Service</h1>
    <p style={{ fontSize: '1.1rem', color: '#444' }}>
      Welcome to Chewmate! Please review these Terms of Service carefully before using our application.
    </p>
    <section style={{ marginTop: 32 }}>
      <h2>1. Local Data Storage</h2>
      <p>
        All information you enter or generate in Chewmate is stored <strong>locally</strong> on your device. We do not use cloud storage or transmit your data to any external servers. You are responsible for backing up your data if needed.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>2. Your Responsibilities</h2>
      <ul style={{ paddingLeft: 24, color: '#444' }}>
        <li>You are responsible for the accuracy and security of the data you provide.</li>
        <li>Chewmate is not liable for any data loss due to device issues, deletion, or misuse.</li>
      </ul>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>3. No Warranty</h2>
      <p>
        Chewmate is provided &quot;as is&quot; without warranties of any kind. We do not guarantee uninterrupted or error-free operation.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>4. Updates to Terms</h2>
      <p>
        We may update these Terms of Service periodically. Continued use of Chewmate after changes means you accept the revised terms.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>5. Contact Us</h2>
      <p>
        If you have questions about these terms, please contact the Chewmate team.
      </p>
    </section>
  </main>
);

export default TermsOfService; 