
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
import {useState, useEffect, useCallback} from "react";

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
            const response = await fetch('https://sw-api.starnavi.io/people/');

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json()

            const allCharacters = []
            // console.log(responseData.results)
            for (const people of responseData.results) {

                // console.log(people)
                allCharacters.push({
                    name: people.name,
                    // name: responseData[key].name,
                    // description: responseData[key].description,
                    // price: responseData[key].price,
                })
            }
            // console.log(allCharacters)
            setCharacters(allCharacters)
            // return allCharacters
        }

        // const fetchData = async () => {
        //     try {
        //         const response = await fetch('http https://sw-api.starnavi.io/people/fgafdza');
        //
        //         if (!response.ok) {
        //             throw new Error('Network response was not ok');
        //         }
        //
        //         const data = await response.json();
        //         console.log('Fetched data:', data); // Log the fetched data here
        //     } catch (error) {
        //         console.error('Fetch error:', error);
        //     }
        // };
        //
        // fetchData();

        fetchCharacters().catch(error => {
            console.error('Fetch error:', error);
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
            <Background color={'white'} bgColor={'black'}/>
            <MiniMap/>
            <Controls/>
        </ReactFlow>
    );
}
