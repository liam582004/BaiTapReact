import { useState, useEffect } from "react";
const emptyValue = {
  mssv: "",
  name: "",
  sdt: "",
  email: "",
};
export default function StudentForm({ student, onAdd, onUpdate }) {
  const [value, setValue] = useState(emptyValue);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (!student) return;
    setValue(student);
  }, [student]);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const regexHasnumber = /\d/;
    if (!value.mssv.trim() || !regexHasnumber.test(value.mssv)) {
      newErrors.mssv = "Mã số sinh viên không được để trống và phải chứa số";
      isValid = false;
    }
    if (!value.name.trim()) {
      newErrors.name = "Họ tên không được để trống";
      isValid = false;
    }

    const sdtRegex = /^\d{10,11}$/;
    if (!value.sdt.trim() || !sdtRegex.test(value.sdt)) {
      newErrors.sdt = "Số điện thoại không được để trống và hợp lệ";
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value.email.trim() || !emailRegex.test(value.email)) {
      newErrors.email = "Email không được để trống và hợp lệ";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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
            {errors.mssv && <div className="text-danger">{errors.mssv}</div>}
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
            {errors.name && <div className="text-danger">{errors.name}</div>}
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
            {errors.sdt && <div className="text-danger">{errors.sdt}</div>}
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
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
        </div>
      </div>

      <button className="btn btn-success my-3" type="submit">
        Thêm sinh viên
      </button>
    </form>
  );
}
