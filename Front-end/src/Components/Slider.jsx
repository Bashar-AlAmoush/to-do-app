import React from "react";
import "../DarkMode.css";
import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Radio,
  Input,
  list,
} from "@material-tailwind/react";
import { v4 as uuid } from "uuid";
import Addtask from "./Addtask";
import { useNavigate } from "react-router-dom";
export default function Example() {
  const [DataList, setDataList] = useState([]);
  const [aa, setaa] = useState();
  const [aaa, setaaa] = useState();
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState();
  const [search, setSearch] = useState("");
  const Navigate = useNavigate();
  //
  const handleOpen = () => {
    const addList = JSON.parse(localStorage.getItem("auth"));

    setOpen(!open);
    if (!addList) {
      Navigate("/signup");
    }
  };

  function handleCreateList(e) {
    e.preventDefault();
    let newList = {
      id: uuid(),
      listTitel: e.target.titel.value,
      tasks: [],
    };
    setDataList([...DataList, newList]);
  }
  useEffect(() => {
    axios
      .post("http://localhost:3000/post", {
        title: "Tasks",
        body: DataList,
      })
      .then((res) => {
        setaa(res.data);
        console.log(aa);
      });
  }, [DataList]);
 
useEffect(() => {
  axios
    .get("http://localhost:3000/get")
    .then((res) => {
      console.log(res.data.data);
      // setDataList(res.data.data)
    })
    .catch((error) => {
      console.error("Error fetching data from Firebase:", error);
    });
}, [DataList]);

  return (<>
    <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl">Welcome to Your To-Do App</h1>
        <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">Stay organized and manage your tasks efficiently.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <Button
        onClick={handleOpen}
   
  
        className="ml-20 mt-20 bg-slate-500"
      >
        Add new list
      </Button>
             
        </div>
    </div>
</section>

<Fragment>
      
      <Dialog open={open} handler={handleOpen}>
        <form onSubmit={handleCreateList}>
          <DialogHeader>Create new list.</DialogHeader>
          <DialogBody divider>
            <div className="w-72">
              <Input label="List Titel" name="titel" />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              className="bg-slate-300"
              type="submit"
              onClick={handleOpen}
            >
              <span>Create</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
      {/*  button add list */}
      <div className="flex flex-wrap gap-10">
        {DataList.map((list, index) => {
          return (
            <div className="ml-10 mt-4" key={index}>
              <div className="bg-gray-500 flex flex-col gap-4 rounded-lg max-w-sm text-white px-2 py-1">
                <div className="flex justify-center">
                  <span>{list.listTitel}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span>
                    <>
                      <button
                        className="w-full h-10  bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModal(true);
                          setIndex(index);
                        }}
                      >
                        <div className="flex flex-row">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 4.5v15m7.5-7.5h-15"
                            />
                          </svg>
                          <small>Add Task</small>
                        </div>
                      </button>
                    </>
                  </span>
                  <input
                    type="text"
                    placeholder="search task"
                    onChange={(e) => {
                      setSearch(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="ml-10max-w-xsm rounded-lg placeholder-white bg-gray-800 border-none"
                  />
                </div>
                <div>
                  {list.tasks.map((elem) => {
                    if (search === "") {
                      return (
                        <>
                          <div className="flex flex-col justify-center gap-3 ml-5">
                            <p className="text-blue-600	">
                              Task title:{" "}
                              <span className="text-white">
                                {" "}
                                {elem.taskTitle}{" "}
                              </span>
                            </p>
                            <p className="text-blue-600	">
                              {" "}
                              Task description:{" "}
                              <span className="text-white">
                                {elem.taskDescription}{" "}
                              </span>
                            </p>
                            <p className="text-blue-600	">
                              Due Date:{" "}
                              <span className="text-white">
                                {elem.taskDueDate}{" "}
                              </span>
                            </p>
                            <p className="text-blue-600	">
                              Priority:{" "}
                              <span className="text-white">
                                {elem.taskPriority}{" "}
                              </span>
                            </p>
                            <br />
                          </div>
                          <hr />
                          <br />
                        </>
                      );
                    } else if (elem.taskTitle.includes(search)) {
                      return (
                        <>
                          <div className="flex flex-col justify-center gap-3 ml-5">
                            <p>Task title: {elem.taskTitle}</p>
                            <p> Task description: {elem.taskDescription}</p>
                            <p>Due Date: {elem.taskDueDate}</p>
                            <p>Priority: {elem.taskPriority}</p>
                            <br />
                          </div>
                          <hr />
                          <br />
                        </>
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showModal && (
        <Addtask
          setData={setDataList}
          DataList={DataList}
          index={index}
          setShowModal={setShowModal}
        />
      )}
    </Fragment>

    </>
  );
}
