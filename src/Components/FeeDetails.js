import React, { useState } from 'react';
import { feeStructure, coursesList, levelsList } from './Constant';


const FeeDetails = () => {
  const [selectedFee, setSelectedFee] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [totalFee, setTotalFee] = useState()

  const handleFeeChange = (event) => {
    setSelectedFee(event.target.value);
    setSelectedNationality('');
    setSelectedCourse('');
    setSelectedLevel('');
  };

  const handleNationalityChange = (event) => {
    setSelectedNationality(event.target.value);
    setSelectedCourse('');
    setSelectedLevel('');
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
    setSelectedLevel('');
  };

  const handleLevelChange = (event) => {
    setSelectedLevel(event.target.value);
  };

  const getFeeAmount = () => {
    if (selectedFee && selectedNationality && selectedCourse && selectedLevel) {
      if (selectedFee === "Exam Fee") {
        const fee = feeStructure[selectedFee][selectedNationality]["ALL_COURSES"]["ALL_LEVEL"];
        return fee ? setTotalFee("The Total Fee is :" +fee.amount) : setTotalFee(" Fee Not found");
      }
      else {
        const fee = feeStructure[selectedFee][selectedNationality]["ALL_COURSES"][selectedLevel];
        return fee ? setTotalFee("The Total Fee is :" +fee.amount) : setTotalFee("Fee Not found");
      }
    } else {
      return setTotalFee("Please select all options");
    }
  };

  return (
    <div >
      <h1>Fee Details</h1>
      <label>Fee:</label>
      <select value={selectedFee} onChange={handleFeeChange}>
        <option value="">Select a fee</option>
        {Object.keys(feeStructure).map((fee) => (
          <option key={fee} value={fee}>
            {fee}
          </option>
        ))}
      </select>


      <label>Nationality:</label>
      <select value={selectedNationality} onChange={handleNationalityChange}>
        <option value="">Select a nationality</option>
        {selectedFee && Object.keys(feeStructure[selectedFee]).map((nationality) => (
          <option key={nationality} value={nationality}>
            {nationality}
          </option>
        ))}
      </select>
      <label>Couse:</label>
      <select value={selectedCourse} onChange={handleCourseChange}>
        <option value="">Select a course</option>
        {selectedNationality && coursesList.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>

      <label>Level:</label>
      <select value={selectedLevel} onChange={handleLevelChange}>
        <option value="">Select a Level</option>
        {selectedCourse && levelsList.map((Level) => (
          <option key={Level} value={Level}>
            {Level}
          </option>
        ))}
      </select>
      <br/>
      <button onClick={getFeeAmount}>Get Fee</button>
      <h3>{totalFee}</h3>
    </div>
  )
}
export default FeeDetails;

