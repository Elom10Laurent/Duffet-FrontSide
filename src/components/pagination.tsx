const Pagination = ({
  productsPerPage,
  totalProducts,
  setCurrentPage,
  currentPage,
}: {
  productsPerPage: number;
  totalProducts: number;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (
    pageNumber: number,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <nav className="flex justify-center ">
      <ul className="pagination  flex  gap-2 my-10 border-2 p-2    rounded-full ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item py-1 px-3 ${
              currentPage === number ? "bg-[#21807e]  rounded-full text-white " : ""
            }`}
          >
            <a
              onClick={(e) => paginate(number, e)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
