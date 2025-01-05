import React from 'react'

function Table({users}: UserProps) {
  return (
    <table className="table text-center border-2 border-purple-300 rounded-lg">
        <thead>
            <tr className='border-purple-300 border-b'>
                <th className="p-3">id</th>
                <th className="p-3">Name</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Email</th>
                <th className="p-3">Signup Date</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
            <tr  className='border-purple-300 border-b' key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.fullMobileNo}</td>
                <td>{user.email}</td>
                <td>{user.signupDate}</td>
        </tr>
            ))}

        </tbody>
    </table>
  )
}

export default Table
