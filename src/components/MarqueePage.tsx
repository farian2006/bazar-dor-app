export const dynamic = "force-dynamic";

import Marquee from "react-fast-marquee";

interface Marquee {
  image: string;
  id: number;
  nameBn: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}

const MarqueePage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  const data: Marquee[] = await res.json();

  return (
    <div className="pt-2">
      <Marquee speed={80}>
        {data.map((d) => (
          <span className="m-2" key={d.id}>
            <span className="mx-1">{d.image}</span>
            <span className="mx-1">{d.nameBn}</span>
            <span className="mx-1">{d.today} টাকা/কেজি</span>
            <span
              className={
                d.change.dir === "up" ? "text-red-500" : "text-green-500"
              }
            >
              {d.change.dir === "up" ? "▲" : "▼"}
            </span>
            <span>{d.change.pct} %</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueePage;
