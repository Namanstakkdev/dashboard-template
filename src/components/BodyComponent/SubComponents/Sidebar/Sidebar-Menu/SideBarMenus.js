function SideBarMenus({ activenav, values, setActiveNav }) {

    const toggleMenu = (value) => {
        setActiveNav(value);
    }

    return (
        <div>
            <a
                className={
                    activenav === `${values[0]}-tab` ? "nav-link active" : "nav-link"
                }
                id={`${values[0]}-tab`}
                data-toggle="pill"
                href={`# ${values[0]}`}
                role="tab"
                aria-controls={`${values[0]}`}
                aria-selected="true"
            >
                <i
                    className={values[1]}
                    onClick={toggleMenu.bind(this, values[0])}
                ></i>
            </a>
        </div>
    )
}

export default SideBarMenus;