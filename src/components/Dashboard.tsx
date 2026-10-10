import Link from 'next/link';
interface Products {
    "id": number,
    "nameBn": string,
    "categoryIcon":string,
    "unit": string,
    "image": string,
    "today": number,
    "change": {
      "dir":  "up" | "down",
      "pct": number

}
}

const Dashboard = async() => {
   
    const res =await fetch("https://openapi.programming-hero.com/api/bazardor/products");
    const data:Products[]=await res.json();
   

     const increasedProducts = data.filter(
        (product) => product.change.dir === "up"
    );
      
    const decreasedProducts = data.filter(
        (product) => product.change.dir === "down"
    );
    return (
        <div id="dashboard" className='relative mx-auto max-w-7xl'>
            <div className="flex gap-2 mt-4 mb-4">
                <p className="text-red-600">▲</p>
                <p className="font-bold"> আজ দাম বেড়েছে </p>
            </div>
            <div className='grid grid-cols-3 gap-4 mx-2'>
                {increasedProducts.map((product) => ( 
        <Link href={`/productDetails/${product.id}`} key={product.id}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4" >
    <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-2xl">
            {product.image}
        </div>

        <div>
            <h3 className="font-semibold">
                {product.nameBn}
            </h3>

            <p className="text-xs text-gray-500">
                প্রতি {product.unit}
            </p>
        </div>
    </div>

    <div className="mt-4 flex items-end justify-between">
        <div>
            <p className="text-xs text-gray-500">
                আজকের দাম
            </p>

            <p className="text-lg font-bold">
                {product.today} টাকা
            </p>
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500">
            ▲ {product.change.pct}%
        </span>
    </div>
</div>
 </Link>
 ))}
  </div>
            

            <div className="flex gap-2 mt-4 mb-4">
                <p className="text-green-600">▼</p>
                <p className="font-bold"> আজ দাম কমেছে </p>
            </div>
        <div className='grid grid-cols-3 gap-4 mx-2'>
                {decreasedProducts.map((product) => ( 
                    <Link href={`/productDetails/${product.id}`} key={product.id}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4" key={product.id}>
    <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-2xl">
            {product.image}
        </div>

        <div>
            <h3 className="font-semibold">
                {product.nameBn}
            </h3>

            <p className="text-xs text-gray-500">
                প্রতি {product.unit}
            </p>
        </div>
    </div>

    <div className="mt-4 flex items-end justify-between">
        <div>
            <p className="text-xs text-gray-500">
                আজকের দাম
            </p>

            <p className="text-lg font-bold">
                {product.today} টাকা
            </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-500">
            ▼ {product.change.pct}%
        </span>
    </div>
</div>
</Link>
 ))}
            </div>
            <div>
                <div className="flex flex-col gap-2 mt-4 mb-4">
                <p className="font-bold">সব পণ্য</p>
                <p className='text-gray-400'>মোট ৩৩টি পণ্য দেখানো হচ্ছে</p>
            </div>

            <div className='grid grid-cols-3 gap-4 mx-2'>
                {data.map((product) => ( 
                    <Link href={`/productDetails/${product.id}`} key={product.id}>
                  <div className="rounded-2xl border border-gray-200 bg-white p-4" key={product.id}>
    <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-2xl">
            {product.image}
        </div>

        <div>
            <h3 className="font-semibold">
                {product.nameBn}
            </h3>

            <p className="text-xs text-gray-500">
                প্রতি {product.unit}
            </p>
        </div>
    </div>

    <div className="mt-4 flex items-end justify-between">
        <div>
            <p className="text-xs text-gray-500">
                আজকের দাম
            </p>

            <p className="text-lg font-bold">
                {product.today} টাকা
            </p>
        </div>

        <span className={product.change.dir === "up"
        ? "rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-500"
        : "rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600"
    } >
        {product.change.dir === "up" ? "▲" : "▼"}{" "}
        {product.change.pct}%
                    </span>
    </div>
</div>
</Link>
 ))}
            </div>
             
  </div>
  </div>   
    );
};

export default Dashboard;