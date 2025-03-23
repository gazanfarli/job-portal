import { useState, useMemo } from "react";

export function usePaginator<T>(data: T[], pageSize: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(
    () => Math.ceil(data.length / pageSize),
    [data, pageSize]
  );

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return data.slice(startIndex, startIndex + pageSize);
  }, [currentPage, data, pageSize]);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return { currentPage, totalPages, currentItems, changePage, setCurrentPage };
}
