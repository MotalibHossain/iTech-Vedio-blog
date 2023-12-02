export default function Footer() {
    return (
        <footer class="relative bg-slate-100 shadow-md pt-8 pb-6">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-6/12 px-4">
                        <h4 class="text-3xl fonat-semibold text-blueGray-700">
                            Let's keep in touch!
                        </h4>
                        <h5 class="text-lg mt-0 mb-2 text-blueGray-600">
                            Find us on any of these platforms, we respond 1-2
                            business days.
                        </h5>
                        <div class="mt-6 lg:mb-0 mb-6">
                            <button
                                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-twitter"></i>
                            </button>
                            <button
                                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-facebook-square"></i>
                            </button>
                            <button
                                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-dribbble"></i>
                            </button>
                            <button
                                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                type="button"
                            >
                                <i class="fab fa-github"></i>
                            </button>
                        </div>
                    </div>
                    <div class="w-full lg:w-6/12 px-4">
                        <div class="flex flex-wrap items-top mb-6">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="https://github.com/MotalibHossain">
                                    Useful Links
                                </span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/MotalibHossain"
                                        >
                                            Free Products
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                                    Other Resources
                                </span>
                                <ul class="list-unstyled">
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                        >
                                            MIT License
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/terms?ref=njs-profile"
                                        >
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="https://creative-tim.com/privacy?ref=njs-profile"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
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
                <hr class="my-6 border-blueGray-300" />
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright ©{" "}
                            <span id="get-current-year">
                                {new Date().getFullYear()}
                            </span>
                            <a
                                href="https://motalibhossain.github.io/portfolio/"
                                class="text-blueGray-500 hover:text-gray-800"
                                target="_blank"
                            >
                                {" "}
                                iTechEys Vedio Blog by
                            </a>
                            <a
                                href="https://motalibhossain.github.io/portfolio/"
                                class="text-blueGray-500 font-bold hover:text-blueGray-800"
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
