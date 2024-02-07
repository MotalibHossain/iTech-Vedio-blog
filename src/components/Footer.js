export default function Footer() {
    return (
        <footer className="relative bg-slate-100 shadow-md pt-8 pb-6">
            <div className="px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <h4 className="text-5xl fonat-semibold text-blueGray-700 mb-4">
                            Let's keep in touch!
                            {/* iTechEys Vedio Blog  */}
                        </h4>
                        {/* <div className="flex flex-shrink-0 items-center">
                            <a href="/">
                                <img className="h-8 w-auto max-sm:ml-11" src="/static/media/itecheys-logo-2.1ae1e2625dcc8324bec4.png" alt="iTechEys" />
                            </a>
                        </div> */}
                        <h5 className="mt-0 mb-2 text-blueGray-400 text-justify">
                        Our video blogging website is fully customizable and professional. 
                        We used React and Tailwind for the front end, while Python, Django REST, and MySQL databases were used for the back end.
                        </h5>
                        <h5 className="text-xl fonat-semibold text-blueGray-500">
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div className="mt-6 lg:mb-0 mb-6">
                            <button
                                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-twitter"></i>
                            </button>
                            <button
                                className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-facebook-square"></i>
                            </button>
                            <button
                                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-dribbble"></i>
                            </button>
                            <button
                                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="https://github.com/MotalibHossain">
                                    Useful Links
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            Free Products
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">
                                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Other Resources
                                </span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                        >
                                            MIT License
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/terms?ref=njs-profile"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/privacy?ref=njs-profile"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/contact-us?ref=njs-profile"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div className="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright ©{" "}
                            <span id="get-current-year">
                                {new Date().getFullYear()}
                            </span>
                            <a
                                href="https://motalibhossain.github.io/portfolio/"
                                className="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                            >
                                {" "}
                                iTechEys Vedio Blog by
                            </a>
                            <a
                                href="https://motalibhossain.github.io/portfolio/"
                                className="text-blueGray-500 font-bold hover:text-blueGray-800"
                            >
                                {" "}
                                iTechEys Team❤️
                            </a>
                            .
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
