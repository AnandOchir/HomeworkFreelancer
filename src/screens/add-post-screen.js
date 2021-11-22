import React, { useContext, useRef, useState } from "react";
import { useCol, useFirebase, useDoc } from "../Hooks/firebase";
import { AuthContext } from "../Providers/auth-provider";
import { TAGS, DefaultImgUrl } from "../datas";
import { Loading, TagCard } from "../components";
import { Box, Image, Text, colors, Input } from "../common-components";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export const AddPostScreen = () => {
  const [tags, setTags] = useState(TAGS);

  const { createRecord, loading } = useCol("posts/");
  const { storage } = useFirebase();
  const { user } = useContext(AuthContext);
  const uid = user && user.uid;
  const { data: userData, updateRecord: createUserPosts } = useDoc(
    "users/" + uid
  );
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
    arr.push(id);
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
          posts: arr,
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

  if (loading) {
    return <Loading />;
  }

  return (
    <Box m="30px" mt='90px' display="flex" direction="row" justify="space-between">
      <Box display='flex' items='center' direction='column'>
        <Box>
          <Input
            onChange={() => onFileChange(0)}
            type="file"
            id="file"
            ref={inputFile}
            display='none'
          />
          <Box onClick={() => inputFile.current.click()} width="500px" height="300px" mt="10px" pointer>
            <Image src={imgUrl ? imgUrl : DefaultImgUrl} />
          </Box>
          <Box mt="10px">
            <Text>Гэрийн даалгаврын нэр: </Text>
            <Box mt="10px" >
              <Input
                placeholder={"Title"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                height="30px"
                width="700px"
                color={colors.textColor}
              />
            </Box>
          </Box>
          <Box mt="20px">
            <Text color={colors.textColor}>Дэлгэрэнгүй тайлбарлана уу?: </Text>
            {/* <Box mt="10px">
              <Input
                placeholder={"description"}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                height="30px"
                width="700px"
                color={colors.textColor}
              />
            </Box> */}
            <Editor
              // editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              // onEditorStateChange={this.onEditorStateChange}
            />
          </Box>
          <Box mt="20px">
            <Text color={colors.textColor}>Үнэ: </Text>
            <Box mt="10px" display="flex" direction="row">
              <Input
                placeholder={"5000"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                width="40px"
              />
              <Text color={colors.textColor}>(tugruk)</Text>
            </Box>
          </Box>
        </Box>
        <Box
          width="250px"
          height="40px"
          borderColor={colors.borderColor}
          br="5px"
          display="flex"
          justify="center"
          items="center"
          onClick={AddPost}
          pointer
          mt='50px'
        >
          Даалгаврыг нийтлэх
        </Box>
      </Box>
      <Box display="flex" direction="row" justify="space-between" width="400px">
        <Box>
          <Box width="100px" display="flex" wrap="wrap" height="100px">
            {clickedTags.map((tag, index) => (
              <TagCard
                tag={tag}
                key={index}
                onClick={() => reFilter(tag)}
                clicked
              />
            ))}
          </Box>
        </Box>
        <Box>
          <Box width="250px" display="flex" wrap="wrap">
            {tags.map((tag, index) => (
              <TagCard tag={tag} key={index} onClick={() => Filter(tag)} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
