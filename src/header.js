import './header.css';

function Header()
{
    return(
        <header>
                <div className="nav" style={{backgroundColor: "black"}}>
                    <ul>
                        <li className="logo">
                            <img id='logo' href="#home" src=".\logo.png"/>
                        </li>
                            <li className='links'>
                            <a href="">Home</a>
                            <a href="">About</a>
                            <a href="">Contact</a>
                        </li>
                    </ul>
                </div>
        </header>
    )
}

export default Header;