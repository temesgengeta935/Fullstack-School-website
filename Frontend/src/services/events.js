import { response } from "./utils";

const initialEvents = [
  {
    id: 1,
    title: "The Future of Our kid's Education",
    description:
      "An insightful discussion on the advancements and challenges in modern education.",
    date: "2024-07-15",
    images: [
      "/assets/images/event1.jpeg",
      "/assets/images/event2.jpeg",
      "/assets/images/event3.jpeg",
      "/assets/images/event4.png",
      "/assets/images/event5.jpeg",
    ],
  },
  {
    id: 2,
    title: "Community Health and Wellness Fair",
    description:
      "Join us for a day of health screenings, fitness classes, and wellness workshops.",
    date: "2024-08-20",
    images: [
      "/assets/images/event2.jpeg",
      "/assets/images/event3.jpeg",
      "/assets/images/event4.png",
      "/assets/images/event5.jpeg",
      "/assets/images/event1.jpeg",
    ],
  },
  {
    id: 3,
    title: "Tech Innovations Expo 2024",
    description:
      "Explore the latest in technology and innovation with hands-on demos and expert talks.",
    date: "2024-09-10",
    images: [
      "/assets/images/event3.jpeg",
      "/assets/images/event4.png",
      "/assets/images/event5.jpeg",
      "/assets/images/event1.jpeg",
      "/assets/images/event2.jpeg",
    ],
  },
  {
    id: 4,
    title: "Cultural Heritage Festival",
    description:
      "Celebrate diverse cultures with performances, food, and art from around the world.",
    date: "2024-10-05",
    images: [
      "/assets/images/event4.png",
      "/assets/images/event5.jpeg",
      "/assets/images/event1.jpeg",
      "/assets/images/event2.jpeg",
      "/assets/images/event3.jpeg",
    ],
  },
  {
    id: 5,
    title: "Sustainability and Green Living Workshop",
    description:
      "Learn practical tips and strategies for living a more sustainable and eco-friendly lifestyle.",
    date: "2024-11-12",
    images: [
      "/assets/images/event5.jpeg",
      "/assets/images/event1.jpeg",
      "/assets/images/event2.jpeg",
      "/assets/images/event3.jpeg",
      "/assets/images/event4.png",
    ],
  },
  //upcoming event
  {
    id: 6,
    title: "Winter Charity Gala",
    description:
      "An elegant evening of dining and entertainment to support local charities.",
    date: "2026-12-18",
    images: [
      "/assets/images/event2.jpeg",
      "/assets/images/event3.jpeg",
      "/assets/images/event4.png",
      "/assets/images/event5.jpeg",
      "/assets/images/event1.jpeg",
    ],
  },
];

export async function fetchEvents() {
  let error = false;
  // Simulate an API call with a delay
  return new Promise((resolve, reject) => {
    if (error) {
      return reject(response("Failed to fetch events.", 500, null, false));
    }

    setTimeout(() => {
      resolve(
        response("events fetched successfully!", 200, initialEvents, true)
      );
    }, 1000);
  });
}

export async function fetchEventById(id) {
  // Simulate an API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = initialEvents.find((event) => event.id === parseInt(id));
      if (event) {
        resolve(response("Events fetched succesfully!", 200, event, true));
      } else {
        reject(response("unable to fetch event!", 404, null, false));
      }
    }, 1000);
  });
}

//
