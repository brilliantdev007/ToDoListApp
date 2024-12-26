export interface ITask {
    id: string;
    title: string;
    completed: boolean;
    color?: string;
}

export interface ITaskUpdateRequest {
    title: string;
    color: string;
}

export interface ITaskCreateRequest {
    title: string;
    color: string;
}