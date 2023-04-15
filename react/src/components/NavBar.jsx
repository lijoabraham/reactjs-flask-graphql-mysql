import Logo from '../assets/man.png'
import Avatar from '../assets/programmer.png'

const NavBar = () => {
    return (
        <div
    className="items-center border-double border-2  border-white-400 justify-between bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-400 text-sm text-white">
    <nav className="flex space-x-52">
        <a href="/home"><div className="w-44 mb-2 mt-2 pt-1 pl-1">
            <img src={Logo}
                className="rounded-3xl w-18 h-14" alt="" />
        </div></a>
        <div className="text-3xl font-bold font-sans text-white py-4 mb-2 justify-center">
            User Management Tool</div>
        <div className="flex group grow justify-end p-3">
            <div className="relative">
                <button className="flex flex-row justify-center">
                    <div id="username-avatar"
                        className="w-14 h-14 relative flex justify-center items-center rounded-full bg-purple-500 text-xl text-white uppercase">
                        <svg className="absolute -left w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        </div>
                </button>
                <div className="hidden group-hover:block absolute right-0 w-40 mt-3 py-2 bg-white border rounded shadow-xl">
                    <a href="#"
                        className="flex cursor-default box-border items-center p-3 -mt-2 rounded text-sm text-gray-600 transition-colors duration-200 transform dark:text-black bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-300 dark:hover:text-white">
                        <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                            src={Avatar} alt="avatar" />
                        <div className="mx-1">
                            <h1 id="username-nm" className="text-sm font-semibold text-gray-700 dark:text-black"></h1>
                        </div>
                    </a>
                    <a href=""
                        className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-purple-300 hover:text-white">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    </nav>
</div>
    );
}
export default NavBar