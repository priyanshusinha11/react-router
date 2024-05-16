import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('https://api.github.com/users/priyanshusinha11');
    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.error('Error fetching GitHub data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-red-300 text-white m-4 p-4">
                <img src={data.avatar_url} alt="Profile Picture" className="w-32 h-32 mx-auto mb-4" />
                <p><strong className="text-black">Name:</strong> <span className="text-white">{data.name}</span></p>
                <p><strong className="text-black">Username:</strong> <span className="text-white">{data.login}</span></p>
                <p><strong className="text-black">Location:</strong> <span className="text-white">{data.location}</span></p>
                <p><strong className="text-black">Followers:</strong> <span className="text-white">{data.followers}</span></p>
                <p><strong className="text-black">Public Repos:</strong> <span className="text-white">{data.public_repos}</span></p>
            </div>
            
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/priyanshusinha11')
    return response.json()
}
