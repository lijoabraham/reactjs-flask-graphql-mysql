import NavBar from './NavBar'
import AddEditUser from './AddEditUser'
import DeleteUser from './Delete'
import { TrashIcon, PencilSquareIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from "react";

function UsersList() {
    const [users, setUsers] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [selectedId, setSelectedId] = useState(0);

    useEffect(() => {
        ReadUsers()
    }, [])

    const SearchNames = () => {

    }

    const ReadUsers = () => {
        fetch("http://localhost:5000/all-users/10")
            .then(res => res.json())
            .then(
                (result) => {
                    setUsers(result)
                }
            )
    }
    const handleEdit = (id) => {
        setOpenEditModal(true);
        setSelectedId(id);
    };

    const handleDelete = (id) => {
        setOpenDeleteModal(true);
        setSelectedId(id);
    };

    let addEditForm;
    if(openEditModal){
        addEditForm = <AddEditUser key='2' open={openEditModal} onClose={() => setOpenEditModal(false)} editUserId={selectedId}/>
    }
    let DeleteModal;
    if(openDeleteModal){
        DeleteModal = <DeleteUser key='3' open={openDeleteModal} onClose={() => setOpenDeleteModal(false)} editUserId={selectedId}/>
    }
    return (

        <div className='user-list'>
            {addEditForm}
            {DeleteModal}
            <NavBar key='1'></NavBar>
            <div className="mb-2"></div>
            <section className="flex justify-center bg-hero-pattern">
                <div className="container w-full">
                    <div id="alert-error-box" className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" style={{ "display": "none" }} role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div id="alert-error" className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
                        </div>
                        <button type="button"
                            className="alert-button ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300"
                            data-dismiss-target="#alert-box-error" aria-label="Close">
                            <span className="sr-only">Dismiss</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="alert-success-box" className="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200"
                        style={{ "display": "none" }} role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div id="alert-success" className="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
                        </div>
                        <button type="button"
                            className="alert-button ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300"
                            data-dismiss-target="#alert-3" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div id="alert-info-box" className="flex p-4 mb-4 bg-yellow-100 rounded-lg dark:bg-yellow-200"
                        style={{ "display": "none" }} role="alert">
                        <svg aria-hidden="true" className="flex-shrink-0 w-5 h-5 text-yellow-700 dark:text-yellow-800"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Info</span>
                        <div id="alert-info" className="ml-3 text-sm font-medium text-yellow-700 dark:text-yellow-800">
                        </div>
                        <button type="button"
                            className="alert-button ml-auto -mx-1.5 -my-1.5 bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300"
                            data-dismiss-target="#alert-4" aria-label="Close">
                            <span className="sr-only">Close</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-screen min-h-screen bg-gray-100 flex py-2 justify-center font-sans overflow-hidden">
                            <div className="w-full lg:w-5/6">
                                <div className="rounded-lg grid grid-cols-2 divide-x">
                                    <div className="flex pr-2">
                                        <div className="relative md:w-5/6 mr-2">
                                            <input type="search" id="myInput" onKeyUp={() => SearchNames}
                                                className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                                                placeholder="Search..." />
                                            <div className="absolute top-0 left-0 inline-flex items-center p-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400"
                                                    viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                                    strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                                                    <circle cx="10" cy="10" r="7" />
                                                    <line x1="21" y1="21" x2="15" y2="15" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full md:w-auto space-x-4 flex grow justify-end item-center space-between-2">
                                        <button onClick={() => handleEdit(0)}
                                            className="rounded-lg inline-flex items-center bg-gradient-to-r from-purple-400 to-blue-500 hover:text-gray-200 focus:outline-none focus:shadow-outline text-white font-semibold py-2 px-2 md:px-4">
                                            <span className="hidden md:block">Add User</span>
                                        </button>
                                    </div>

                                </div>
                                <div className="bg-white shadow-md rounded my-6 overflow-x-auto h-96">
                                    <table id="schema-table" className="min-w-max w-full table-auto">
                                        <thead className='sticky top-0'>
                                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal z-10">
                                                <th className="py-3 px-6 text-center">Name</th>
                                                <th className="py-3 px-6 text-center">Address</th>
                                                <th className="py-3 px-6 text-center">Phone</th>
                                                <th className="py-3 px-6 text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="db-list-container" className="text-gray-600 text-sm font-light overflow-y-auto">
                                            {users && users.map((user) => (
                                                <tr
                                                    className="db-row py-li-element border-b border-gray-200 hover:bg-gray-100">

                                                    <td className="db-name py-3 px-6 text-center whitespace-nowrap">
                                                        <span className="font-medium text-gray-600">{user.name}</span>
                                                    </td>
                                                    <td className="db-name py-3 px-6 text-center whitespace-nowrap">
                                                        <span className="font-medium text-gray-600">{user.address}</span>
                                                    </td>
                                                    <td className="db-name py-3 px-6 text-center whitespace-nowrap">
                                                        <span className="font-medium text-gray-600">{user.phone}</span>
                                                    </td>
                                                    <td className="db-name py-3 px-6 mx-3 text-center whitespace-nowrap justify-center flex items-center space-x-2">
                                                        <PencilSquareIcon className="h-6 w-6 text-blue-500"  onClick={() => handleEdit(user.id)}/>
                                                        <TrashIcon className="h-6 w-6 text-blue-500" onClick={() => handleDelete(user.id)}/>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="hidden" id="db-template">
                <div className="db-list py-li-element">

                </div>
            </div>

        </div>
    );
}
export default UsersList;