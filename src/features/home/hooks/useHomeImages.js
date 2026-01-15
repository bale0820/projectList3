import { useEffect, useState } from "react";
import { useAutoSlider } from "shared/hooks/useAutoSlider";
import { IMAGE_BASE_URL } from "shared/constants/apiBaseUrl";
import axios from "axios";
import { api } from "shared/lib/axios";

export function useHomeImages() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get(`/data/homeDataImages.json`);
      setImages(result.data.images);
    };
    fetchData();
  }, []);

  const { index, setIndex } = useAutoSlider(images.length, 5000);

  return { images, index, setIndex };
}
