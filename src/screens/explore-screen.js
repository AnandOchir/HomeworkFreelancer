import React, { useState, useEffect } from "react";
import { Box } from "../common-components";
import { HomeWorkCard, Loading } from "../components";
import { TAGS } from "../datas";
import { TagCard } from "../components/tag-card";
import { useCol } from "../Hooks";

export const ExploreScreen = () => {
  const { data } = useCol("posts");
  const [homeworks, setHomeworks] = useState(null);

  useEffect(() => {
    setHomeworks(data);
  }, [data]);

  const [clickedTags, setClickedTags] = useState([]);
  const [tags, setTags] = useState(TAGS);

  const Filter = (tag) => {
    setClickedTags([...clickedTags, tag]);

    setHomeworks(
      data.filter((hw) => {
        let test = true;

        [...clickedTags, tag].map((ctag) => {
          if (hw.tags.includes(ctag) === false) test = false;
        });

        return test;
      })
    );

    setTags(tags.filter((tg) => tg != tag));
  };

  const reFilter = (tag) => {
    setTags([...tags, tag]);
    setClickedTags(clickedTags.filter((tg) => tg != tag));

    setHomeworks(
      data.filter((hw) => {
        let test = true;

        clickedTags
          .filter((tg) => tg != tag)
          .map((ctag) => {
            if (hw.tags.includes(ctag) === false) test = false;
          });

        return test;
      })
    );
  };

  return (
    <Box>
      {data.length > 0 ? (
        <Box
          width="100vw"
          display="flex"
          justify="space-evenly"
          direction="column"
          items="center"
          background="white"
        >
          <Box>
            <Box
              width="95vw"
              br="5px"
              mt="5vh"
              display="flex"
              direction="row"
              items="center"
              wrap="wrap"
            >
              {tags.map((tag, i) => (
                <TagCard tag={tag} key={i} onClick={() => Filter(tag)} />
              ))}
            </Box>
            <Box mt="5vh">
              {clickedTags.map((tag, i) => (
                <TagCard tag={tag} key={i} onClick={() => reFilter(tag)} />
              ))}
            </Box>
          </Box>
          <Box display="flex" direction="row" wrap="wrap" width='100%' ml='30px'>
            {homeworks.map((hw, i) => (
              <HomeWorkCard {...hw} key={i}/>
            ))}
          </Box>
        </Box>
      ) : (
        <Loading />
      )}
    </Box>
  );
};
