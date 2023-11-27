import { useState, useEffect } from "react";
const emptyValue = {
  mssv: "",
  name: "",
  sdt: "",
  email: "",
};
export default function StudentForm({ student, onAdd, onUpdate }) {
  const [value, setValue] = useState(emptyValue);
  useEffect(() => {
    if (!student) return;
    setValue(student);
  }, [student]);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.mssv) {
      const { mssv, ...student } = value;
      onUpdate(mssv, student);
    } else {
      onAdd(value);
    }
    setValue(emptyValue);
  };
  return (
    <form onSubmit={handleSubmit} className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group mb-2">
            <label htmlFor="mssv">MSSV</label>
            <input
              value={value.mssv}
              onChange={handleChange}
              type="mssv"
              className="form-control"
              name="mssv"
              placeholder="Mã số sinh viên"
            />
          </div>

          <div className="form-group mb-2">
            <label htmlFor="name">Họ tên</label>
            <input
              value={value.name}
              onChange={handleChange}
              type="name"
              className="form-control"
              name="name"
              placeholder="Họ tên"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group mb-2">
            <label htmlFor="sdt">Số điện thoại</label>
            <input
              value={value.sdt}
              onChange={handleChange}
              type="sdt"
              className="form-control"
              name="sdt"
              placeholder="Số điện thoại "
            />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="email">Email</label>
            <input
              value={value.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
      </div>

      <button className="btn btn-success my-3" type="submit">
        Thêm sinh viên
      </button>
    </form>
  );
}
