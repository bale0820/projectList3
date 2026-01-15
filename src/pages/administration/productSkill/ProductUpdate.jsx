
// ProductUpdate.jsx
import { ProductForm } from "features/administration/productSkill/productAdd/components/ProductForm";
import { useProductUpdate } from "features/administration/productSkill/productUpdate/useProductUpdate";
import React from "react";

export function ProductUpdate() {
  const { item, initialFormData, existingImages, handleSubmit } = useProductUpdate();

  return (
    <ProductForm
      mode="update"
      initialFormData={initialFormData}
      existingImages={existingImages}
      onSubmit={handleSubmit}
      initialCount={item.count}
      initialPrice={item.price}
    />
  );
}
