import { useState, useEffect, useCallback } from "react";

const API_BASE = "/api";

export function useApi(resource) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = `${API_BASE}/${resource}`;

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Failed to load ${resource}`);
      const payload = await response.json();
      setData(payload);
      setError(null);
    } catch (err) {
      setError(err.message || "Unable to load data");
    } finally {
      setLoading(false);
    }
  }, [resource, url]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const create = async (item) => {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error(`Unable to create ${resource}`);
    }

    const result = await response.json();
    await refresh();
    return result;
  };

  const update = async (id, item) => {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });

    if (!response.ok) {
      throw new Error(`Unable to update ${resource}`);
    }

    const result = await response.json();
    await refresh();
    return result;
  };

  const remove = async (id) => {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Unable to delete ${resource}`);
    }

    await refresh();
  };

  return {
    data,
    loading,
    error,
    refresh,
    create,
    update,
    remove,
  };
}
