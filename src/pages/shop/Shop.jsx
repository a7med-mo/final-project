import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import BannerShop from "../../components/BannerShop/BannerShop";
import FilterShop from "../../components/FilterShop/FilterShop";
import ProductShop from "../../components/ProductShop/ProductShop";
import { axiosConfig } from "../../utils/axiosConfig";
import ShopEmpty from "../../components/ShopEmpty/ShopEmpty";

export default function Shop() {
    const { data, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: () =>
            axiosConfig({
                method: "get",
                url: "/products",
            }),

        refetchOnWindowFocus: true,
    });

    const [filters, setFilters] = useState({
        colors: [],
        sizes: [],
        brands: [],
        types: [], 
        price: [0, Infinity],
    });

    const filteredProducts = useMemo(() => {
        if (!data?.data) return [];

        return data.data.filter((product) => {
            const matchesColors =
                filters.colors && Array.isArray(filters.colors) && filters.colors.length > 0
                    ? product.colors?.some((color) =>
                        color?.colorName && filters.colors.includes(color.colorName.toLowerCase())
                    )
                    : true;

            const matchesSizes =
                filters.sizes.length === 0 ||
                product.sizes?.some((size) => filters.sizes.includes(size));

            const matchesBrands =
                filters.brands.length === 0 || filters.brands.includes(product.brand);

            const matchesTypes =
                filters.types.length === 0 || filters.types.includes(product.type); 

            const matchesPrice =
                typeof product.price === "number" &&
                product.price >= filters.price[0] &&
                product.price <= filters.price[1];

            return matchesColors && matchesSizes && matchesBrands && matchesTypes && matchesPrice;
        });
    }, [data?.data, filters]);


    return (
        <>
            <BannerShop />
            <FilterShop products={data?.data} setFilters={setFilters} filters={filters} />

            {filteredProducts.length === 0 ? (
                <ShopEmpty />
            ) : (
                <ProductShop
                    products={filteredProducts}
                    count={filteredProducts?.length}
                    isLoading={isLoading}
                    filters={filters}
                />
            )}
        </>
    );
}
