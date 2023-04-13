const SearchBar = ({ toggleSearchBar, setToggleSearchBar }) => {
  return (
    <li>
      <a
        className="nav-link"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i
          className=" icon-search3 "
          onClick={() => {
            toggleSearchBar
              ? setToggleSearchBar(false)
              : setToggleSearchBar(true);
          }}
        ></i>
      </a>
    </li>
  );
};

export default SearchBar;
