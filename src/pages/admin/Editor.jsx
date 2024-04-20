import { useState } from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "../../components/admin/QuillToolbar";
import "react-quill/dist/quill.snow.css";
import { MdImage } from "react-icons/md";

export const Editor = () => {
  const [image, setImage] = useState('')
  const [state, setState] = useState({ value: null });
  
  
  const handleChange = value => {
    setState({ value });
  };

  
  const handleImage = (e) => {
    setImage(e.target.files[0])
  }


  return (
    <form className="mx-auto p-4 lg:px-0 lg:py-10 flex flex-col gap-4">
      {image ? (
        <div className='relative h-96 group/item'>
          <img src={URL.createObjectURL(image)} alt="thumbnail" className="mx-auto object-contain h-full" />
            <label htmlFor="dropzone-file" className="absolute top-0 size-full invisible group-hover/item:visible flex flex-col items-center justify-center bg-gray-700/50 backdrop-blur-sm cursor-pointer border-2 border-gray-500 border-dashed rounded-lg bg-gray-50">
              <div className="flex flex-col items-center justify-center text-white">
                <MdImage className="size-16 mb-4" />
                <p className="text-sm mb-2"><span className="font-semibold">Click to change to a new image</span> or drag and drop</p>
                <p className="text-xs">JPG, PNG, SVG, or GIF</p>
              </div>
              <input type="file" id="dropzone-file" className="hidden" onChange={handleImage} />
            </label>
        </div>
      ) : (
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center h-64 cursor-pointer hover:bg-gray-200 border-2 border-gray-300 border-dashed rounded-lg bg-gray-50">
          <div className="flex flex-col items-center justify-center">
            <MdImage className="size-10 mb-4 text-gray-500" />
            <p className="text-sm text-gray-500 mb-2"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500">JPG, PNG, SVG, or GIF (MAX. 800x400px)</p>
          </div>
          <input type="file" id="dropzone-file" className="hidden" onChange={handleImage} />
        </label>
      )}
      <div>
        <label htmlFor="title" className='block mb-2 text-sm font-medium text-gray-900'>Post title</label>
        <input type="text" id='title' name='title' className='border border-gray-300 rounded-lg p-2.5 text-gray-900 w-full' required />
      </div>
      <div>
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
          className="h-96"
          />
      </div>
      <button className="bg-green-500 px-4 py-2 text-white rounded-md self-end shadow-md">Publish</button>
    </form>
  );
};

export default Editor;