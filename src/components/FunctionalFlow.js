// This flow shows the ideation of a startup. The different step or phases and the next thing to be done until the EXIT. 
// In this flow, one can addEdges to the Nodes and also removeElements.

import React, { useState } from 'react';
import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const initialElements = [
    { id: '1', data: { label: 'TEAM' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: 'IDEAS/PLANNING' }, position: { x: 100, y: 100 } } ,
    { id: '3', data: { label: 'FUNDING' }, position: { x: 50, y: 50 } },
    { id: '4', data: { label: 'BUILD START-UP' }, position: { x: 200, y: 40 } },
    { id: '5', data: { label: 'WORKS?' }, position: { x: 250, y: 80 } },
    { id: '6', data: { label: 'YES' }, position: { x: 1000, y: 100 } },
    { id: '7', data: { label: 'NO' }, position: { x: 1000, y: 300 } },
    { id: '8', data: { label: 'DEDICATED TEAM' }, position: { x: 1000, y: 180 } },
    { id: '9', data: { label: 'FOLLOW ON FUNDING' }, position: { x: 1000, y: 200 } },
    { id: '10', data: { label: 'SPIN OFF' }, position: { x: 1000, y: 250 } },
    { id: '11', data: { label: 'GROW' }, position: { x: 1000, y: 400 } },
    { id: '12', data: { label: 'EXIT' }, position: { x: 800, y: 300 } },
    { id: '13', data: { label: 'TRASH' }, position: { x: 750, y: 300 } },
    { id: '14', data: { label: 'REASSIGN TEAM' }, position: { x: 500, y: 300 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e1-4', source: '2', target: '4', animated: true },
    { id: 'e1-5', source: '3', target: '4', animated: true },
    { id: 'e1-5', source: '4', target: '5', animated: true },
    { id: 'e1-5', source: '5', target: '6', animated: true },
    { id: 'e1-5', source: '5', target: '7', animated: true },
  ];

const FunctionalFlow = () => {
    const [elements, setElements] = useState(initialElements);

    const onElementsRemove = (elementsToRemove) => {
        setElements((els) => removeElements(elementsToRemove, els));
    }

    const onConnect = (params) => {
        setElements((els) => addEdge(params, els));
    } 

  return (
    <>
      <div>
        <h1>Functional Flow</h1>
        <p>Can connect from the source point to the destination point and can also remove elements.</p>
      </div>

      <div style={{ width:'100%', height:'100vh' }}>
        <ReactFlow
          elements={elements}
          onElementsRemove={onElementsRemove}
          onConnect={onConnect}
          deleteKeyCode={46} /* 'delete'-key */
        />
      </div>
    </>
  );

}

export default FunctionalFlow;