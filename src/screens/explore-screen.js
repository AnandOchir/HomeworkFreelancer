import React, { useState } from 'react'
import { Box } from '../common-components';
import { HomeWorkCard } from '../components';

const MockHomeworks = [
    { imgUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', name: 'Testing', price: '5000', uid: 'giutrgnfibngbtrfn', description: 'Mongol helnii surah bicgiin buh daalgavr', title: 'Mongol hel 9-r angi', tags: ['9р анги', 'Монгол хэл'] },
    { imgUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', name: 'Testing', price: '5000', uid: 'giutrgnfibngbtrfn', description: 'Math ez bolhoor ci nadad hergu', title: 'Mat 7-r angi', tags: ['Математик', '7р анги'] },
    { imgUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', name: 'Testing', price: '5000', uid: 'giutrgnfibngbtrfn', description: 'Angli heleer 200 ugtei essay biceh daalgavr heregtei bn', title: 'English 8-r angi', tags: ['Математик', '7р анги'] },
    { imgUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', name: 'Testing', price: '5000', uid: 'giutrgnfibngbtrfn', description: 'Mongol helnii surah bicgiin buh daalgavr', title: 'Mongol hel 9-r angi', tags: ['9р анги', 'Монгол хэл'] },
    { imgUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', name: 'Testing', price: '5000', uid: 'giutrgnfibngbtrfn', description: 'Math ez bolhoor ci nadad hergu', title: 'Mat 7-r angi', tags: ['Математик', '7р анги'] },
    { imgUrl: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80', name: 'Testing', price: '5000', uid: 'giutrgnfibngbtrfn', description: 'Angli heleer 200 ugtei essay biceh daalgavr heregtei bn', title: 'English 8-r angi', tags: ['Математик', '7р анги'] },
]

export const ExploreScreen = () => {
  const [homeworks, setHomeworks] = useState(MockHomeworks);

  return (
    <Box width='100vw' display='flex' justify='space-evenly' direction='column' items='center' background='white'>
        <Box display='flex' direction='row' wrap='wrap'>
            {homeworks.map((hw, i) => <HomeWorkCard {...hw} key={i}/>)}
        </Box>
    </Box>
  );
}