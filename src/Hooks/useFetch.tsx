import { useEffect, useRef, useState } from "react";

export function useFetch<T>(url: RequestInfo | URL, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // criado para o useEffect saber que o options é usado apenas como referência, e não precisar ser incluído no array de dependências juntamente com o URL
  const optionsRef = useRef(options);
  // porque a referência cria uma vez que o hook é ativado. Se por acaso o options for modificado e tentar fazer o hook funcionar novamente, ele não vai pegar o novo valor de options, porque ele foi definido apenas como uma referência. Da forma a seguir, toda vez que ele atualizar, o valor de current vai ser o novo options.
  optionsRef.current = options;

  useEffect(() => {
    // resetar dados
    setLoading(true);
    setData(null);

    // AbortController
    // o abort(), método da AbortControllerinterface, anula uma solicitação DOM antes de ser concluída. Isso é capaz de abortar solicitações de busca, o consumo de quaisquer corpos de resposta ou fluxos.
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          signal,
          ...optionsRef.current,
        });

        if (!response.ok)
          throw new Error(`Erro na requisição à API: ${response.status}`);

        const responseData = (await response.json()) as T;

        if (!signal.aborted) setData(responseData);
      } catch (error) {
        if (!signal.aborted && error instanceof Error)
          setError(`Ocorreu um erro na requisição: ${error.message}`);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}
