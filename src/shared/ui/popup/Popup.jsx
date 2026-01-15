import React from "react";
import { useNavigate } from "react-router-dom";
import "./Popup.css";
import { IMAGE_BASE_URL } from "shared/constants/apiBaseUrl";

export default function Popup({ onClose }) {
  const navigate = useNavigate();
  
  return (
    <div className="popup-container">
      <div className="popup-content">
        <img
          src={`${IMAGE_BASE_URL}/data/popupimage/coupon_image1.png`}
          alt="쿠폰"
          className="popup-image"
        />
        <button className = "get-coupon-button" onClick={() => navigate("/coupon")}>쿠폰받으러가기</button>
        <button className="popup-close-btn" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}
