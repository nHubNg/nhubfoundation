import React from "react"

const ItemsPaginator = ({currentPage, totalPages, indexOfLastItem, handleNextPage, handlePrevPage, handeGoToPage, itemsLength}) => {

    return (
        <>
        {/* Pagination buttons */}
        <div className="flex flex-col py-4 border rounded m-2 border-slate-400"> 
         <div className="flex justify-center text-xs">Page {currentPage} of {totalPages} </div>
        <div className="flex gap-2 justify-center align-bottom mt-4 text-sm">
          
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md"
          >
            Previous
          </button>

          {currentPage - 1 <= 0 ? '' :
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= itemsLength}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md border"
          >
            {currentPage - 1}
          </button>
          }

          <button
            disabled={true}
            className="px-4 py-2 text-orange rounded border"
          >
            {currentPage}
          </button>

          {currentPage + 1 > totalPages ? '' :
          <button
            onClick={handleNextPage}
            disabled={indexOfLastItem >= itemsLength}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-r-md border"
          >
            {currentPage + 1}
          </button>
          }

          {currentPage + 2 > totalPages || currentPage - 1 === 1 ? '' :
          <button
            onClick={handleNextPage}
            
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md border"
          >
            {currentPage + 2}
          </button>
          
          }
          {currentPage + 3 > totalPages || currentPage - 1 === 1 ? '' : 
          <>...</>}
          {currentPage + 1 > totalPages ? '' :
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md"
          >
            Next Page
          </button>
}
          

          {currentPage === totalPages || currentPage + 1 === totalPages ? '' :
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded-l-md"
          >
            Last Page
          </button>
}
        </div>
        </div>
        </>
    )

}

export default ItemsPaginator