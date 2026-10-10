import Dashboard from "@/components/Dashboard";
import Hero from "@/components/Hero";
import { Suspense } from "react";



const page = () => {
    return (
        <div>
        <Hero></Hero>
        <Suspense fallback="loading..">
        <Dashboard></Dashboard>
        </Suspense>
        </div>
    );
};

export default page;