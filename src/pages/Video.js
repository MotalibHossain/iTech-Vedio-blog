import { useParams } from "react-router-dom";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

import { fetchVedios } from "../features/Videos/VideoSlice";

export default function Video() {
    const {videoId} = useParams();
    const dispatch = useDispatch();

    // All vedios data fetch
    const { vedios } = useSelector((state) => state.vedios);

    useEffect(() => {
        dispatch(fetchVedios());
    }, [dispatch]);

    // Filter exact vedio through by id
    const [vedio, setVedio] = useState({});

    useEffect(() => {
        if (vedios.length > 0) {
            const filterVedio = vedios.filter((item) => {
                return item.id == videoId;
            });

            setVedio(filterVedio[0]);
        }
    }, [vedios]);

    // console.log("vedios********************", vedios)
    // console.log("vedio********************", vedio)

    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        <VideoPlayer state={vedio}/>

                        <VideoDescription state={vedio}/>
                    </div>
                    <RelatedVideoList />
                </div>
            </div>
        </section>
    );
}
