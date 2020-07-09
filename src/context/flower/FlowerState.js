import React, { useReducer } from 'react';
import axios from 'axios';
import FlowerContext from './flowerContext';
import flowerReducer from './flowerReducer';

import {
  GET_FLOWERS,
  ADD_FLOWER,
  CLEAR_CURRENT,
  DELETE_FLOWER,
} from '../types';

const FlowerState = (props) => {
  const initialState = {
    flowers: [],

    current: null,
  };

  const [state, dispatch] = useReducer(flowerReducer, initialState);

  //Get Flowers

  const getFlowers = async () => {
    try {
      const res = await axios.get(
        'https://flowerinblack-backend.herokuapp.com/api/flowers'
      );

      console.log(res.data);

      dispatch({
        type: GET_FLOWERS,
        payload: res.data,
      });
    } catch (err) {}
  };

  //Add Flower

  const addFlower = async (flower) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        'https://flowerinblack-backend.herokuapp.com/api/flowers',
        flower,
        config
      );
      dispatch({
        type: ADD_FLOWER,
        payload: res.data,
      });
    } catch (err) {
      console.err();
    }
  };

  //Clear Current

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Delete Flower

  const deleteFlower = async (id) => {
    try {
      await axios.delete(
        `https://flowerinblack-backend.herokuapp.com/api/flowers/${id}`
      );
      dispatch({
        type: DELETE_FLOWER,
        payload: id,
      });
    } catch (err) {
      console.err();
    }
  };

  return (
    <FlowerContext.Provider
      value={{
        flowers: state.flowers,
        getFlowers,
        current: state.current,
        addFlower,
        clearCurrent,
        deleteFlower,
      }}
    >
      {props.children}
    </FlowerContext.Provider>
  );
};

export default FlowerState;
