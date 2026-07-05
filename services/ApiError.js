class ApiError extends Error {
  constructor(message, { status, statusText, details = null } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.details = details;
  }
}
export { ApiError };
