const fetcher = (url: RequestInfo | URL) => fetch(url).then((r) => r.json());

export { fetcher };
