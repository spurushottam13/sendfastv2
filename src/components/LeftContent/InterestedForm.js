import React from "react";
import { X } from "lucide-react";
import "./interestedform.style.css";

export function InterestForm({ isOpen, onClose, onSuccessSubmit }) {
  async function handleSubmit(event) {
    event.preventDefault();
    var data = new FormData(event.target);
    fetch("https://formspree.io/f/mqaaogyn", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).finally(() => {
      onClose();
      onSuccessSubmit();
    });
  }

  return (
    <div className={`form-panel ${isOpen ? "open" : ""}`}>
      <button className="close-button" onClick={onClose}>
        <X size={24} />
      </button>
      <form className="interest-form" onSubmit={handleSubmit}>
        <h3 className="form-title">Tell us what you need</h3>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="customFeature">
            Any custom feature you want? (optional)
          </label>
          <textarea
            id="customFeature"
            name="feature"
            placeholder="Tell us what additional features you'd like to see..."
            rows={4}
          />
        </div>

        <button type="submit" className="submit-button">
          Submit Interest
        </button>
      </form>
    </div>
  );
}
