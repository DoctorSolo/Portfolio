// src/hooks/useGitHubStats.js
import { useState, useEffect } from "react";
import axios from "axios";

export function useGitHubStats(username) {
  const [stats, setStats] = useState({
    commits: 0,
    repos: 0,
    stars: 0,
    followers: 0,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setStats((prev) => ({ ...prev, loading: true, error: null }));

        // Buscar dados do usuário
        const userResponse = await axios.get(
          `https://api.github.com/users/${username}`,
        );
        const userData = userResponse.data;

        // Buscar repositórios para contar commits (aproximado)
        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos?per_page=100`,
        );
        const repos = reposResponse.data;

        // Calcular total de commits (aproximado - busca em cada repositório)
        let totalCommits = 0;
        const commitPromises = repos.map(async (repo) => {
          try {
            const commitsResponse = await axios.get(
              `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1&page=1`,
            );
            // Pega o total de commits do header
            const linkHeader = commitsResponse.headers.link;
            if (linkHeader) {
              const match = linkHeader.match(/page=(\d+)>; rel="last"/);
              if (match) {
                totalCommits += parseInt(match[1]);
              }
            }
          } catch (error) {
            // Ignora erros em repositórios vazios ou sem commits
          }
        });

        await Promise.all(commitPromises);

        setStats({
          commits: totalCommits,
          repos: repos.length,
          stars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
          followers: userData.followers,
          loading: false,
          error: null,
        });
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
        setStats((prev) => ({
          ...prev,
          loading: false,
          error: "Erro ao carregar dados do GitHub",
        }));
      }
    };

    if (username) {
      fetchGitHubData();
    }
  }, [username]);

  return stats;
}
