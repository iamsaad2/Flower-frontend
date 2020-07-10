import React, { useEffect, useContext, Fragment } from 'react';
import Tree from 'react-tree-graph';

import FlowerContext from '../../context/flower/flowerContext';
import DeleteFlower from './DeleteFlower';

const Flower = () => {
  const flowerContext = useContext(FlowerContext);

  const { flowers, getFlowers, editDistance } = flowerContext;

  const url = new URL(window.location);

  let flowerDistance = [];

  flowers.map((f) => {
    if (editDistance(f.date, url.pathname) <= 10) flowerDistance.push(f);
  });

  useEffect(() => {
    getFlowers();
  }, []);

  try {
    return (
      <Fragment>
        <div className='flower-container'>
          {flowerDistance.map((flower) => (
            <Fragment>
              <div>
                <div className='tree'>
                  <Tree
                    data={{
                      name: flower.water,
                      children: [
                        {
                          name: flower.earth,
                          children: [
                            {
                              name: flower.air,
                              children: [
                                {
                                  name: flower.fire,
                                  children: [],
                                },
                                {
                                  name: flower.fire2,
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: flower.air2,
                              children: [
                                {
                                  name: flower.fire3,
                                  children: [],
                                },
                                {
                                  name: flower.fire4,
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },

                        {
                          name: flower.earth2,
                          children: [
                            {
                              name: flower.air3,
                              children: [
                                {
                                  name: flower.fire5,
                                  children: [],
                                },
                                {
                                  name: flower.fire6,
                                  children: [],
                                },
                              ],
                            },
                            {
                              name: flower.air4,
                              children: [
                                {
                                  name: flower.fire7,
                                  children: [],
                                },
                                {
                                  name: flower.fire8,
                                  children: [],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    }}
                    height={200}
                    width={400}
                  />
                </div>
                <p className='flower-name'>{flower.name}</p>
              </div>

              <DeleteFlower flower={flower} />
            </Fragment>
          ))}
        </div>
      </Fragment>
    );
  } catch (error) {
    console.error();
  }
};

export default Flower;
