// src/hooks/useGitHubStats.js
import { useState } from "react";

export function useGitHubStats(username) {
  // 🔥 Dados manuais - Substitua pelos seus números reais
  const [stats] = useState({
    commits: 513, // ← Seus commits
    repos: 62, // ← Seus repositórios
    stars: 84, // ← Suas estrelas
    followers: 354, // ← Seus seguidores
    loading: false,
    error: null,
  });

  return stats;
}
