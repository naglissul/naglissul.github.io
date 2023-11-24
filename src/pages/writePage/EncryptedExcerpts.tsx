import React, { useEffect, useState, useRef } from "react";
const CryptoJS = require("crypto-js");

export default function EncryptedExcerpts() {
  const encryptedText =
    "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";
  const [feedback, setFeedback] = useState<string>("");
  const [decryptedText, setDecryptedText] = useState<string>(encryptedText);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const adjustHeight = () => {
      const textarea = textareaRef.current;
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight + 5}px`;
      }
    };
    adjustHeight();
  }, [decryptedText]);
  return (
    <section>
      <h1>Week 4 ištrauka</h1>
      <p>Encrypted using AES128 ECB.</p>
      <p>
        Parašykit man dėl slaptažodžio (galit į audriustyliunas instagramą).
      </p>
      <p>Labai appreciatinčiau feedback'a!</p>
      <input
        type="password"
        placeholder="Enter password"
        style={{ fontSize: "16px" }}
        onChange={(event) => {
          try {
            setDecryptedText(
              CryptoJS.enc.Utf8.stringify(
                CryptoJS.AES.decrypt(
                  encryptedText,
                  CryptoJS.enc.Utf8.parse(event.target.value),
                  { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
                )
              )
            );
          } catch (error) {
            setDecryptedText(encryptedText);
          }
        }}
      />
      <textarea
        value={decryptedText}
        readOnly
        ref={textareaRef}
        style={{
          whiteSpace: "pre-wrap",
          width: "100%",
          boxSizing: "border-box",
          padding: "10px",
          marginTop: "50px",
          resize: "none",
          fontSize: "16px",
        }}
      />
      <textarea
        value={feedback}
        onChange={(event) => setFeedback(event.target.value)}
        placeholder="Write your feedback here"
        rows={4}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "10px",
          marginTop: "50px",
          resize: "vertical",
          fontSize: "16px",
        }}
      />
      <a
        href={`mailto:naglis.suliokas@gmail.com?subject=${encodeURIComponent(
          "28 skyrelio feedback'as"
        )}&body=${encodeURI(
          "Laba!\n\rŠtai mano 28 skyrelio feedback'as:\n\r\n\r---------------------------------------\n\r" +
            feedback +
            "\n\r---------------------------------------\n\r\n\rIki!"
        )}`}
      >
        <button style={{ padding: "10px" }}>Send this via email app </button>
      </a>
    </section>
  );
}
