import { Link, useParams } from "react-router-dom";

import { FilterItem } from "shared/constants/FilterItem";
import ProductCard from "shared/ui/productCard/ProductCard";
import { AdvertiseList } from "shared/ui/advertise/AdvertiseList";
import { RightAdBanner } from "shared/ui/advertise/RightAdvBanner";

import "./HeaderProductList.scss";
import "../../styles/components/filter.scss";
import { useAdvertise } from "shared/hooks/userAdvertise";
import { useHeaderProductList } from "features/productCategoryList/hooks/useHeaderProductList";

export function HeaderProductList() {
  const { id } = useParams();
  const { bannerAds, inlineAds } = useAdvertise();

  const {
    filteredProducts,
    loading,
    activeFilter,
    handleFilter,
  } = useHeaderProductList(id);

  const filterLabel = [
    { label: "최신순", value: "new" },
    { label: "높은가격순", value: "priceHigh" },
    { label: "낮은가격순", value: "priceLow" },
  ];

  return (
    <div className="new-products-page">
      <h1 className="page-title">
        {id === "best"
          ? "베스트 상품"
          : id === "sale"
          ? "세일 상품 (10% 이상)"
          : id === "deal"
          ? "특가/혜택 상품"
          : id === "time"
          ? "마감 임박 상품"
          : "신상품"}
      </h1>

      {/* 필터 UI */}
      <ul className="product-filter">
        {filterLabel.map((item) => (
          <FilterItem
            key={item.value}
            label={item.label}
            value={item.value}
            activeFilter={activeFilter}
            onClick={handleFilter}
          />
        ))}
      </ul>

      {/* 상품 리스트 */}
      <div className="product-list-container">
        {loading ? (
          <p className="loading">로딩 중...</p>
        ) : filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((item, idx) => (
              <Link key={idx} to={`/products/${item.id}`}>
                <ProductCard item={item} />
              </Link>
            ))}
          </div>
        ) : (
          <p className="empty">상품이 없습니다.</p>
        )}
      </div>

      <li style={{ listStyle: "none" }}>
        <AdvertiseList ads={inlineAds} />
        <RightAdBanner ads={bannerAds} />
      </li>
    </div>
  );
}
