import { useEffect, useState } from "react";

export function useGitHubStats() {
  const [stats, setStats] = useState({
    commits: 0,
    repos: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    async function load() {
      try {
        // Extensão ".js" removida (padrão de rotas do Next.js)
        const res = await fetch("/api/github-stats");
        if (!res.ok) throw new Error("Erro ao buscar dados");

        const data = await res.json();

        setStats({
          commits: data.commits,
          repos: data.repos,
          loading: false,
          error: null,
        });
      } catch (err) {
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: err.message,
        }));
      }
    }

    load();
  }, []);

  return stats;
}
