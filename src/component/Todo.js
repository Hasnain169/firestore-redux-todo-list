import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo, gettodo } from "../action";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

const Todo = () => {
const [data, setData] = useState("");
const [show, setShow] = useState(false);
const [edit, setEdit] = useState("");
const [id, setId] = useState("");

const handleClose = () => setShow(false);

const dispatch = useDispatch();
const list = useSelector(state => state.todoReducer.list);

const handleShow = (el) => {
  setShow(true);
  setEdit(el);
};

useEffect(()=>{
  dispatch(gettodo());
},[dispatch])

const sub= (e)=>{
  e.preventDefault()
  dispatch(addTodo(data), setData(""))
}

const sob= (e)=>{
  e.preventDefault()
  dispatch(editTodo(edit,id), setData(""))
  handleClose()
}

return (
  <>
  <div className="main">
    <div className="navbar">
    <div className="nav-content">
      <h1>Firestore Redux Todo List</h1>
    </div>
    </div>
    <div className="home">
    <div className="home-content">
      <h1>All Todos</h1>
      <div className="add-data">
      <h2>Add Your Name Here</h2>
      <form onSubmit={sub}>
      <input
        type="text"
        placeholder="Add Name"
        className="add-input"
        value={data}
        onChange={(e) => setData(e.target.value)}
        required
      />
      <button
        className="botn botn-add"
        type='Submit'
      >
        Add
      </button>
      </form>
      </div>
      <div className="show-items">
      {list.map((ele, index) => {
        return (
        <div className="each-items" key={index}>
          <h3>{ele.data}</h3>
          <button
          className="botn botn-del"
          onClick={() => dispatch(deleteTodo(ele.id))}
          >
          Delete
          </button>
          <button
          className="botn botn-edit"
          onClick={() => {
            handleShow(ele.data);
            setId(ele.id);
          }}
          >
          Edit
          </button>
        </div>
        );
      })}
      </div>
    </div>
    </div>
    
    <div className="modal">
    
    <Modal show={show} >
          <h3 className="text-center">Edit Your Name Here</h3>
          <form onSubmit={sob}>
          <Modal.Header className="headerr">
          <div className="input">
          <input
        type="text"
        placeholder="Add Name"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
        required
        />
        </div>
        </Modal.Header>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type='Submit'>
            Save Changes
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </div>
  </div>
  </>
);
};

export default Todo;
