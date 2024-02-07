import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/tags/Tags";
import Pagination from "../components/ui/Pagination";

export default function Home() {
    return (
        <div className="container mx-auto px-8">
            <Tags />
            <VideoGrid />
            <Pagination />
        </div>
    );
}
