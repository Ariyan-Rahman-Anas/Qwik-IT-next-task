import Books from "@/components/BooksForHomePage";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="pb-16">

      <Hero />
      <Books/>
    </main>
  );
}