import React from "react";

export default function AddVedio() {
    return (
        <>
            <section className="mb-8 mt-5">
                <div className="container mx-auto">
                    <div className="max-w-7xl p-6 mx-auto bg-slate-200 rounded-md shadow-md dark:bg-gray-800 mt-20">
                        <form action="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                                <div className="grid mb-2">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Title</label>
                                    <input type="text" name="title" className="from-control"/>
                                </div>
                                <div className="grid mb-2">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Author</label>
                                    <select name="author" className="from-control px-2">
                                        <option value="" selected disabled className="p-4">Selected</option>
                                        <option value="Motalib" className="p-4">Motalib</option>
                                        <option value="Motalib" className="p-4">Sanzid</option>
                                    </select>
                                </div>
                                <div className="grid group flex relative mb-2">
                                    <div class="absolute bottom-0 mb-12 flex flex-col items-center hidden group-hover:flex">
                                        <span class="relative rounded-md z-10 p-4 text-xs leading-none text-gray-900 whitespace-no-wrap bg-slate-200 shadow-lg">Please, Write your tag with comma <b className="text-xl">(,)</b> seperator.</span>
                                        <div class="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
                                    </div>
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Tags</label>
                                    <input type="text" name="tags" className="from-control"/>
                                </div>
                            </div>
                            <div className="grid mb-2">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Description</label>
                                <textarea name="description" className="from-control" rows="6" />
                            </div>
                            <button className="btn-blue float-right mt-2">Save</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
