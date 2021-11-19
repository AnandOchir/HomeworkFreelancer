import React, { useContext, useRef, useState } from "react";
import { useCol, useFirebase } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";

export const AddPostScreen = () => {
  const [tags, setTags] = useState([
    "6р анги",
    "7р анги",
    "8р анги",
    "9р анги",
    "10р анги",
    "11р анги",
    "12р анги",
    "1р курс",
    "2р курс",
    "3р курс",
    "4р курс",
    "Монгол хэл",
    "Англи хэл",
    "Физик",
    "Газар зүй",
    "Хими",
    "Математик",
    "Монголын түүх",
    "Орос хэл",
    "Үндэсний бичиг",
    "түүх",
    "Уран зохиол",
    "Мэдээллийн технологи",
    "Нийгэм судлал",
    "Дизайн технологи",
    "Эрүүл мэнд",
    "Биологи",
    "Иргэний ёс зүйн боловсрол",
    "Иргэний боловсрол",
    "Математик1",
    "Математик2",
  ]);

  const { createRecord } = useCol("posts/");
  const { storage } = useFirebase();
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const { createRecord: createUserPosts } = useCol("users/" + uid + "/myposts");
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
        createUserPosts(id, {
          postId: id,
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