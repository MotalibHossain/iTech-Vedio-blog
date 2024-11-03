import React from "react";

const FormComponent = () => {
    return (
        <div className="container mx-auto w-full max-w-4xl border rounded-md border-gray-300 p-6 mt-6 gap-y-4">
            <div className="border-b border-gray-200 mb-5 pb-5 sm:flex sm:items-center sm:justify-between">
                <h3 className="text-base font-semibold text-gray-900">
                    Job Postings
                </h3>
                <div className="mt-3 flex sm:ml-4 sm:mt-0">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                        Share
                    </button>
                    <button
                        type="button"
                        className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Create
                    </button>
                </div>
            </div>

            <form action="">
                <div className="grid grid-flow-row auto-cols-fr gap-x-4 gap-y-2 sm:grid-cols-3">
                    <div className="from-group">
                        <div className="md:col-span-3 lg:col-span-3">
                            <label
                                htmlFor="name"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Name
                            </label>
                        </div>

                        <div className="md:col-span-9 lg:col-span-9">
                            <input
                                name="Name"
                                type="text"
                                placeholder="Type your name"
                                className="form-controls"
                            />
                        </div>
                    </div>
                    <div className="from-group">
                        <div className="md:col-span-3 lg:col-span-3">
                            <label
                                htmlFor="email"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Email
                            </label>
                        </div>

                        <div className="md:col-span-9 lg:col-span-9">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className="form-controls"
                            />
                        </div>
                    </div>
                    
                    <div className="from-group">
                        <div className="md:col-span-3 lg:col-span-3">
                            <label
                                htmlFor="phone"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Phone
                            </label>
                        </div>

                        <div className="md:col-span-9 lg:col-span-9">
                            <input
                                name="Name"
                                type="tel"
                                placeholder="+880 0174 882579"
                                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                className="form-controls"
                            />
                        </div>
                    </div>
                    <div className="from-group">
                        <div className="md:col-span-3 lg:col-span-3">
                            <label
                                htmlFor="teacher"
                                className="block text-sm/6 font-medium text-gray-900"
                            >
                                Teacher
                            </label>
                        </div>

                        <div className="md:col-span-9 lg:col-span-9">
                            <select
                                name="teacher"
                                defaultValue="Canada"
                                className="form-controls"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
