import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useGetProductsQuery } from "../services/productApi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import SortDropdown from "../components/SortDropdown";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../components/LanguageDropdown";

const ProductList = ({ lang, setLang, currency }) => {
  const { t, i18n } = useTranslation();

  const [sort, setSort] = useState("");
  const {
    data: products = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetProductsQuery({ sort, lang, currency });

  useEffect(() => {
    i18n.changeLanguage(lang);
    refetch();
  }, [lang, currency, sort, refetch, i18n]);

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
          {t("errorFetchingProducts")}
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
        <h2 className="text-center text-4xl font-avenirBook mb-8 text-black">
          {t("productListTitle")}
        </h2>

        <div className="flex justify-between mb-6 items-center gap-4">
          <LanguageDropdown lang={lang} setLang={setLang} />

          <SortDropdown sort={sort} setSort={setSort} />
        </div>
        <div className="relative">
          <Swiper
            modules={[Navigation, Scrollbar]}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            scrollbar={{
              el: ".custom-scrollbar",
              draggable: true,
              hide: false,
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

          <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>

          <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>

          <div className="custom-scrollbar mt-6 mx-1 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="swiper-scrollbar-drag bg-gray-500 h-full rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
