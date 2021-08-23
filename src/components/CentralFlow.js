import React from 'react';
import ReactFlow from 'react-flow-renderer';

const elements = [
    { id: '1', data: { label: 'Node 1' }, position: { x: 250, y: 5 } },
    { id: '2', data: { label: <div>Node 2</div> }, position: { x: 100, y: 100 } } ,
    { id: '3', data: { label: <div>Node 3</div> }, position: { x: 50, y: 50 } },
    { id: '4', data: { label: <div>Node 4</div> }, position: { x: 200, y: 40 } },
    { id: '5', data: { label: <div>Node 5</div> }, position: { x: 250, y: 80 } },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '3', target: '4', animated: true },
    { id: 'e1-4', source: '2', target: '3', animated: true },
    { id: 'e1-5', source: '1', target: '4', animated: true },
    { id: 'e1-5', source: '3', target: '5', animated: true },
  ];

const CentralFlow = () => {
    return (
      <>
        <div>
          <h1>Basic Flow</h1>
          <p>Shows connection between different elements.</p>
        </div>
        
        <div style={{width:'100%', height:'100vh'}}>
            <ReactFlow elements={elements} />
        </div>
      </>
    )
}

export default CentralFlow;