export class ApiError extends Error {
  constructor(message, status, statusText, code, details = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.code = code;
    this.details = details;
  }
}
export default ApiError;
