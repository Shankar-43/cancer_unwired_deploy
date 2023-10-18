const fetchTestData = async (setBusySlots = null) => {
  try {
    const response = await fetch("http://localhost:8001/get-all-slots");
    const testData = await response.json();
    console.log("result: ", testData);
    const result = testData.eventDetails;
    console.log("result: ", result);
    setBusySlots(result);
    console.log("the result in the doctors calendar is ", result);
  } catch (error) {
    console.error("Error fetching test data:", error);
  }
};

export { fetchTestData };
