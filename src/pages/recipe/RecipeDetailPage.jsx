import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";

import "./RecipeDetailPage.scss";
import { useRecipeDetail } from "features/recipe/recipeDetail/useRecipeDetail";
import { RelatedProductList } from "features/recipe/recipeDetail/components/RelatedProductList";
import { ReviewWriteBox } from "features/recipe/recipeDetail/components/ReviewWriteBox";
import { ReviewList } from "features/recipe/recipeDetail/components/ReviewList";
import { API_BASE_URL, IMAGE_BASE_URL } from "shared/constants/apiBaseUrl";



export default function RecipeDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    recipe,
    relatedProducts,
    isLoggedIn,
    newRating,
    newContent,
    setNewRating,
    setNewContent,
    submitReview,
    currentItems,
    currentPage,
    sortedReviews,
    itemsPerPage,
    setCurrentPage,
  } = useRecipeDetail(id);

  if (!recipe) return <div>로딩중...</div>;

  const handlePrev = () =>
    setCurrentPage((p) => (p > 1 ? p - 1 : p));

  const handleNext = () =>
    setCurrentPage((p) =>
      p * itemsPerPage < sortedReviews.length ? p + 1 : p
    );

  return (
    <div className="recipe-detail-container">

      {/* 이미지 */}
      <img src={`${IMAGE_BASE_URL}/data/recipe/${recipe.imageUrl}`} alt="레시피 메인 이미지" className="detail-img" />

      {/* 제목 */}
      <h1 className="detail-title">{recipe.title}</h1>

      <div className="detail-summary">{recipe.summary}</div>

      {/* 기본 정보 */}
      <div className="detail-info-box">
        <div className="info-item">⭐ {recipe.rating} ({recipe.reviewCount})</div>
        <div className="info-divider" />
        <div className="info-item">⏱ {recipe.cookTime}분</div>
        <div className="info-divider" />
        <div className="info-item">난이도: {recipe.difficulty}</div>
      </div>

      <RelatedProductList relatedProducts={relatedProducts} />

      <h2 className="section-title">재료</h2>
      <ul className="ingredient-list">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>

      {/* 단계 */}
      <h2 className="section-title">조리 단계</h2>
      <ol className="step-list">
        {recipe.steps.map((step, i) => (
          <li key={i}><div className="step-text">{step}</div></li>
        ))}
      </ol>

      <h2 className="section-title">팁</h2>
      <div className="tip-box">{recipe.tips}</div>

      {/* Youtube */}
      {recipe.youtubeUrl && (
        <div className="youtube-box">
          <iframe
            width="100%"
            height="400"
            src={recipe.youtubeUrl.replace("watch?v=", "embed/")}
            allowFullScreen
          />
        </div>
      )}

      <h2 className="section-title">후기</h2>

      {/* 후기 입력 */}
      {isLoggedIn ? (
        <ReviewWriteBox
          newRating={newRating}
          newContent={newContent}
          setNewRating={setNewRating}
          setNewContent={setNewContent}
          submitReview={submitReview}
        />
      ) : (
        <div
          className="review-login-needed"
          onClick={() => navigate("/login", { state: { from: location.pathname } })}
        >
          <p>로그인 후 후기를 작성할 수 있습니다.</p>
          <button className="goto-login-btn">로그인하러 가기</button>
        </div>
      )}

      {/* 후기 목록 */}
      <ReviewList currentItems={currentItems} />

      {/* Pagination */}
      <div className="pagination">
        <button className="page-btn" onClick={handlePrev} disabled={currentPage === 1}>
          &lt;
        </button>
        <span className="page-info">
          {currentPage} / {Math.ceil(sortedReviews.length / itemsPerPage)}
        </span>
        <button
          className="page-btn"
          onClick={handleNext}
          disabled={currentPage * itemsPerPage >= sortedReviews.length}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
