const Sidebar_Menu = ({ menuitem, activenav, handleClick }) => {
  return (
    <>
      {menuitem.map((vals) => (
        <div>
          <a
            className={
              activenav === `${vals[0]}-tab` ? "nav-link active" : "nav-link"
            }
            id={`${vals[0]}-tab`}
            data-toggle="pill"
            href={`# ${vals[0]}`}
            role="tab"
            aria-controls={`${vals[0]}`}
            aria-selected="true"
          >
            <i
              className={vals[1]}
              onClick={() => {
                handleClick(`${vals[0]}-tab`, `${vals[0]}`);
              }}
            ></i>
          </a>
        </div>
      ))}
    </>
  );
};

export default Sidebar_Menu;
