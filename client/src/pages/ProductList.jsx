import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useGetProductsQuery } from "../services/productApi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const ProductList = () => {
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin inline-block w-6 h-6 border-4 border-t-blue-600 rounded-full dark:border-t-blue-500"></div>
        <span className="ml-3 text-blue-600 dark:text-blue-500"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="text-red-600 text-xl font-semibold mb-2">
          Ürünler yüklenirken bir hata oluştu.
        </div>
        <div className="text-gray-600 text-sm">
          {error?.error ||
            error?.data?.message ||
            "Bilinmeyen bir hata oluştu."}
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-avenirBook mb-8 text-black">
          Ürün Listesi
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            spaceBetween={0}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              640: { slidesPerView: 2, spaceBetween: 0 },
              1024: { slidesPerView: 3, spaceBetween: 0 },
              1280: { slidesPerView: 4, spaceBetween: 0 },
            }}
            className="product-swiper"
          >
            {products.map((product, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>

          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
