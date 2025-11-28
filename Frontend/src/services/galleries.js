import { response } from "./utils";

const images = [
  "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
  "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
  "https://images.pexels.com/photos/1678325/pexels-photo-1678325.jpeg",
  "https://images.pexels.com/photos/35600/road-sunset-tree-clouds-35600.jpeg",
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
  "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg",
  "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg",
  "https://images.pexels.com/photos/1678325/pexels-photo-1678325.jpeg",
  "https://images.pexels.com/photos/35600/road-sunset-tree-clouds-35600.jpeg",
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
];

//get Student galleries
export const getGalleries = async (page = 1, perPage = 12) => {
  //simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  //calculate start and end index
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const meta = {
    current_page: page,
    per_page: perPage,
    total_images: images.length,
    total_pages: Math.ceil(images.length / perPage),
  };
  //slice images array to get paginated results
  const paginatedImages = images.slice(startIndex, endIndex);

  return response(
    "Galleries fetched successfully",
    200,
    paginatedImages,
    true,
    meta
  );
};
