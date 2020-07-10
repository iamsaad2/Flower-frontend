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
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };

    try {
      const res = await axios.get(
        'https://flowerinblack-backend.herokuapp.com/api/flowers',
        config
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
    try {
      const res = await axios.post(
        'https://flowerinblack-backend.herokuapp.com/api/flowers',
        flower
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

  // Filter Flowers

  const editDistance = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
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
        editDistance,
      }}
    >
      {props.children}
    </FlowerContext.Provider>
  );
};

export default FlowerState;
