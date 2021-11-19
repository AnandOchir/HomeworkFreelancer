import React, { useContext, useRef, useState } from "react";
import { useCol } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";

const TAGS = [
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
  "Математик2"
]

export const AddPostScreen = () => {
  const { createRecord } = useCol("posts/");
  const { user } = useContext(AuthContext);
  const inputFile = useRef(null);

  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");


  const [selectedTags, setSelectedTags] = useState([])

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
      tags: selectedTags
    console.log("success");
  };

  return (
    <div>
      <h1>Add Post</h1>
      <input onChange={() => onFileChange(0)} type='file' id='file' ref={inputFile} />
      <div style={{ width: '200xp', height: '200px', backgroundImage: `url("${imgUrl}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }} />

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
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} >
        {
          TAGS.map((tag, indx) => <div onClick={() => {
            setSelectedTags([tag, ...selectedTags])
            TAGS.splice(indx, 1)
          }} style={{ height: '20px', padding: '5px', borderRadius: '5px', border: '1px solid black' , }} >{tag}</div>)
        }

      </div>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginTop: '10px' }} >
        {
          selectedTags.map((e, indx) => <div onClick={() => {
            // TAGS.push(e);
            // console.log("selce: ", selectedTags)
            // console.log("indx: ", indx)
            // let a = selectedTags.split(e).join('')
            // console.log('a: ', a)
            // setSelectedTags(a)
          }} style={{ height: '20px', padding: '5px', borderRadius: '5px', border: '1px solid green' ,color: 'green' }} >{e}</div>)
        }
      </div>

      <button onClick={AddPost}>Add</button>
    </div>
  );
};
