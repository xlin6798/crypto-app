function Header({ title }) {
    return (
        <header className="header bg-dark text-light p-4">
            <h2 className="display-1 text-center"> {title} </h2>
        </header>
    );
}

export default Header
