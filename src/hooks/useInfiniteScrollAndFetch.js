// @ts-check
import { useInfiniteScroll } from './useInfiniteScroll';
import { useEffect, useState } from 'react';

/**
 * @template T
 * @param fetchData {(page: number) => Promise<{data: T[], totalPage: number}>}
 * @param deps {any[]}
 */
export function useInfiniteScrollAndFetch(fetchData, deps = []) {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAndSetData = async (page, reset = false) => {
    setLoading(true);

    const newData = await fetchData(page);

    setLoading(false);
    setData((prevData) =>
      reset ? newData.data : [...prevData, ...newData.data]
    );
    setTotalPage(newData.totalPage);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchAndSetData(0, true);
  }, deps);

  const endScrollRef = useInfiniteScroll(() => fetchAndSetData(page), loading);

  const refetch = (page = 0) => {
    setPage(page);
    fetchAndSetData(page, true);
  };

  return { data, page, totalPage, endScrollRef, refetch };
}
