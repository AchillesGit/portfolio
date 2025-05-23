import { EmployerMarquee } from "./components/employerMarquee";
import { Hero } from "./components/hero";
import { ServiceList } from "./components/serviceList";

export default function Home() {
  return (
    <div className='min-h-screen fade-in'>
      <Hero />
      <ServiceList />
      <EmployerMarquee />
    </div>
  );
}
