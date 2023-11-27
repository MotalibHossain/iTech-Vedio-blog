import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { fetchVedios } from "../../features/Videos/VideoSlice";

export default function VideoGridItem() {
    const dispatch = useDispatch();
    const { vedios, isLoading, isError, errorMessage } = useSelector(
        (state) => state.vedios
    );

    useEffect(() => {
        dispatch(fetchVedios());
    }, [dispatch]);

    
    console.log( "vedios-------------------", vedios, isLoading, isError, errorMessage );

    return (
        <>
            {vedios &&
                vedios.map((vedio, index) => {
                    const { id, title, author, thumbnail } = vedio;
                    return (
                        <div key={index} className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
                            <div className="w-full flex flex-col">
                                <div className="relative">
                                    <Link to={`/videos/${id}`}>
                                        <img
                                            src={thumbnail}
                                            className="w-full h-auto"
                                            alt="Some video title"
                                        />
                                    </Link>

                                    <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                                        12:10
                                    </p>
                                </div>

                                <div className="flex flex-row mt-2 gap-2">
                                    <Link to="/videos/1" className="shrink-0">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/73503432?v=4"
                                            className="rounded-full h-6 w-6"
                                            alt="Learn with Sumit"
                                        />
                                    </Link>

                                    <div clas="flex flex-col">
                                        <Link to={`/videos/${id}`}>
                                            <p className="text-slate-900 text-sm font-semibold">
                                                {title}
                                            </p>
                                        </Link>
                                        <Link
                                            className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                                            to={`/videos/${id}`}
                                        >
                                            {author}
                                        </Link>
                                        <p className="text-gray-400 text-xs mt-1">
                                            200 views . May 3, 2022
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}
