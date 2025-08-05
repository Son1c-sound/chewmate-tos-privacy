"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Support = () => (
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
      textAlign: "center",
    }}
  >
    <div style={{ marginBottom: "2rem" }}>
      <Link href="/">
        <img
          src="https://i.ibb.co/chbs3NHw/react-logo.png"
          alt="ChewMate Support"
          width={80}
          height={80}
          style={{ margin: "0 auto 1rem", cursor: "pointer" }}
        />
      </Link>
    </div>

    <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
      ChewMate - AI Calorie Tracker Support
    </h1>
    
    <p style={{ fontSize: "1.125rem", marginBottom: "3rem", color: "#666" }}>
      Need help with ChewMate? We&apos;re here to assist you with any questions or issues.
    </p>

    <section style={{ marginBottom: "3rem" }}>
      <h2 style={{ fontSize: "1.8rem", fontWeight: 600, marginBottom: "1.5rem" }}>
        Contact Us
      </h2>
      
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        gap: "2rem", 
        flexWrap: "wrap",
        marginBottom: "2rem"
      }}>
        <Link
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZdDdNFJPDrmQgjFhbPPmmBrgPgmckczqkfZmbTGKDmLtdnQRdTgztRzpkXZVVHHVWqvSL"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1rem 2rem",
            backgroundColor: "#EA4335",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 8px rgba(234, 67, 53, 0.3)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(234, 67, 53, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(234, 67, 53, 0.3)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Contact on Gmail
        </Link>

        <Link
          href="https://x.com/zraonx"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "1rem 2rem",
            backgroundColor: "#000000",
            color: "white",
            textDecoration: "none",
            borderRadius: "0.5rem",
            fontWeight: 600,
            fontSize: "1.1rem",
            transition: "transform 0.2s, box-shadow 0.2s",
            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Contact on X
        </Link>
      </div>

      <div style={{ 
        backgroundColor: "#f8f9fa", 
        padding: "1.5rem", 
        borderRadius: "0.5rem",
        marginTop: "2rem"
      }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "1rem" }}>
          Contact Information
        </h3>
                 <p style={{ marginBottom: "0.5rem" }}>
           <strong>Email:</strong> <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZdDdNFJPDrmQgjFhbPPmmBrgPgmckczqkfZmbTGKDmLtdnQRdTgztRzpkXZVVHHVWqvSL" target="_blank" rel="noopener noreferrer" style={{ color: "#EA4335", textDecoration: "none" }}>chewmateteam@gmail.com</a>
         </p>
         <p style={{ marginBottom: "0.5rem" }}>
           <strong>X (Twitter):</strong> <a href="https://x.com/zraonx" target="_blank" rel="noopener noreferrer" style={{ color: "#000000", textDecoration: "none" }}>@zraonx</a>
         </p>
        <p style={{ marginBottom: "0.5rem" }}>
          <strong>Response Time:</strong> Within 24-48 hours
        </p>
      </div>
    </section>

    <section style={{ textAlign: "left", marginTop: "3rem" }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", textAlign: "center" }}>
        Frequently Asked Questions
      </h2>
      
      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          How do I track my calories?
        </h3>
        <p>
          Simply tap the "+" button to add food items. You can search our database, scan barcodes, or manually enter nutritional information.
        </p>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Is my data secure?
        </h3>
        <p>
          Yes! All your data is stored locally on your device. We don&apos;t collect or store any personal information on our servers.
        </p>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Can I sync across devices?
        </h3>
        <p>
          Currently, ChewMate stores data locally on each device. We&apos;re working on cloud sync features for future updates.
        </p>
      </div>
    </section>
  </main>
);

export default Support;
