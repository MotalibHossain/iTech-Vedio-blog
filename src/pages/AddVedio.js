import React from "react";

export default function AddVedio() {
    return (
        <>
            <section className="mb-8 mt-5">
                <div className="container mx-auto mx-auto">
                    <form action="">
                        <div className="grid grid-rows">
							<label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
							<div>
								<input type="text" name="title" className="h-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"/>
							</div>
						</div>
                    </form>
                </div>
            </section>
        </>
    );
}
