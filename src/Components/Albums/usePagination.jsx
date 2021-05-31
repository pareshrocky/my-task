import ReactPaginate from "react-paginate";
const usePagination = (count, pageIndex) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageCount={count}
      onPageChange={(data) => {
        let selected = data.selected;
        pageIndex(selected);
      }}
      onPageActive={() => {
        pageIndex(1);
      }}
      containerClassName="paginationClass"
      activeClassName="paginationActive"
      previousLinkClassName="previousBtn"
      nextLinkClassName="nextBtn"
      pageLinkClassName="numberBtn"
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
    />
  );
};
export default usePagination;
