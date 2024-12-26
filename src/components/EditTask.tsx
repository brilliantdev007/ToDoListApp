"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import '@/styles/index.css'

import { TASK_COLORS } from '@/utils/constants';
import { ITask, ITaskUpdateRequest } from '@/utils/types';
import * as API from '@/utils/api'

interface IProps {
    taskId?: string
}

export default function EditTask({ taskId }: IProps) {
    const router = useRouter();

    const [title, setTitle] = useState<string>("");
    const [color, setColor] = useState<string>(TASK_COLORS[0]);

    const handleBack = () => {
        router.back();
    }

    const handleChangeTitle = (newTitle: string) => {
        setTitle(newTitle);
    }

    const handleChangeColor = (newColor: string) => {
        setColor(newColor);
    }

    const initValue = () => {
        setTitle("");
        setColor(TASK_COLORS[0]);
    }

    const handleUpdateTask = () => {
        if (taskId) {
            const newTask: ITaskUpdateRequest = {
                title: title,
                color: color
            }
            API.updateTask(taskId, newTask)
                .then(res => res.json())
                .then((data: ITask) => {
                    router.back();
                })
                .catch(err => {
                    initValue();
                    console.error("Failed to update a task data. ", err);
                })
        }

    }

    const handleCreateTask = () => {
        const newTask: ITaskUpdateRequest = {
            title: title,
            color: color
        }
        API.createTask(newTask)
            .then(res => res.json())
            .then((data: ITask) => {
                router.back();
            })
            .catch(err => {
                initValue();
                console.error("Failed to create a task data. ", err);
            })
    }

    useEffect(() => {
        if (taskId) {
            API.getTaskById(taskId)
                .then(res => res.json())
                .then((data: ITask) => {
                    setTitle(data.title);
                    setColor(data.color || "");
                })
                .catch(err => {
                    initValue();
                    console.error("Failed to read a task data. ", err);
                })
        } else {
            initValue();
        }
    }, [taskId]);

    return (
        <div className="flex flex-col w-full mt-[91px] gap-12">
            <button className="outline-none transition-all duration-300 hover:opacity-80" onClick={handleBack}>
                <Image alt="Back" src={"arrow-left.svg"} width={24} height={24} />
            </button>
            <div className='flex flex-col gap-3'>
                <span className='text-sm font-bold text-primary-dark'>Title</span>
                <input 
                    placeholder='Ex. Brush you teeth' 
                    className='bg-gray-500 p-4 rounded-lg border border-gray-400 text-sm leading-4 text-gray-100 placeholder:text-sm placeholder:text-gray-100 placeholder:opacity-40 hover:border-primary focus-visible:outline-none focus-visible:border-primary focus:border-primary' 
                    value={title}
                    onChange={e => handleChangeTitle(e.target.value)}
                />
            </div>
            <div className='flex flex-col gap-3'>
                <span className='text-sm font-bold text-primary-dark'>Color</span>
                <div className='flex align-items gap-4'>
                    {TASK_COLORS.map((_color, idx) => {
                        return (
                            <div key={`task-color-${idx}`} onClick={() => handleChangeColor(_color)} className={`cursor-pointer rounded-full w-[52px] h-[52px] ${color === _color ? "border-2" : "border-transparent"}`} style={{ backgroundColor: _color }}></div>
                        )
                    })}
                </div>
            </div>
            {!!taskId ? (
                <button onClick={handleUpdateTask} className="flex gap-2 w-full items-center justify-center rounded-lg bg-primary p-4 outline-none transition-all duration-300 hover:border-primary hover:opacity-80" >
                    <span className='text-normal text-gray-100 font-bold leading-5'>Save</span>
                    <Image alt="Create Task" src={"check-bold.svg"} width={16} height={16} />
                </button>
            ) : (
                <button onClick={handleCreateTask} className="flex gap-2 w-full items-center justify-center rounded-lg bg-primary p-4 outline-none transition-all duration-300 hover:border-primary hover:opacity-80" >
                    <span className='text-normal text-gray-100 font-bold leading-5'>Add Task</span>
                    <Image alt="Create Task" src={"circle-plus.svg"} width={16} height={16} />
                </button>
            )}
        </div>
    );
}