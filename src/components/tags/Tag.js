import { useSelector, useDispatch } from "react-redux";
import { addTags } from "../../features/relatedVedios/relatedTagsSlice";

export default function Tag({ title }) {
    const dispatch = useDispatch();
    const { relatedTags } = useSelector((state) => state.relatedTags);

    const HandleClick = (tag) => {
        dispatch(addTags(tag));
    };
    console.log("relatedTags----------------", relatedTags);

    return (
        <div onClick={()=>HandleClick(title)} className={`bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer ${relatedTags.includes(title)?'text-white bg-blue-700':''}`}>
            {title}
        </div>
    );
}
