import React from "react";

export default function AddVedio() {
    return (
        <>
            <section className="mb-8 mt-5">
                <div className="container mx-auto">
                    <div className="max-w-7xl p-6 mx-auto bg-slate-200 rounded-md shadow-md dark:bg-gray-800 mt-20">
                        <form action="">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                                <div className="grid">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Title</label>
                                    <input type="text" name="title" className="from-control"/>
                                </div>
                                <div className="grid">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Author</label>
                                    <input type="text" name="author" className="from-control"/>
                                </div>
                                <div className="grid">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Tags</label>
                                    <input type="text" name="tags" className="from-control"/>
                                </div>
                                
                            </div>
                            <div className="grid">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Description</label>
                                <textarea name="description" className="from-control grid grid-rows"/>
                            </div>
                            <button className="btn-blue mt-2">Save</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
