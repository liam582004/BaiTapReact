import { useEffect, useReducer, useRef } from "react";
import axios from "axios";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import toast, { Toaster } from "react-hot-toast";

const initialState = {
  students: [],
  selectStudent: null,
  searchTerm: "",
  debounceSearchTerm: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_student":
      return { ...state, students: action.payload };
    case "update_student":
      return { ...state, selectStudent: action.payload };
    case "search_input":
      return {
        ...state,
        debounceSearchTerm: action.payload,
        searchTerm: action.payload,
      };
    case "debounce_callApi":
      return { ...state, debounceSearchTerm: action.payload };

    default:
      return state;
  }
};

const base = "https://650f9b1754d18aabfe9a205f.mockapi.io/api/users";
export default function StudentManagement() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { students, selectStudent, searchTerm, debounceSearchTerm } = state;

  const timer = useRef();

  useEffect(() => {
    fetchStudents();
  }, [debounceSearchTerm]);

  const fetchStudents = async () => {
    try {
      const { data } = await axios.get(base);
      dispatch({ type: "add_student", payload: data });
    } catch (error) {}
  };

  const handleAddStudent = async (student) => {
    try {
      const response = await axios.post(base, student);
      dispatch({ type: "add_student", payload: response.data });
      toast.success("Thêm sinh viên thành công");
    } catch (error) {
      toast.error("Lỗi: tạo sinh viên");
    }
  };

  const handleUpdateStudent = async (mssv, user) => {
    try {
      await axios.put(`${base}/${mssv}`, user);
      fetchStudents();
      toast.success("Thành công cập nhật");
    } catch (error) {
      toast.error("Cập nhật thất bại");
    }
  };

  const handleDeleteStudent = async (mssv) => {
    try {
      await axios.delete(`${base}/${mssv}`);
      toast.success("Xóa thành công");
      fetchStudents();
    } catch (error) {
      toast.error("Xóa thất bại");
    }
  };

  const handleSelectStudent = async (mssv) => {
    try {
      const { data } = await axios.get(`${base}/${mssv}`);
      dispatch({ type: "update_student", payload: data });
    } catch (error) {
      toast.error("Lấy dữ liệu sai ");
    }
  };

  const handleSearch = (evt) => {
    dispatch({ type: "search_input", payload: evt.target.value });

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      dispatch({ type: "debounce_callApi", payload: evt.target.value });
    }, 300);
  };
  return (
    <div>
      <Toaster position="top-right" />
      <h4 className=" text-white bg-dark py-3">THÔNG TIN SINH VIÊN</h4>

      <StudentForm
        student={selectStudent}
        onAdd={handleAddStudent}
        onUpdate={handleUpdateStudent}
      />

      <div className="my-3">
        <input
          placeholder="Seach by name"
          className="form-control"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <StudentList
        students={students}
        onDelete={handleDeleteStudent}
        onEdit={handleSelectStudent}
      />
    </div>
  );
}
