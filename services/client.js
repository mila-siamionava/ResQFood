import { ApiError } from "@/services/ApiError";

async function apiClient(path, options = {}) {
  const baseUrl = process.env.SALLING_API_BASE_URL;
  const apiKey = process.env.SALLING_API_KEY;
  const url = baseUrl + path;

  const response = await fetch(url, {
    ...options,
    headers: { ...options.headers, Authorization: `Bearer ${apiKey}` },
  });
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(
      "Failed to fetch data",
      response.status,
      response.statusText,
      "FETCH_ERROR",
      errorText,
    );
  }
  return response.json();
}

export default apiClient;
