import React from "react";
import { useProductAdd } from "features/administration/productSkill/productAdd/useProductAdd";
import { ProductForm } from "features/administration/productSkill/productAdd/components/ProductForm";

export function ProductAdd() {
  const {
    initialFormData,
    initialExistingImages,
    handleSubmit,
  } = useProductAdd();

  return (
    <ProductForm
      mode="add"
      initialFormData={initialFormData}
      initialExistingImages={initialExistingImages}
      onSubmit={handleSubmit}
      initialCount={0}
      initialPrice={0}
    />
  );
}
