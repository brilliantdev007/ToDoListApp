import { API_URL } from "./constants"
import { ITaskCreateRequest, ITaskUpdateRequest } from "./types";

export const getTasks = () => fetch(`${API_URL}/tasks`);
export const getTaskById = (id: string) => fetch(`${API_URL}/tasks/${id}`);
export const updateTask = (id: string, task: ITaskUpdateRequest) => 
        fetch(
            `${API_URL}/tasks/${id}`, 
            { 
                method: "PUT", 
                headers: {
                    'Content-Type': 'application/json',
                }, 
                body: JSON.stringify(task) 
            });
export const updateTaskStatus = (id: string, completed: boolean) => 
    fetch(
        `${API_URL}/tasks/${id}/status`, 
        { 
            method: "PUT", 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify({ completed }) 
        });

export const createTask = (task: ITaskCreateRequest) => 
    fetch(
        `${API_URL}/tasks`, 
        { 
            method: "POST", 
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(task) 
        });
export const deleteTaskById = (id: string) => 
    fetch(
        `${API_URL}/tasks/${id}`, 
        { 
            method: "DELETE", 
            headers: {
                'Content-Type': 'application/json',
            },
        });;