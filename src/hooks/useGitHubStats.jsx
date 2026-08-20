// hooks/useGitHubStats.jsx
import { useEffect, useState } from "react";

export function useGitHubStats() {
  const [stats, setStats] = useState({
    commits: 0,
    repos: {
      total: 0,
      public: 0,
      private: 0,
    },
    loading: true,
    error: null,
    updatedAt: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/github-stats.json");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // ✅ AQUI - lendo a estrutura correta do JSON
        setStats({
          commits: data?.commits ?? 0,
          repos: {
            total: data?.repos?.total ?? 0,
            public: data?.repos?.public ?? 0,
            private: data?.repos?.private ?? 0,
          },
          updatedAt: data?.updatedAt || null,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error("GitHub stats error:", err);
        setStats({
          commits: 0,
          repos: { total: 0, public: 0, private: 0 },
          loading: false,
          error: err.message || "GitHub stats error",
          updatedAt: null,
        });
      }
    };

    fetchStats();
  }, []);

  return stats;
}

export default useGitHubStats;
