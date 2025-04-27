import { Hero } from "./components/hero";
import { ServiceList } from "./components/serviceList";

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <ServiceList />
    </div>
  );
}
