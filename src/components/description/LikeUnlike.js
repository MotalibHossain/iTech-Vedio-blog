import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";

export default function LikeUnlike({state}) {
    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {state.likes}
                </div>
            </div>
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {state.unlikes}
                </div>
            </div>
        </div>
    );
}
