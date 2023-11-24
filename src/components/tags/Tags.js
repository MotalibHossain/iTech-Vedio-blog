import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchTags } from "../../features/Tags/TagsSlice";

import Tag from "./Tag";

export default function Tags() {
    const dispatch = useDispatch();
    const { tags, isLoading, errorMessage } = useSelector(
        (state) => state.tags
    );

    useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch]);

    // console.log("Tags-------------------", tags, isLoading, errorMessage);

    return (
        <>
            {tags.length > 0 ? (
                <section>
                    <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                        {tags &&
                            tags.map((tag, index) => {
                                const { id, title } = tag;
                                return <Tag key={index} title={title} />;
                            })}
                    </div>
                </section>
            ) : null}
        </>
    );
}
