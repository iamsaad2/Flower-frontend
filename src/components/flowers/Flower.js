import React, { useEffect, useContext, Fragment } from 'react';
import Tree from 'react-tree-graph';

import FlowerContext from '../../context/flower/flowerContext';
import DeleteFlower from './DeleteFlower';

const Flower = () => {
  const flowerContext = useContext(FlowerContext);

  const { flowers, getFlowers } = flowerContext;

  const url = new URL(window.location);

  function editDistance(s1, s2) {
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
  }

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
