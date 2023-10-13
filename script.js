"use strict";

const student1 = { name: "Jane", score: 95, passed: true };
const student2 = { name: "Joe", score: 77, passed: true };
const student3 = { name: "Jack", score: 59, passed: false };
const student4 = { name: "Jill", score: 88, passed: true };
const submissions = [student1, student2, student3, student4];

const addSubmission = (array, newName, newScore) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
console.log(submissions);
addSubmission(submissions, "Bill", 60);
console.log(submissions);

const deleteSubmissionByIndex = (array, index) => array.splice(index, 1);

const deleteSubmissionByName = (array, name) => {
  const foundIndex = array.findIndex((submission) => {
    return submission.name === name;
  });
  if (foundIndex !== -1) {
    deleteSubmissionByIndex(array, foundIndex);
  }
};

const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};

const findSubmissionByName = (array, name) => {
  return array.find((submission) => submission.name === name);
};

const findLowestScore = (array) => {
  return array.reduce((prev, current) => {
    return current.score < prev.score ? current : prev;
  });
};
console.log("----------------------------------------------------");
console.log(findLowestScore(submissions));

const findAverageScore = (array) => {
  const sum = array.reduce((prev, current) => {
    return prev + current.score;
  }, 0);
  return sum / array.length;
};
console.log(findAverageScore(submissions));

const filterPassing = (array) => {
  return array.filter((item) => item.passed);
};

const filter90AndAbove = (array) => {
  return array.filter((item) => item.score >= 90);
};

// Extended Challenges
const createRange = (start, end) => {
  let newArray = [];
  for (let i = start; i <= end; i++) {
    newArray.push(i);
  }
  return newArray;
};
console.log("-----------------------------------------------------");
console.log(createRange(-3, 17));

// array of strings
const countElements = (arr) => {
  const result = {};
  for (const item of arr) {
    if (item in result) {
      result[item]++;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

console.log("-----------------------------------------------------");
console.log(
  countElements(["a", "b", "b", "c", "zebra", "a", "b", "zebra", "c", "Q"])
);
