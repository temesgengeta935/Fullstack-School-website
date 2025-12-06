import React, { useEffect } from "react";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import styles from "./Galleries.module.css";
import { getGalleries } from "../services/galleries";
import ImageGallery from "../components/common/ImageGallery";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import Button from "../components/common/Button";

const Galleries = () => {
  const [galleries, setGalleries] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  //-----------------------------------------
  // Pagination state
  //-----------------------------------------
  const [page, setPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  //-----------------------------------------
  // Fetch galleries on mount
  //-----------------------------------------
  useEffect(() => {
    const fetchGalleries = async () => {
      setIsLoading(true);
      const response = await getGalleries(1, 12);
      console.log("galleries response:", response);
      if (response.success) {
        setGalleries(response.data);
        // update hasNextPage based on meta info
        if (
          response.meta &&
          response.meta.current_page < response.meta.total_pages
        ) {
          setHasNextPage(true);
        } else {
          setHasNextPage(false);
        }
      } else {
        setError("Failed to load galleries");
      }
      setIsLoading(false);
    };

    fetchGalleries();
  }, []);

  //==================================
  // Load more images for pagination
  //==================================
  const loadMoreImages = async (e) => {
    e.preventDefault();
    const nextPage = page + 1;
    setIsLoading(true);
    const response = await getGalleries(nextPage, 12);
    console.log("load more galleries response:", response);
    if (response.success) {
      setGalleries((prevGalleries) => [...prevGalleries, ...response.data]);
      setPage(nextPage);
      // update hasNextPage based on meta info
      if (
        response.meta &&
        response.meta.current_page < response.meta.total_pages
      ) {
        setHasNextPage(true);
      } else {
        setHasNextPage(false);
      }
    } else {
      setError("Failed to load more galleries");
    }
    setIsLoading(false);
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <main className={`container ${styles.galleries}`} style={{ flex: "1" }}>
        <div className={styles.contents}>
          <h1 style={{ marginTop: "130px" }}>
            Basius School Galleries Collection
          </h1>
          <p>
            Explore our curated collection of images showcasing memorable
            moments from Basius School. From vibrant events to everyday school
            life, our galleries capture the essence of our community.
          </p>
        </div>
        {isLoading ? (
          <Loading message="Loading galleries..." />
        ) : error ? (
          <Error
            message={error || "Error loading galleries, please try again!"}
          />
        ) : (
          <>
            <ImageGallery images={galleries} />
            {hasNextPage ? (
              <Button
                style={{ display: "block", margin: "20px auto" }}
                onClick={loadMoreImages}
              >
                Load More
              </Button>
            ) : (
              <p style={{ textAlign: "center", margin: "20px", color: "gray" }}>
                No more images to load.
              </p>
            )}
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Galleries;
