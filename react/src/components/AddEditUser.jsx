import React, { useEffect, useState } from "react";

const AddEditUser = ({ open, onClose, editUserId }) => {
    const [editUser, setEditUser] = useState([]);
    useEffect(() => {
        if (editUserId === 0) {
            setEditUser([])
        } else if (editUserId !== 0) {
            getUser(editUserId)
        }
    }, [editUserId])


    const getUser = (id) => {
        fetch("http://localhost:5000/get-user/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setEditUser(result[0])
                    setName(result[0]['name'])
                    setAddress(result[0]['address'])
                    setPhone(result[0]['phone'])
                }
            )
    }

    const handleSubmit = event => {
        event.preventDefault();
        let API = ''
        let data = {}
        if (editUserId === 0) {
            API = 'http://localhost:5000/add-user'
            data = {
                'name': name,
                'address': address,
                'phone': phone
            }
        } else {
            API = 'http://localhost:5000/update-user'
            data = {
                'id': editUserId,
                'name': name,
                'address': address,
                'phone': phone
            }

        }
        console.log(data)
        fetch(API, {
            method: 'PUT',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    if (result['result']['ok']) {
                        window.location.href = '/home';
                    }
                }
            )
    }
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    if (!open) return null
    return (
        <div className="add-user">
            <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center" id="modal-id">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                                Add User
                            </h3>
                            <button className="p-1 ml-auto bg-transparent rounded border-0 text-gray-900 opacity-50 float-right text-4xl leading-none font-semibold outline-none focus:outline-none" onClick={onClose}>
                                <span className="bg-transparent text-gray-900 h-6 w-6 text-3xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        <div className="relative p-6 flex-auto">
                            <form onSubmit={handleSubmit} className="w-full">
                                <input
                                    type="hidden"
                                    id="id"
                                    value={editUser?.id}
                                />
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="username" className="text-gray-500 mb-2"
                                    >Name</label
                                    >
                                    <input required
                                        type="text"
                                        id="name"
                                        defaultValue={editUser?.name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Please enter your name"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                                    />
                                </div>
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="username" className="text-gray-500 mb-2"
                                    >Address</label
                                    >
                                    <input required
                                        type="text"
                                        id="address"
                                        defaultValue={editUser?.address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Please enter your address"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                                    />
                                </div>
                                <div id="input" className="flex flex-col w-full my-5">
                                    <label htmlFor="password" className="text-gray-500 mb-2"
                                    >Phone</label
                                    >
                                    <input required
                                        type="phone"
                                        id="password"
                                        defaultValue={editUser?.phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="Please enter your phone"
                                        className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                                    />
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button onClick={onClose} className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                                        Cancel
                                    </button>
                                    <button type="submit" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" >
                                        {editUserId ===0 ? 'Add User' : 'Edit User'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={onClose} className="opacity-25 fixed inset-0 z-40 bg-black" id="modal-id-backdrop"></div>
        </div>
    );
}
export default AddEditUser