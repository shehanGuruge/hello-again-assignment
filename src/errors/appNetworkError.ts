export default class AppNetworkError extends Error {
  constructor() {
    super("Network unreachable");
    this.name = "AppNetworkError";
  }
}