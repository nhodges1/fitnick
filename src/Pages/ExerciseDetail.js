import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData } from '../Utils/FetchData';
import Detail from '../Components/Details';
import ExerciseVideo from '../Components/ExerciseVideo';
import SimilarExercises from '../Components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] =
  useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com/channel/about'

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/${id}`,
      exerciseOptions);
      setExerciseDetail(exerciseDetailData);
    }

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail;