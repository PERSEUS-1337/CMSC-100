import React from 'react';
import SubjectList from './SubjectList';
const CMSCSubjects = [
  { code: "CMSC100", description: "Web Programming", id: 1 },
  { code: "CMSC150", description: "Scientific Computation", id: 2 },
  { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
  { code: "CMSC123", description: "Data Structures", id: 3 },
]

const CHEMSubjects = [
  { code: "CHEM100", description: "Introduction to Organic CHemistry", id: 1 },
  { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
  { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
]

function App() {
  return (
    <div>
      <div className="some-class">
        Hello World!
      </div>
      <br/>
      <div>
        Hello Earth!
      </div>
      <SubjectList data={CMSCSubjects} title={"Computer Science Subjects"} />
      <SubjectList data={CHEMSubjects} title={"Chemistry Subjects"} />
    </div>
    
  );
}

export default App;
