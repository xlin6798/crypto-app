import Button from "react-bootstrap/Button";

function Header({ title, onAdd }) {
    return (
        <header className="header">
            <h3 className="text-center"> {title} </h3>
            <Button variant="primary" onClick={onAdd}> Add </Button>
        </header>
    );
}

export default Header
