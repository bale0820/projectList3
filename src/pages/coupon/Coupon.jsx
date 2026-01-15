// pages/coupon/CouponPage.jsx

import { CouponButtons } from "features/coupon/components/CouponButtons";
import { useCoupon } from "features/coupon/hooks/useCoupon";

export function Coupon() {
  const { userId, couponList, issuedCoupons, issueCoupon } = useCoupon();

  return (
    <div style={{ fontFamily: "'Pretendard', sans-serif", maxWidth: "1200px" }}>
      {/* 배너 이미지 */}
      <div
        style={{
          height: "100vh",
          backgroundImage: "url('/images/popupimage/coupon_image3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <CouponButtons
        userId={userId}
        couponList={couponList}
        issuedCoupons={issuedCoupons}
        onIssue={issueCoupon}
      />
    </div>
  );
}
