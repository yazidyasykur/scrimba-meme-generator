function Header() {
    return (
        <nav className="nav-container">
            <div className="name-logo">
                <img src={require("../images/troll-face.png")} alt="trollface" />
                <h3>Meme Generator</h3>
            </div>

            <p className="project-name">React Course - Project 3</p>
        </nav>
    )
}

export default Header