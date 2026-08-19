import { useEffect, useState } from "react";

export function useGitHubStats() {
  const [stats, setStats] = useState({
    commits: 0,
    repos: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch("/github-stats.json");

        // Check the response
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        // Check if data exist
        setStats({
          commits: data?.contributions?.total ?? 0,
          repos: data?.repositories?.totalCount ?? 0,
          loading: false,
          error: null,
        });
      } catch (err) {
        console.error("GitHub stats don't work:", err);
        setStats({
          commits: 0,
          repos: 0,
          loading: false,
          error: err.message || "GitHub stats error",
        });
      }
    };

    fetchStats();
  }, []);
  return stats;
}

export default useGitHubStats;

// export function useGitHubStats() {
//   // Estado inicial seguro e com loading
//   const [stats, setStats] = useState({
//     commits: 500,
//     repos: 60,
//     loading: true,
//     error: null,
//   });

//   const USERNAME = import.meta.env.VITE_GITHUB_PROFILE;

//   useEffect(() => {
//     async function load() {
//       try {
//         const userRes = await fetch(`https://api.github.com/users/${USERNAME}`);
//         // A API de commits exige este header específico, senão retorna erro 403
//         const commitRes = await fetch(
//           `https://api.github.com/search/commits?q=author:${USERNAME}`,
//           { headers: { Accept: "application/vnd.github.cloak-preview+json" } },
//         );

//         if (!userRes.ok || !commitRes.ok) {
//           throw new Error("Erro ao buscar dados no GitHub");
//         }

//         const userData = await userRes.json();
//         const commitData = await commitRes.json();

//         // Atualiza o estado com os dados reais
//         setStats((prev) => ({
//           ...prev,
//           repos: userData.public_repos ?? 0, // Corrigido: UserData -> userData
//           commits: commitData.total_count ?? 0,
//           loading: false,
//         }));
//       } catch (err) {
//         setStats((prev) => ({
//           ...prev,
//           loading: false,
//           error: err.message,
//         }));
//       }
//     }

//     if (USERNAME) {
//       load();
//     }
//   }, [USERNAME]);

//   return stats;
// }
