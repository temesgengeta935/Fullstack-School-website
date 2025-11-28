import { response } from "./utils";

const announcements = [
  {
    id: 1,
    title: "School Reopening",
    type: "announcement",
    content:
      "We are excited to announce that the school will reopen on September 1st.",
    createdAt: "2024-08-15",
    updatedAt: "2024-08-15",
    category: "General",
    banner_image: "school_reopening.jpeg",
    priority: "High",
    tags: ["reopening", "general"],
    issued_by: "Principal's Office",
    attachments: ["reopening_details.pdf"],
    start_date: "2024-09-01", // when the announcement becomes effective
    end_date: "2024-09-10", // when the announcement is no longer relevant
  },
  {
    id: 2,
    title: "New Library Books",
    type: "news",
    content:
      "The school library has received a new collection of books across various genres.",
    createdAt: "2024-08-20",
    updatedAt: "2024-08-20",
    category: "Library",
    banner_image: "new_books.jpeg",
    priority: "Medium",
    tags: ["library", "books"],
    issued_by: "Library Department",
    attachments: ["book_list.pdf"],
    start_date: "2024-08-21",
    end_date: "2024-09-30",
  },
  {
    id: 3,
    title: "Upcoming Sports Day",
    type: "news",
    content:
      "Join us for the annual Sports Day event filled with fun and competition.",
    createdAt: "2024-08-25",
    updatedAt: "2024-08-25",
    category: "Events",
    banner_image: "sports_day.webp",
    priority: "High",
    tags: ["sports", "events"],
    issued_by: "Sports Department",
    attachments: ["sports_day_schedule.pdf"],
    start_date: "2024-09-15",
    end_date: "2024-09-15",
  },
  {
    id: 4,
    title: "Parent-Teacher Meeting",
    type: "announcement",
    content:
      "We invite all parents to attend the upcoming parent-teacher meetings.",
    createdAt: "2024-08-30",
    updatedAt: "2024-08-30",
    category: "Meetings",
    banner_image: "parent_teacher_meeting.jpeg",
    priority: "Medium",
    tags: ["parents", "teachers", "meetings"],
    issued_by: "Administration",
    attachments: ["meeting_schedule.pdf"],
    start_date: "2024-09-05",
    end_date: "2024-09-05",
  },
  {
    id: 5,
    title: "Art Exhibition",
    type: "news",
    content:
      "Explore the creativity of our students at the annual art exhibition.",
    createdAt: "2024-09-01",
    updatedAt: "2024-09-01",
    category: "Events",
    banner_image: "art_exhibition.jpeg",
    priority: "Low",
    tags: ["art", "exhibition"],
    issued_by: "Art Department",
    attachments: ["exhibition_details.pdf"],
    start_date: "2024-09-20",
    end_date: "2024-09-25",
  },
  {
    id: 6,
    title: "Science Fair Winners",
    type: "news",
    content: "Congratulations to the winners of this year's science fair!",
    createdAt: "2024-09-10",
    updatedAt: "2024-09-10",
    category: "Achievements",
    banner_image: "art_exhibition.jpeg",
    priority: "High",
    tags: ["science", "fair", "winners"],
    issued_by: "Science Department",
    attachments: ["winners_list.pdf"],
    start_date: "2024-09-11",
    end_date: "2024-09-30",
  },
  {
    id: 7,
    title: "Holiday Announcement",
    type: "announcement",
    content: "The school will be closed for the upcoming public holiday.",
    createdAt: "2024-09-15",
    updatedAt: "2024-09-15",
    category: "Holidays",
    banner_image: "art_exhibition.jpeg",
    priority: "Medium",
    tags: ["holiday", "announcement"],
    issued_by: "Administration",
    attachments: ["holiday_schedule.pdf"],
    start_date: "2024-10-01",
    end_date: "2024-10-01",
  },
  {
    id: 8,
    title: "New Cafeteria Menu",
    type: "announcement",
    content:
      "Check out the new healthy and delicious options in our cafeteria menu.",
    createdAt: "2024-09-20",
    updatedAt: "2024-09-20",
    category: "Cafeteria",
    banner_image: "art_exhibition.jpeg",
    priority: "Low",
    tags: ["cafeteria", "menu", "health"],
    issued_by: "Cafeteria Services",
    attachments: ["new_menu.pdf"],
    start_date: "2024-09-21",
    end_date: "2024-12-31",
  },
];

// get all announcements
export const getAllAnnouncementsAndNews = (page = 1, perPage = 10) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = announcements.slice(startIndex, endIndex);
  const meta = {
    totalItems: announcements.length,
    currentPage: page,
    perPage: perPage,
    totalPages: Math.ceil(announcements.length / perPage),
  };

  // simulate API call delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        response(
          "Retrieved announcements and news successfully",
          200,
          paginatedData,
          true,
          meta
        )
      );
    }, 500);
  });
};
