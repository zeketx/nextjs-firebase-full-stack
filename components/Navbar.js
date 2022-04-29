
export default function Navbar() {
    return (
        <nav className="container flex justify-around py-8 mx-auto bg-white">
            <div className="flex items-center">
                <h3 className="text-2xl font-medium text-black-500">Shmedium</h3>
            </div>
            {/* <!-- left header section --> */}
            <div className="items-center hidden space-x-8 lg:flex">
                <a href="">Home</a>
                <a href="">About Us</a>
                <a href="">Our Team</a>
                <a href="">Shop</a>
            </div>
            {/* <!-- right header section --> */}
            <div className="flex items-center space-x-2">
                <button className="px-4 py-2 text-blue-100 bg-black rounded-md">
                Sign in
                </button>
            </div>
        </nav>
    )
}

  