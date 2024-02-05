import { Link } from "react-router-dom";

export default function RelatedVideoListItem() {
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to="/videos/1">
                    <img
                        src="https://rb.gy/1ird4u"
                        className="object-cover"
                        alt="Some video title"
                    />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    12:10
                </p>
            </div>

            <div clas="flex flex-col w-full">
                <Link to="/videos/1">
                    <p className="text-slate-900 text-sm font-semibold">
                    How to design a awesome GitHub profile readme in bangla-2021
                    </p>
                </Link>
                <Link
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    to="/videos/1"
                >
                    Learn with Sumit
                </Link>
                <p className="text-gray-400 text-xs mt-1">
                    100K views . 23 Oct 2022
                </p>
            </div>
        </div>
    );
}
