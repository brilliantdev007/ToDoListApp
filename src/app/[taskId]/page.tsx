'use client'

import { useParams } from 'next/navigation'

import EditTask from '@/components/EditTask';

export default function UpdateTask() {
    const params = useParams();
    const taskId = params.taskId

    return (
        <EditTask taskId={taskId as string} />
    );
}