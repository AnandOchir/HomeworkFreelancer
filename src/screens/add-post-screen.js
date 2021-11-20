import React, { useContext, useRef, useState } from "react";
import { useCol, useFirebase, useDoc } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";
import { TAGS } from '../datas'
import { Loading } from "../components";

export const AddPostScreen = () => {
  const [tags, setTags] = useState(TAGS);

  const { createRecord, loading } = useCol("posts/");
  const { storage } = useFirebase();
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const { data: userData, updateRecord: createUserPosts } = useDoc("users/" + uid);
  const inputFile = useRef(null);

  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [clickedTags, setClickedTags] = useState([]);

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
  };

  const AddPost = async () => {
    let id = RandomSctringAndNumber();
    const ref = storage.ref("postImages/" + id);
    const arr = userData.posts;
    arr.push(id)
    await ref.put(file).then(() => {
      console.log("Uploaded a blob or file!");
    });

    storage
      .ref("postImages/" + id)
      .getDownloadURL()
      .then((url) => {
        createRecord(id, {
          id: id,
          imgUrl: url,
          title: title,
          description: description,
          price: price,
          uid: user.uid,
          status: "active",
          tags: clickedTags,
        });
        createUserPosts({
          posts: arr
        });
      });

    setTitle("");
    setDescription("");
    setImgUrl("");
    setClickedTags([]);
    setPrice("");
    console.log("success");
  };

  const Filter = (tag) => {
    setClickedTags([...clickedTags, tag]);
    setTags(tags.filter((tg) => tg != tag));
  };

  const reFilter = (tag) => {
    setTags([...tags, tag]);
    setClickedTags(clickedTags.filter((tg) => tg != tag));
  };

  if(loading) {
    return <Loading />
  }

  return (
    <div>
      <h1>Add Post</h1>
      <input
        onChange={() => onFileChange(0)}
        type="file"
        id="file"
        ref={inputFile}
      />
      <div
        style={{
          width: "200xp",
          height: "200px",
          backgroundImage: `url("${imgUrl}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      />

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
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag, indx) => (
          <div
            onClick={() => Filter(tag)}
            style={{
              height: "20px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid black",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "10px",
        }}
      >
        {clickedTags.map((tag, indx) => (
          <div
            onClick={() => reFilter(tag)}
            style={{
              height: "20px",
              padding: "5px",
              borderRadius: "5px",
              border: "1px solid green",
              color: "green",
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      <button onClick={AddPost}>Add</button>
    </div>
  );
};