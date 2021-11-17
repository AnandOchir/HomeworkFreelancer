import React from 'react'
import { Box, colors } from '../common-components'
import { GradeCard } from './grade-card'

const grades = ['6-р анги', '7-р анги', '8-р анги', '9-р анги', '10-р анги', '11-р анги', '12-р анги', '1-р курс', '2-р курс', '3-р курс', '4-р курс']

export const GradeCategory = () => {
  return (
    <Box width='95vw' height='50px' borderColor={colors.borderColor} br='5px' mt='5vh' display='flex' direction='row' justify='space-evenly' items='center'>
        {grades.map((grade, i) => <GradeCard grade={grade} key={i}/>)}
    </Box>
  );
}