    import { connect } from 'react-redux';
    import { NavLink, Link } from 'react-router-dom';
    import logo_W from 'assets/img/g.png';
    import loading_g from 'assets/img/loading.gif';

    function Navbar() {
    return (
        <nav className="w-full top-0 sticky bg-white shadow-md z-50 py-3">
        <div className="px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
            <Link to="/" className="ml-4 mt-2">
                <img src={logo_W} width={140} height={100} className="" alt="Logo" />
            </Link>
            <div className="ml-4 mt-2 flex-shrink-0">
                <NavLink
                to="/censo"
                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4"
                >
                Censo
                </NavLink>
                <NavLink
                to="/instructivo"
                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4"
                >
                Instructivo
                </NavLink>
                <NavLink
                to="/ayuda"
                className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4"
                >
                Contacto
                </NavLink>
                <button
                type="button"
                className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-orange-button px-6 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                Diligenciar formulario
                <img
                    src={loading_g}
                    className="mt-0 ml-2"
                    width={20}
                    height={30}
                    alt="Loading"
                />
                </button>
            </div>
            </div>
        </div>
        </nav>
    );
    }

    const mapStateToProps = (state) => ({});

    export default connect(mapStateToProps, {})(Navbar);
