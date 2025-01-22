import React, { useState } from "react";
import {
  Clock,
  Share2,
  Mail,
  ArrowRight,
  Lock,
  HardDrive,
  Bell,
  LayoutDashboard,
} from "lucide-react";
import "./style.css";
import { InterestForm } from "./InterestedForm";

const FlashIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 57 56"
    fill="none"
  >
    <path
      d="M30.8333 22.3333C30.8333 22.8856 31.2811 23.3333 31.8333 23.3333H45.2581C46.0648 23.3333 46.5395 24.2393 46.0803 24.9025L27.9889 51.0346C27.4308 51.8407 26.1667 51.4458 26.1667 50.4654V33.6667C26.1667 33.1144 25.719 32.6667 25.1667 32.6667H11.7419C10.9352 32.6667 10.4606 31.7607 10.9197 31.0975L29.0111 4.96539C29.5692 4.15934 30.8333 4.55422 30.8333 5.53459V22.3333Z"
      fill="#1463FF"
    />
  </svg>
);

export default function LaunchingSoon() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="LaunchingSoonCard">
      <div className="badge">Launching Soon</div>

      <h2 className="title">
        Sendfileonline.
        <span className="pro-text">
          Pro <FlashIcon />
        </span>
      </h2>
      <div className="price">
        for only <span className="price-amount">$6</span>/month
      </div>

      <ul className="features-list">
        <li className="feature-item">
          <HardDrive className="feature-icon" size={20} />
          <span>Increased file size limit (up to 100GB)</span>
        </li>
        <li className="feature-item">
          <Clock className="feature-icon" size={20} />
          <span>Custom expiry time</span>
        </li>
        <li className="feature-item">
          <Lock className="feature-icon" size={20} />
          <span>Set passwords to secure your downloads</span>
        </li>
        <li className="feature-item">
          <LayoutDashboard className="feature-icon" size={20} />
          <span>Dashboard to manage all your shareable files</span>
        </li>
        <li className="feature-item">
          <Bell className="feature-icon" size={20} />
          <span>Analytics and email notifications on downloads</span>
        </li>
        <li className="feature-item">
          <LayoutDashboard className="feature-icon" size={20} />
          <span>Dashboard to manage all your shareable files</span>
        </li>
        <li className="feature-item">
          <Share2 className="feature-icon" size={20} />
          <span>Unlimited share</span>
        </li>
        <li className="feature-item">
          <Mail className="feature-icon" size={20} />
          <span>Share via email</span>
        </li>
      </ul>

      {isSubmitted ? (
        <button className="cta-button cta-button2">
          Thanks for your interest! We'll be in touch soon.
        </button>
      ) : (
        <button className="cta-button" onClick={() => setIsFormOpen(true)}>
          <span>Are you interested?</span>
          <ArrowRight className="arrow-icon" size={20} />
        </button>
      )}

      {isFormOpen && (
        <InterestForm
          onSuccessSubmit={() => setIsSubmitted(true)}
          onClose={() => setIsFormOpen(false)}
        />
      )}
    </div>
  );
}
