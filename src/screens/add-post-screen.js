import React, { useContext, useRef, useState } from "react";
import { useCol } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";

export const AddPostScreen = () => {
  const { createRecord } = useCol("posts/");
  const { user } = useContext(AuthContext);
  const inputFile = useRef(null);

  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const RandomSctringAndNumber = () => {
    let result = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < 13; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const onFileChange = () => {
    setFile(inputFile.current.files[0]);
    setImgUrl(URL.createObjectURL(inputFile.current.files[0]));
	// console.log(URL.createObjectURL(inputFile.current.files[0]))
	console.log(inputFile.current.files[0])
  };

  const AddPost = () => {
    let id = RandomSctringAndNumber();
    createRecord(id, {
      id: id,
      imgUrl: imgUrl,
      title: title,
      description: description,
      price: price,
      uid: user.uid,
      status: "active",
    });
    console.log("success");
  };

  return (
    <div>
      <h1>Add Post</h1>
	  <input onChange={() => onFileChange(0)} type='file' id='file' ref={inputFile} />
	  <div style={{width: '200xp', height: '200px', backgroundImage: `url("${imgUrl}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain'}} >

	  </div>
      <input
        placeholder={"Title"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder={"description"}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        placeholder={"Price"}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
	  
      <button onClick={AddPost}>Add</button>
    </div>
  );
};
