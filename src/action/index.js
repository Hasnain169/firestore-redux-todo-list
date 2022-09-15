import firebase from "../configura/firebase";

export const addTodo = data => async dispatch => {
 firebase
  .firestore()
  .collection("todo")
  .add({ data })
  .then(res => {
   alert("Todo Added Successfully");
  })
  .catch(err => {
   alert(err.message);
  });
};

export const editTodo = (data, id) => async dispatch => {
    firebase
        .firestore()
        .collection("todo")
        .doc(id)
        .update({ data })
        .then(res => {
            alert("Todo Edited successfully");
        })
        .catch(err => {
            alert(err.message);
        });
};

export const gettodo = () => async dispatch => {
 firebase
  .firestore()
  .collection("todo")
  .onSnapshot(query => {
   let tempdata = [];
   query.forEach(doc => {
    tempdata.push({
     id: doc.id,
     ...doc.data(),
    });
   });
   dispatch({
    type: "GET_TODO",
    payload: tempdata,
   });
  });
};

export const deleteTodo = id => async dispatch => {
 firebase
  .firestore()
  .collection("todo")
  .doc(id)
  .delete()
  .then(res => {
   alert("Todo Deleted Successfully");
  })
  .catch(err => {
   alert(err.message);
  });
};
