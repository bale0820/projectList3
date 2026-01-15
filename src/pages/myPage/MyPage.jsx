  import { useEffect, useState } from "react";
  // features
  import { parseJwt } from "features/auth/parseJwt";

  import './MyPage.css'
  import '../administration/AdminLayout.scss'
  import { Link,Outlet } from "react-router-dom";

  export function MyPage() {

    return (
      <>
      <div className="admin-container">
        <aside className="admin-sidebar">
          <h2 className="admin-title">마이페이지 메뉴</h2>

          <nav className="admin-nav">
            <Link to="/mypage/update">개인정보수정</Link>
            <Link to="/mypage/myorders">주문 내역</Link>
            <Link to="/mypage/mycoupon">쿠폰함</Link>
            
          </nav>
        </aside>

        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    
      </>
    );
  }