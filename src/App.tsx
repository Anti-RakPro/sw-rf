import {useCallback} from 'react';
import {
    ReactFlow,
    Background,
    Controls,
    MiniMap,
    addEdge,
    useNodesState,
    useEdgesState,
    type OnConnect,
} from '@xyflow/react';
import {useState, useEffect} from "react";

import '@xyflow/react/dist/style.css';

import {initialNodes, nodeTypes} from './nodes';
import {initialEdges, edgeTypes} from './edges';
import {AppNode} from "./nodes/types.ts";

// const box: AppNode[] = [{ id: 'ggg', type: 'input', position: { x: -120, y: -120 }, data: { label: 'wire' } }]

export default function App() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    // const [box, , onNodesBox] = useNodesState([
    //     { id: 'a', type: 'input', position: { x: -120, y: -120 }, data: { label: 'wire' } }]);
    const onConnect: OnConnect = useCallback(
        (connection) => setEdges((edges) => addEdge(connection, edges)),
        [setEdges]
    );

    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchCharacters = async () => {
            const response = await fetch('http https://sw-api.starnavi.io/people');

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const responseData = await response.json()
            console.log('1', responseData)


            const allCharacters = []

            for (const key in responseData) {
                console.log('1', key)
                allCharacters.push({
                    id: key,
                    // name: responseData[key].name,
                    // description: responseData[key].description,
                    // price: responseData[key].price,
                })
            }
            setCharacters(allCharacters)
        }

        console.log('1')
        fetchCharacters().catch(error => {
            setIsLoading(false)
            setHttpError(error.massage)
        })
    }, []);

    return (
        <ReactFlow
            nodes={nodes}
            nodeTypes={nodeTypes}
            onNodesChange={onNodesChange}
            edges={edges}
            edgeTypes={edgeTypes}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
        >
            <Background/>
            <MiniMap/>
            <Controls/>
        </ReactFlow>
    );
}
