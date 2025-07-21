import React from "react";

const PrivacyPolicy = () => (
  <main style={{ maxWidth: 700, margin: "2rem auto", padding: "2rem 1.5rem", fontFamily: 'system-ui, sans-serif', background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
    <h1 style={{ fontSize: '2.2rem', marginBottom: 16 }}>Privacy Policy</h1>
    <p style={{ fontSize: '1.1rem', color: '#444' }}>
      Your privacy is important to us at Chewmate. This policy explains how we handle your information.
    </p>
    <section style={{ marginTop: 32 }}>
      <h2>1. No Data Collection</h2>
      <p>
        Chewmate does <strong>not</strong> collect, transmit, or store your personal data on any external servers or in the cloud. Everything stays on your device.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>2. Data Usage</h2>
      <p>
        Your data is used only for the operation of Chewmate on your device. We do not access, analyze, or share your information with third parties.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>3. Data Security</h2>
      <p>
        Since all data is stored locally, you are responsible for keeping your device secure and backing up your data as needed.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>4. Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time. Continued use of Chewmate after changes means you accept the updated policy.
      </p>
    </section>
    <section style={{ marginTop: 24 }}>
      <h2>5. Contact Us</h2>
      <p>
        If you have any questions about this policy, please contact the Chewmate team.
      </p>
    </section>
  </main>
);

export default PrivacyPolicy; 