import React, { useState, useEffect } from 'react'
import { Box } from '../common-components'
import { TagCard } from './tag-card'

const TAGS = ['6р анги', '7р анги', '8р анги', '9р анги', '10р анги', '11р анги', '12р анги', 
              '1р курс', '2р курс', '3р курс', '4р курс', 'Монгол хэл', 'Англи хэл', 
              'Физик', 'Газар зүй', 'Хими', 'Математик', 'Монголын түүх', 'Орос хэл',
              'Үндэсний бичиг', 'түүх', 'Уран зохиол', 'Мэдээллийн технологи', 'Нийгэм судлал',
              'Дизайн технологи', 'Эрүүл мэнд', 'Биологи', 'Иргэний ёс зүйн боловсрол', 
              'Иргэний боловсрол',　'Математик1', 'Математик2'
            ]

export const GradeCategory = ({ array, setArray }) => {
  const [clickedTags, setClickedTags] = useState([]);
  let [newArray, setNewArray] = useState([]);

  const Filter = async (tag) => {
    setClickedTags([...clickedTags, tag])

    await array.map((homework, i) => {
      homework.tags.includes(tag) && setNewArray(newArray => [...newArray, homework])
    })

    console.log(newArray)
    // setArray(newArray)
  }

  return (
    <Box>
      <Box width='95vw' br='5px' mt='5vh' display='flex' direction='row' items='center' wrap='wrap'>
        {TAGS.map((tag, i) => <TagCard tag={tag} key={i} onClick={() => Filter(tag)}/>)}
      </Box>
      <Box mt='5vh'>
          {clickedTags.map((tag, i) => <TagCard tag={tag} key={i}/>)}
      </Box>
    </Box>
  );
}