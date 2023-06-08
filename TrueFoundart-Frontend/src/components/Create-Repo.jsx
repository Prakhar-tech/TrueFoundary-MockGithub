import axios from 'axios';
import React from 'react';
import '../style/Create-Repo.css';
import { PlusIcon } from '@primer/octicons-react';

export default function CreateRepository() {

    console.log("inside create repo")
    // Define states using React hooks for React components
    const [repoName, setRepoName] = React.useState(''); // for handling name of new repository
    const [message, setMessage] = React.useState(''); // for displaying success/failure message
    const [loading, setLoading] = React.useState(false); // for showing loading animation during HTTP request response.

    // Create a function that calls an HTTP POST request 
    const handleCreateRepository = async () => {
        // set loading state to true
        setLoading(true);
        try {
            // POST request to create new repository with provided name
            const response = await axios.post('https://truefoundary-task-production.up.railway.app/auth/repositories', { name: repoName });
            // If HTTP POST request is successful, set success message
            setMessage(`Repository created successfully. Repository URL: ${response.data.html_url}`);
        } catch (error) {
            // If HTTP POST request fails, set error message
            console.log(error);
            setMessage('Error creating repository.');
        }
        // set loading state to false
        setLoading(false);
    };

    return (
        <div className="create-repo-container">
            <div className='form-div'>
                <div className='repo-heading'>
                    <h1 className="create-repo-heading">Create Repository</h1>
                </div>
                <div className="create-repo-input-container">
                    <input className="create-repo-input" type="text" placeholder="Repository name" value={repoName} onChange={(e) => setRepoName(e.target.value)} />
                    <button className="create-repo-button" onClick={handleCreateRepository} disabled={loading}>
                        {loading ? 'Creating...' : <><PlusIcon size={16} /> Create</>}
                    </button>
                </div>
            </div>
            {message && <p className="create-repo-message">{message}</p>}
        </div>
    );
}
