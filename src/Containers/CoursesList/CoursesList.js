import React, { useState, useEffect } from "react";
import { Button, ListGroup, ListGroupItem, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import "./CoursesList.css";

import Firebase from "../../firebase";

// Firebase.firestore().collection("times").add({
//   title: "rubik cube",
//   time_seconds: "45 sec",
// });

// function useCourse() {
//   const [input, setInput] = useState("");
//   useEffect(() => {
//     Firebase.firestore()
//       .collection("courses")
//       .onSnapshot((snapshot) => {
//         //debugger;
//         const newCourse = snapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setInput(newCourse);
//       });
//   }, []);
//   return input;
// }

const CoursesList = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    console.log("use effect ran");
  }, []);

  let history = useHistory();
  const onClickHandler = () => {
    console.log("button was cicked");
  };

  return (
    <div>
      <header className="App-header">
        COURSES
        <div className="courses">
          <ListGroup>
            <ListGroupItem onClick={() => history.push(`/bca`)}>
              Bachelor of Computer Applications (BCA)
            </ListGroupItem>
            <ListGroupItem onClick={() => history.push(`/bba`)}>
              Bachelor of Business Administration(BBA)
            </ListGroupItem>
            <ListGroupItem onClick={() => history.push(`/pgdm`)}>
              Post Graduate Diploma in Management(PGDM)
            </ListGroupItem>
            <ListGroupItem onClick={() => history.push(`/mca`)}>
              Master of Computer Applications(MCA)
            </ListGroupItem>

            {/* {input.map((course) => {
              <ListGroupItem key={course.id}>{course.input}</ListGroupItem>;
            })} */}
          </ListGroup>
          {/* <Input placeholder="Check it out" />
          <Button>Update</Button> */}
        </div>
        {/* <div className="add_button">
          <Button onClick={onClickHandler}>ADD MORE COURSES</Button>
        </div> */}
      </header>
    </div>
  );
};

export default CoursesList;
