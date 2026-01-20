if (typeof window !== "undefined") {
  if (typeof (window as any).global === "undefined") {
    (window as any).global = window;
  }

  if (typeof globalThis === "undefined") {
    (window as any).globalThis = window;
  }
}
