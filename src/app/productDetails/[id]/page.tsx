interface products {
     "id": number,
    "slug": string,
    "nameBn": string,
    "category": string,
    "categoryNameBn": string,
    "categoryIcon": string,
    "unit": string,
    "image": string,
    "today": number,
    "yesterday": number,
    "lastWeek": number,
    "lastMonth": number,
    "change": {
      "dir": "up" | "down",
      "pct": number
    },
    "markets": [
      {
        "market": string,
        "division": string,
        "min": number,
        "max": number,
      },
    ]
}
interface productDetailsPageProps{
    params: Promise<{
        id:number
    }>
}
const ProductDetails = async({params}:productDetailsPageProps) => {
    const {id} = await params;
    const res= await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`);
    const data:products=await res.json();

    return (
        <div className="pt-4">
             <p className="relative mx-auto max-w-7xl pb-4"> {`হোম  > ${data.categoryNameBn} > ${data.nameBn} `}</p>
             <div className="rounded-2xl border border-gray-200 bg-white p-4 relative mx-auto max-w-7xl" >
     
    <div className="flex items-center gap-3">
        <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100 text-2xl">
            {data.image}
        </div>

        <div>
            <h3 className="font-semibold text-4xl">
                {data.nameBn}
            </h3>

            <p className="text-xs text-gray-500">
                প্রতি {data.unit} {data.categoryNameBn}
            </p>
        </div>
    </div>

    <div className="mt-4 flex items-end justify-between">
       
<div>
  <p
    className={
      data.today > data.yesterday
        ? "text-gray-500"
        : data.today < data.yesterday
        ? "text-gray-500"
        : "text-gray-500"
    }
  >
    {data.today > data.yesterday
      ? `গতকালের তুলনায় আজ দাম বেড়েছে · ${data.today - data.yesterday} টাকা`
      : data.today < data.yesterday
      ? `গতকালের তুলনায় আজ দাম কমেছে · ${data.yesterday - data.today} টাকা`
      : "গতকালের তুলনায় আজ দাম অপরিবর্তিত"}
  </p>
</div>
       <div className="flex min-w-24 flex-col items-center rounded-2xl bg-[#eef1ee] px-4 py-3 text-center">
  <p className="text-xs text-gray-500">আজকের দাম</p>

  <p className="text-3xl font-bold leading-tight text-[#17231c]">
    {data.today}
  </p>

  <p className="text-xs text-gray-500">{data.unit}</p>

  <div
    className={`mt-0.5 flex items-center gap-1 text-xs font-bold ${
      data.change.dir === "up" ? "text-red-500" : "text-green-600"
    }`}
  >
    <span>{data.change.dir === "up" ? "▲" : "▼"}</span>
    <span>{data.change.pct}%</span>
  </div>
</div>
    </div>
</div>
<div className="relative mx-auto max-w-7xl">
            <p className="mt-4 mb-4 font-bold">দামের সারসংক্ষেপ</p>

           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> 
          <div className="rounded-2xl border border-gray-200 bg-white p-5"> 
            <p className="font-bold">সর্বনিম্ন দাম</p> 
            <h3 className="mt-2 text-xl font-semibold text-green-500">
               {data.markets[0].min} টাকা </h3>
                <p className="mt-1 text-sm text-gray-500"> সবচেয়ে কম দামের বাজার </p> 
                </div> 
                <div className="rounded-2xl border border-gray-200 bg-white p-5"> 
                  <p className="font-bold">সর্বাধিক দাম</p> 
                  <h3 className="mt-2 text-xl font-semibold text-red-500">
                     {data.markets[0].max} টাকা </h3>
                      <p className="mt-1 text-sm text-gray-500"> সবচেয়ে বেশি দামের বাজার </p> 
                      </div> 
                      <div className="rounded-2xl border border-gray-200 bg-white p-5"> 
                        <p className="font-bold">গড় দাম</p>
                         <h3 className="mt-2 text-xl font-semibold text-green-500"> 
                          {((data.markets[0].max + data.markets[0].min) / 2)} টাকা </h3> 
                          <p className="mt-1 text-sm text-gray-500"> প্রতি কেজি-এর হিসাবে </p> 
                          </div> 
                          </div>

        </div>

        <div className="relative mx-auto max-w-7xl">
        <p className="mt-4 mb-4 font-bold"> বাজারভিত্তিক আজকের দাম </p>


         <table className="w-full text-left">
    <thead>
        <tr className="border-b-2 border-gray-500">
            <th>বাজার</th>
            <th>বিভাগ</th>
            <th>সর্বনিম্ন</th>
            <th>সর্বাধিক</th>
            <th>গড়</th>
        </tr>
    </thead>

    <tbody>
        {data.markets.map((market) => (
            <tr key={market.market} className="border-b border-gray-500">
                <td>{market.market}</td>
                <td>{market.division}</td>
                <td>{market.min} টাকা</td>
                <td>{market.max} টাকা</td>
                <td>{(market.min + market.max) / 2} টাকা</td>
            </tr>
        ))}
    </tbody>
</table>
       
        </div>
        </div>
    );
};

export default ProductDetails;