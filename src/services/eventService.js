// import { CREATE_SLOT, GET_ALL_SLOTS, GET_BUSY_SLOTS } from "utils/apiUrls";
import http from "./httpService";

const createSlot = async (data) => {
  console.log("data", data);
  const CREATE_SLOT = "/create-slot";
  const GET_ALL_SLOTS = "/get-day-slots";
  const GET_BUSY_SLOTS = "/get-busy-slots";

  const result = http
    .post(CREATE_SLOT, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      //   swal.showAlert('Oops!', 'An error occured', 'Ok', alertType.SERVER_ERROR);/
    });

  return result;
};

export const getAllSlots = async (date) => {
  const result = http
    .get(GET_ALL_SLOTS + date)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      //   swal.showAlert('Oops!', 'An error occured', 'Ok', alertType.SERVER_ERROR);
      console.log(error);
    });

  return result;
};
export const getBusySlots = async () => {
  const result = http
    .get(GET_BUSY_SLOTS)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      //   swal.showAlert('Oops!', 'An error occured', 'Ok', alertType.SERVER_ERROR);
      console.log(error);
    });

  return result;
};

// const DeleteEvent = async id => {
//   const result = http
//     .delete(DELETE_CATEGORY + id)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       // swal.showAlert("Oops!", "An error occured", "Ok", alertType.SERVER_ERROR);
//       console.log(error);
//     });

//   return result;
// };

const eventService = { createSlot, getAllSlots, getBusySlots };

export default eventService;
// const eventService = { save: SaveEvent ,get:getEvent ,update:updateEvent ,delete:deleteEvent};

// const callCreateEvent = async () => {
//   const event = {
//     summary: 'Event created for testing',
//     location: 'Bannerghatta road, Bangalore, 560076',
//     description: 'Test event description',
//     start: {
//       dateTime: '2023-10-08T11:00:00+05:30',
//       timeZone: '(GMT+05:30) India Standard Time - Kolkata',
//     },
//     end: {
//       dateTime: '2023-10-08T11:30:00+05:30',
//       timeZone: '(GMT+05:30) India Standard Time - Kolkata',
//     },
//     attendees: [{ email: 'mra@example.com' }, { email: 'mrb@example.com' }],
//     reminders: {
//       useDefault: false,
//       overrides: [
//         { method: 'email', minutes: 24 },
//         { method: 'popup', minutes: 10 },
//       ],
//     },
//     transparency: 'transparent', // Set this to "opaque" for busy or "transparent" for free
//   };
//   try {
//     const response = await axios.post(
//       'http://localhost:8000/create-event',
//       event,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//     );
//     console.log('Event data is ', response);

//     if (response.ok) {
//       console.log('Event created successfully');
//       const data = await response.json();
//       console.log('Response data:', data);
//     } else {
//       console.error('Error creating event:', response);
//     }
//   } catch (error) {
//     console.error('Error creating event:', error);
//   }
// };
