import { apiClient } from "./ApiClient";

export const getAllFeatures
	= () => apiClient.get("/types/feature");