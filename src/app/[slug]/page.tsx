import SortableProducts from "@/components/SortableProducts";


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

interface CategoryPageProps {
    params: Promise<{
        slug: string;
    }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;

    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products"
    );

    const products: Product[] = await res.json();

    const filteredProducts = products.filter(
        (product) => product.category === slug
    );

    return (
        <div className="mx-auto max-w-7xl p-6">

            <div className="mb-8 flex items-center gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"> 
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 sm:h-36 sm:w-36">
                    <p className="flex items-center mx-4 text-6xl py-4 shadow-sm  bg-gray-200 rounded-2xl">{filteredProducts[0].categoryIcon}</p>
                    <div className="flex flex-col">
                        <p className="text-3xl font-bold">{filteredProducts[0].categoryNameBn}</p>
                        <p className="text-gray-500">{filteredProducts.length.toLocaleString("bn-BD")} পণ্যের আজকের দাম ও পরিবর্তন</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
            <h1 className="mb-6 text-3xl font-bold">
                {filteredProducts[0]?.categoryNameBn ?? slug}
            </h1>
            <div className="flex flex-row gap-4 items-start">
            <p> সাজান </p>
           <SortableProducts products={filteredProducts} />  
           </div>
          </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                
             
                
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="w-86 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                    >
                        <div className="flex gap-4">
                        <div className="flex items-center mb-3 text-3xl shadow-sm  bg-gray-200 rounded-2xl">
                            {product.image}
                        </div>

                        <div className="flex flex-col">
                        <h2 className="text-lg font-semibold">
                            {product.nameBn}
                        </h2>

                        <p className="mt-2 mb-2 text-gray-500">
                            প্রতি {product.unit}
                        </p>
                        </div>
                        </div>

                  
                        <p>আজকের দাম</p>
                        <div className="flex justify-between items-center">
                        <p className="mt-1 text-2xl font-bold">
                         
                            {product.today} টাকা
                        </p>

                        <span className={product.change.dir === "up"
        ? "rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500"
        : "rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
    } >
        {product.change.dir === "up" ? "▲" : "▼"}{" "}
        {product.change.pct}%
                    </span>
                    </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <p>এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।</p>
            )}
        </div>
    );
};

export default CategoryPage;