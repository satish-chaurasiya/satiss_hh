import { useState, useEffect } from 'react';

const GIST_URL = 'https://gist.githubusercontent.com/satish-chaurasiya/0f6f77051a72baf30a774a593823fb84/raw/portfolio.json';

export interface PortfolioData {
  header: {
    logo: string;
    navigation: Array<{
      text: string;
      link: string;
      isButton: boolean;
    }>;
  };
  hero: {
    title: string;
    subtitle: string;
    avatarUrl: string;
  };
  skills: {
    title: string;
    items: Array<{
      name: string;
      icon: string;
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
      technologies: string[];
    }>;
  };
  contact: {
    title: string;
    info: Array<{
      type: string;
      title: string;
      value: string;
    }>;
  };
}

export function usePortfolioData() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(GIST_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { data, loading, error };
}