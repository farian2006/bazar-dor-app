
"use client";

import { useState } from "react";

interface Product {
    id: number;
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: "up" | "down" | "flat";
        pct: number;
    };
}

interface SortableProductsProps {
    products: Product[];
}

type SortOption = "default" | "low" | "high";

export const SortableProducts  = ({ products }: SortableProductsProps) => {
    const [sortBy, setSortBy] = useState<SortOption>("default");

    const sortedProducts = [...products].sort((a, b) => {
        if (sortBy === "low") {
            return a.today - b.today;
        }

        if (sortBy === "high") {
            return b.today - a.today;
        }
        return 0;
    });

    const sortLabels: Record<SortOption, string> = {
        default: "ডিফল্ট",
        low: "মূল্য: কম থেকে বেশি",
        high: "মূল্য: বেশি থেকে কম",
    };

    return (
        <div>
            <div className="mb-4 flex justify-end">
                <div className="dropdown dropdown-end">
                    <button
                        type="button"
                        tabIndex={0}
                        className="btn btn-outline"
                    >
                        <span>↕</span>
                        {sortLabels[sortBy]}
                    </button>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu z-10 mt-2 w-56 rounded-box border border-base-300 bg-base-100 p-2 shadow-lg"
                    >
                        <li>
                            <button
                                type="button"
                                onClick={() => setSortBy("default")}
                            >
                                ডিফল্ট
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={() => setSortBy("low")}
                            >
                                মূল্য: কম থেকে বেশি
                            </button>
                        </li>

                        <li>
                            <button
                                type="button"
                                onClick={() => setSortBy("high")}
                            >
                               মূল্য: বেশি থেকে কম
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
</div> 
)
}
export default SortableProducts;
