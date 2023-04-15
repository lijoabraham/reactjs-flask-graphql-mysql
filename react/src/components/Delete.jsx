import React, { useEffect, useState } from "react";

const DeleteUser = ({ open, onClose, editUserId }) => {

    const deleteUser = id => {
        var data = {
            'id': id
        }
        fetch('http://localhost:5000/delete-user', {
            method: 'DELETE',
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

    if (!open) return null
    return (
        <div className="delete-user">

            <div onClick={onClose} className="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60"></div>

            <div id="dialog"
                className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
                <h1 className="text-2xl font-semibold">Delete User</h1>
                <div className="py-5 border-t border-b border-gray-300">
                    <p id="del-db-name">Are you sure you wanna delete?</p>
                </div>
                <div className="flex space-x-4 justify-end">
                    <button onClick={onClose} className="px-5 py-2 cursor-pointer rounded-md bg-slate-200 hover:bg-slate-300 text-gray-600">
                        Cancel</button>
                    <button onClick={() => deleteUser(editUserId)}className="px-5 py-2 bg-red-400 hover:bg-red-500 text-white cursor-pointer rounded-md">
                        Delete</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteUser