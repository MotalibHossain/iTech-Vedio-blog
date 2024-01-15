import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTags } from "../../features/Tags/TagsSlice";
import { addTags } from "../../features/relatedVedios/relatedTagsSlice";
import { fetchVedios } from "../../features/Videos/VideoSlice"

export default function Tags() {
    const dispatch = useDispatch();
    const { tags, isLoading, errorMessage } = useSelector(
        (state) => state.tags
    );

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    // console.log("Tags-------------------", tags, isLoading, errorMessage);

    const { relatedTags } = useSelector((state) => state.relatedTags);

    const HandleClick = (tag) => {
        dispatch(addTags(tag));
    };
    useEffect(() => {
        dispatch(fetchVedios(relatedTags));
    }, [relatedTags]);

    return (
        <>
            {tags.length > 0 ? (
                <section>
                    <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                        {tags &&
                            tags.map((tag, index) => {
                                const { id, title } = tag;
                                return (
                                    <div onClick={()=>HandleClick(title)} className={`bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer ${relatedTags.includes(title)?'text-white bg-blue-700':''}`}>
                                        {title}
                                    </div>
                                );
                            })}
                    </div>
                </section>
            ) : null}
        </>
    );
}
