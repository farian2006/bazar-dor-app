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

const Details = async({params}:productDetailsPageProps) => {
    const {id} = await params;
    const res= await fetch(`https://api.api-store.workers.dev/api/bazardor/products/${id}`);
    const data:products=await res.json();
    return (
        
    );
};

export default Details;