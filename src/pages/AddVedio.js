import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVedios } from "../features/Videos/VideoSlice"
import { computeHeadingLevel } from "@testing-library/react";
import { createVedios } from "../features/CrudVedios/CrudVedioSlice";

export default function AddVedio() {

    // All vedios data fetch
    const dispatch = useDispatch();
    const { vedios } = useSelector(
        (state) => state.vedios
    );
    
    useEffect(() => {
        dispatch(fetchVedios([]));
    }, [dispatch]);

    
    // Author collecting 
    const [author, setAuthor]= useState()
    useEffect(()=>{
        setAuthor(
            vedios?.map((item)=>{
                return item.author;
            })
        )
    },[vedios])


    // Get all value from form 
    const [title, setTitle]=useState("")
    const [write, setWrite]=useState("")
    const [tag, setTag]=useState("")
    const [description, setDescription]=useState("")
    const vedio= {
        "id": "",
        "title": title,
        "description": description,
        "author": write,
        "avatar": "",
        "date": "",
        "duration": "",
        "views": "",
        "link": "https://www.youtube.com/embed/crnMVpqJ3yc?si=fxjR_6f_pge5ZBtU",
        "thumbnail": "https://i3.ytimg.com/vi/dD9O8DnIBj4/maxresdefault.jpg",
        "tags": tag,
        "likes": 0,
        "unlikes": 0
      }
    const CreateVedio = () =>{
        dispatch(createVedios(vedio))
    }

    return (
        <>
            <section className="mb-8 mt-5">
                <div className="container mx-auto">
                    <div className="max-w-7xl p-6 mx-auto bg-slate-200 rounded-md shadow-md dark:bg-gray-800 overflow-hidden">
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
                                <div className="grid mb-2">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Title</label>
                                    <input type="text" name="title" className="from-control" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                                </div>
                                <div className="grid mb-2">
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Author</label>
                                    <select name="author" className="from-control px-2" value={write} onChange={(e)=>setWrite(e.target.value)} required>
                                        <option className="p-4" value="selected" disabled>Selected</option>
                                        {author && author.map((item, index)=>{
                                            return (
                                                <option key={index} value={item} className="p-4">{item}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="grid group flex relative mb-2">
                                    <div className="absolute bottom-0 mb-12 flex flex-col items-center hidden group-hover:flex">
                                        <span className="relative rounded-md z-10 p-4 text-xs leading-none text-gray-900 whitespace-no-wrap bg-slate-200 shadow-lg">Please, Write your tag with comma <b className="text-xl">(,)</b> seperator.</span>
                                        <div className="w-3 h-3 -mt-2 rotate-45 bg-white"></div>
                                    </div>
                                    <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Tags</label>
                                    <input type="text" name="tags" className="from-control" value={tag} onChange={(e)=>setTag(e.target.value.split(","))} required/>
                                </div>
                            </div>
                            <div className="grid mb-2">
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Description</label>
                                <textarea name="description" className="from-control" rows="6" value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                            </div>
                        </form>
                        <button onClick={CreateVedio} className="btn-blue float-right mt-2">Save</button>
                    </div>
                </div>
            </section>
        </>
    );
}

