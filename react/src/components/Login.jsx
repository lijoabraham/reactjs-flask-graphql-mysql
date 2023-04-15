const Login = () => {
    return (
        <div className=" bg-contain  antialiased bg-[url('assets/bg-img.jpg')]">
            <div className="container px-6 mx-auto">
                <div
                    className="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
                >
                    <div className="flex flex-col w-full">
                    </div>
                    <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
                        <div className="bg-white p-10 flex flex-col w-full shadow-xl rounded-xl">
                            <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
                                Login
                            </h2>
                            <form action="/login.php" className="w-full" method="post">
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="username" className="text-gray-500 mb-2"
                                    >Username</label
                                    >
                                    <input required
                                        type="text"
                                        id="username"
                                        placeholder="Please enter your username"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                                    />
                                </div>
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="password" className="text-gray-500 mb-2"
                                    >Password</label
                                    >
                                    <input required
                                        type="password"
                                        id="password"
                                        placeholder="Please enter your password"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                                    />
                                </div>
                                <div className="flex flex-col w-full my-5">
                                    <button
                                        type="button"
                                        className="w-full py-4 bg-green-600 rounded-lg text-green-100"
                                    >
                                        <div className="flex flex-row items-center justify-center">
                                            <div className="font-bold">Login</div>
                                        </div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;