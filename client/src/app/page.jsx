import Content from "./Components/Content/Content";
import Dashboard from "@/app/Components/Dashboard/Dashboard";
import StatsSection from "./Components/Statssection/StateSection";
import StatItem from "./Components/StatItem/StatItem";
import Partners from "./Components/Partners/Partners";

export default function Home() {
  return (
    <div className="">
      <Content />
      <Dashboard />
      <StatsSection />
      <StatItem />
      <Partners />
    </div>
  );
}
