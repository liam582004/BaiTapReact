import React from "react";

export default function StudentList({ students, onDelete, onEdit }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="text-white bg-dark">MSSV</th>
          <th className="text-white bg-dark">Họ tên</th>
          <th className="text-white bg-dark">Số điện thoại</th>
          <th className="text-white bg-dark">Email</th>
          <th className="text-white bg-dark"></th>
        </tr>
      </thead>
      <tbody>
        {students.reverse().map(({ mssv, name, sdt, email }) => (
          <tr key={mssv}>
            <td>{mssv}</td>
            <td>{name}</td>
            <td>{sdt}</td>
            <td>{email}</td>
            <td>
              <button
                className="btn btn-primary me-2"
                onClick={() => onEdit(mssv)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to delete this student?"
                    )
                  ) {
                    onDelete(mssv);
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
