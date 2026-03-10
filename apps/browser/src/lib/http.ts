type ApiErrorBody = {
  error?: string;
};

async function parseJsonSafe<T>(res: Response): Promise<T | null> {
  return res.json().catch(() => null);
}

function getErrorMessage(res: Response, body: ApiErrorBody | null): string {
  return body?.error ?? `Request failed (${res.status})`;
}

export async function getJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const body = await parseJsonSafe<T | ApiErrorBody>(res);

  if (!res.ok) {
    throw new Error(getErrorMessage(res, body as ApiErrorBody | null));
  }

  return body as T;
}

export async function postJson<TResponse, TRequest>(
  url: string,
  input: TRequest,
): Promise<TResponse> {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  const body = await parseJsonSafe<TResponse | ApiErrorBody>(res);

  if (!res.ok) {
    throw new Error(getErrorMessage(res, body as ApiErrorBody | null));
  }

  return body as TResponse;
}
