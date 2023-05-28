import React, { useState } from "react";

function Addtask({ DataList, setData, index, setShowModal }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleDueDateChange = (e) => {
        setDueDate(e.target.value);
    };
    const handleSubmit = (index, e) => {
        // console.log(index);
        e.preventDefault();
        let task = {
            taskTitle: title,
            taskDescription: description,
            taskDueDate: dueDate,
            taskPriority: priority
        }
        setData((prevDataList) => {
            const updatedDataList = [...prevDataList];
            updatedDataList[index].tasks.push(task);
            return updatedDataList;
        });
        // console.log(DataList);
    };
    return <>

        <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
        >
            <div className="relative w-96 my-6 mx-auto max-w-3xl ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-black">
                        <h3 className="text-3xl font-semibold">
                            Add Task
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                        >
                            <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    {/*body*/}
                    <div className="max-w-md mx-auto">
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => handleSubmit(index, e)}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task-title">
                                    Task Title
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="task-title" type="text" placeholder="Enter task title" value={title} onChange={handleTitleChange} />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task-description">
                                    Task Description
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="task-description" placeholder="Enter task description" value={description} onChange={handleDescriptionChange}></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="task-due-date">
                                    Due Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="task-due-date" type="datetime-local" placeholder="Enter due date" value={dueDate} onChange={handleDueDateChange} />
                            </div>
                            <div className="mb-4 text-black">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="priority" value="low" checked={priority === 'low'} onChange={handlePriorityChange} />
                                        <span className="ml-2">Low</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="priority" value="medium" checked={priority === 'medium'} onChange={handlePriorityChange} />
                                        <span className="ml-2">Medium</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="priority" value="high" checked={priority === 'high'} onChange={handlePriorityChange} />
                                        <span className="ml-2">High</span>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Create Task
                                </button>
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>

}

export default Addtask;