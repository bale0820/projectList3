import "./ProductDetail.scss";
import { Link, useParams } from "react-router-dom";
import React from "react";
import { Item } from "features/productDetail/item/Item";
import { Detail } from "features/productDetail/Detail/Detail";
import { ReviewList } from "features/productDetail/review/ReviewList";
import { QnA } from "features/productDetail/qna/QnA";
import { Return } from "features/productDetail/return/Return";

import { useProductDetail } from "features/productDetail/hooks/useProductDetail";

export function ProductDetail() {
  const { id } = useParams();

  const {
    product,
    count,
    salesPrice,
    handleDecrease,
    handleIncrease,
    handleChange,
    handleAddCart,
    handleTabClick,
    sectionRefs,
  } = useProductDetail();

  const tabLabels = ["속성정보", "상세정보", "구매후기", "상품문의", "배송/반품/교환정보"];
  const tabEventNames = ["item", "detail", "review", "qna", "return"];

  return (
    <div className="product-container">
      <div className="product-detail">
        <div className="product-detail-main">
          {/* ----------------------- 이미지 ----------------------- */}
          <div className="product-image">
            <div
              className={`badge-container ${
                product.hotDeal && product.memberSpecial ? "multi" : ""
              }`}
            >
              {product.hotDeal && <span className="badge hot">원딜핫딜</span>}
              {product.memberSpecial && (
                <span className="badge member">멤버특가</span>
              )}
            </div>

            <div className="product-image-container">
              <img
                src={`/images/productImages/${product.imageUrl}`}
                alt={product.imageUrl_name}
                className="product-image-main"
              />
              {product.count <= 0 && <div className="sold-out">SOLD OUT</div>}
            </div>
          </div>

          {/* ----------------------- 상품 정보 ----------------------- */}
          <div className="product-info">
            <div className="product-info-top">
              <div className="product-info-left">
                {product.productName} ㅣ{" "}
                <Link
                  to={`/brand/${encodeURIComponent(product.brandName)}`}
                  className="product-brand"
                >
                  {product.brandName}
                </Link>
              </div>
            </div>

            <div className="product-title">
              [{product.brandName}] {product.productName}
            </div>

            <div className="product-discount red">
              {(Math.floor(product.price * (product.dc / 100))).toLocaleString()}원 할인
              <span className="product-price-original line">
                {product.price?.toLocaleString()}원
              </span>
            </div>

            <div className="product-price-final">
              {salesPrice.toLocaleString()}원
            </div>

            <hr />

            {/* Meta 정보 */}
            <ul className="product-meta">
              <li>상품번호</li>
              <li>{product.pid}</li>
            </ul>

            <ul className="product-meta">
              <li>배송</li>
              <li>
                {product.delName}
                <br />
                {product.delDescription &&
                  product.delDescription.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
              </li>
            </ul>

            <ul className="product-meta">
              <li>판매자</li>
              <li>{product.seller}</li>
            </ul>

            <ul className="product-meta">
              <li>원산지</li>
              <li>{product.origin}</li>
            </ul>

            <ul className="product-meta">
              <li>판매단위</li>
              <li>{product.unit}</li>
            </ul>

            <ul className="product-meta">
              <li>중량/용량</li>
              <li>{product.weight}</li>
            </ul>

            <ul className="product-meta">
              <li>총 수량</li>
              <li>{product.count?.toLocaleString()}개</li>
            </ul>

            <hr />

            {/* 구매 옵션 */}
            <div className="product-purchase">
              <ul className="product-purchase-info">
                <li>수량</li>
                <li>
                  <div className="product-qty-control">
                    <button className="qty-btn" onClick={handleDecrease}>
                      -
                    </button>

                    <input
                      className="qty-input"
                      type="text"
                      value={count.toLocaleString()}
                      onChange={handleChange}
                    />

                    <button className="qty-btn" onClick={handleIncrease}>
                      +
                    </button>
                  </div>
                </li>
              </ul>

              <ul className="product-purchase-info">
                <li>총금액 (부가세포함)</li>
                <li>{(salesPrice * count).toLocaleString()}원</li>
              </ul>
            </div>

            <div className="product-buttons">
              <button
                className="btn-cart"
                onClick={handleAddCart}
                disabled={product.count <= 0}
              >
                장바구니
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- 탭 ----------------------- */}
      <div className="product-tabs">
        <ul className="product-tab-list">
          {tabLabels.map((label, i) => (
            <li key={i}>
              <button onClick={() => handleTabClick(tabEventNames[i])}>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* ----------------------- 탭 콘텐츠 ----------------------- */}
      <div className="product-tab-content">
        <section ref={sectionRefs.item} id="item">
          <Item images={product.productDescriptionImage} />
        </section>

        <section ref={sectionRefs.detail} id="detail">
          <Detail images={product.productInformationImage} />
        </section>

        <section ref={sectionRefs.review} id="review">
          <ReviewList id={id} />
        </section>

        <section ref={sectionRefs.qna} id="qna">
          <QnA id={id} product={product} />
        </section>

        <section ref={sectionRefs.return} id="return">
          <Return />
        </section>
      </div>
    </div>
  );
}
