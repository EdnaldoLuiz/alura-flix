import { useState } from 'react';

export const useVideo = () => {
    const [videos, setVideos] = useState([]);
    
    const postVideo = async (video) => {
        video.id = crypto.randomUUID().toString();
        const response = await fetch(`http://localhost:3002/videos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(video)
        });
        const data = await response.json();
        return data;
    };

    const deleteVideo = async (id) => {
        try {
            const response = await fetch(`http://localhost:3002/videos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (response.ok) {
                setVideos(currentVideos => currentVideos.filter(video => video.id !== id));
            } else {
                throw new Error('Erro ao excluir o vídeo');
            }
        } catch (error) {
            console.error('Failed to delete video:', error);
        }
    };    

    const updateVideo = async (video) => {
        const response = await fetch(`http://localhost:3002/videos/${video.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(video)
        });
        if (response.ok) {
            const updatedVideo = await response.json();
            setVideos(currentVideos => {
                return currentVideos.map(v => v.id === video.id ? updatedVideo : v);
            });
            return updatedVideo;
        } else {
            throw new Error('Erro ao atualizar o vídeo');
        }
    };       

    return { videos, setVideos, postVideo, deleteVideo, updateVideo };
};
