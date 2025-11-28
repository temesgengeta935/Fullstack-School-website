//==========================
//Teachers Service
//=========================

import { response } from "./utils";

// ## **FR-4: View Teachers List**

// Users can view all teachers with:

// - Name
// - Department
// - Photo
// - Short bio

const teachers = [
  {
    id: 1,
    name: "Alice Johnson",
    department: "Mathematics",
    photo: "event5.jpeg",
    bio: "Alice has been teaching mathematics for over 10 years and loves helping students discover the beauty of numbers.",
  },
  {
    id: 2,
    name: "Bob Smith",
    department: "Science",
    photo: "event5.jpeg",
    bio: "Bob is passionate about science and has a knack for making complex concepts easy to understand.",
  },
  {
    id: 3,
    name: "Catherine Lee",
    department: "English",
    photo: "event5.jpeg",
    bio: "Catherine has a deep love for literature and enjoys inspiring students to develop their reading and writing skills.",
  },
  {
    id: 4,
    name: "David Brown",
    department: "History",
    photo: "event5.jpeg",
    bio: "David brings history to life with engaging stories and a focus on critical thinking.",
  },
  {
    id: 5,
    name: "Eva Green",
    department: "Art",
    photo: "event5.jpeg",
    bio: "Eva encourages creativity and self-expression through various art forms and techniques.",
  },
];
export const getAllTeachers = async (page = 1, perPage = 10) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedTeachers = teachers.slice(startIndex, endIndex);
  const meta = {
    totalItems: teachers.length,
    currentPage: page,
    perPage: perPage,
    totalPages: Math.ceil(teachers.length / perPage),
  };

  // simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return response(
    "Fetched teachers successfully",
    200,
    paginatedTeachers,
    true,
    meta
  );
};
