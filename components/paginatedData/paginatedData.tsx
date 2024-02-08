"use client";
import { useState } from "react";
import ReactPaginate from "react-paginate";

import { CarCard } from "../CarCard/carCard";

interface IPaginatedDataProps {
  data: ICar[];
  pageSize: number;
}

export function PaginatedData({ data, pageSize }: IPaginatedDataProps) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + pageSize;
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / pageSize);

  function handlePageClick(event) {
    const newOffset = (event.selected * pageSize) % data.length;
    setItemOffset(newOffset);
  }

  function Items({ currentItems }: { currentItems: ICar[] }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 container mx-auto">
        {currentItems &&
          currentItems.map((item, index) => (
            <div key={item.license} className="flex justify-center">
              <CarCard car={item} />
            </div>
          ))}
      </div>
    );
  }

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="Proximo"
        onPageChange={handlePageClick}
        pageRangeDisplayed={8}
        pageCount={pageCount}
        previousLabel="Voltar"
        renderOnZeroPageCount={null}
        containerClassName="flex justify-center  mt-4 mb-10"
        activeClassName="bg-blue-500  px-3 py-2 text-white font-semibold"
        pageClassName="mr-2"
        pageLinkClassName="px-3 py-2  hover:bg-blue-200"
        previousClassName="mr-2 mt-2"
        previousLinkClassName="px-3 py-2  bg-blue-500 text-white font-semibold"
        nextClassName="ml-2 mt-2"
        nextLinkClassName="px-3 py-2  bg-blue-500 text-white font-semibold"
      />
    </>
  );
}
