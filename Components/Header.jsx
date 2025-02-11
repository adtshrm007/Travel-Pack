export default function Header(){
    return(
        <div className="header">
            <div className="logoTagline">
            <p className="logo">FLIGHT</p>
            <p className="tagline">Book Your Flight</p>
            </div>
            <div className="options">
                <p className="menu">Home</p>
                <p className="menu">About</p>
                <p className="menu">Offers</p>
                <p className="menu">Destination</p>
                <p className="menu">Contact Us</p>
            </div>
            <div className="book">
                <div className="tickets">
                    <p>Sign In</p>
                </div>
                <div className="tickets">
                    <p>Sign up</p>
                </div>
            </div>

        </div>
    )
}