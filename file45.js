async function getStudentInfo() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const student = {
        name: "John Doe",
        age: 20,
        grade: "A"
      };
      resolve(student);
    }, 2000);
  });
}

async function displayStudentInfo() {
  try {
    const userObj = await getStudentInfo();
    console.log(userObj.name);
  } catch (error) {
    console.error("Error fetching student info");
  }
}

displayStudentInfo();
