"use client"; // Forces client-side rendering

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Results from "@/components/Results";
import { resolve } from "styled-jsx/css";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre") || "fetchTrending";
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      if (!API_KEY) {
        console.error("API Key is missing. Check your .env.local file.");
        return;
      }

      const res = await fetch(
        `https://api.themoviedb.org/3${
          genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
        }?api_key=${API_KEY}&language=en-US&page=1`,
        {next: {revalidate:10000}}
      );
   

      if (!res.ok) {
        console.error("Failed to fetch data");
        return;
      }

      const data = await res.json();
      setResults(data.results);
    }

    fetchData();
  }, [genre]);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
