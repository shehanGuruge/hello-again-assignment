export function debounce<T extends (...args: any[]) => void>(fn: T, delay = 300): T {
  let timer: NodeJS.Timeout | null = null;
  return function (...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  } as T;
}
