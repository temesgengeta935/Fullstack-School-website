// ## **FR-5: View Announcements**

// Users can read all announcements

// **Each announcement includes:**

// - Title
// - Content
// - Created date

import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getAllAnnouncementsAndNews } from "../services/annoucements";
import Button from "../components/Button";
import Loading from "../components/Loading";
import Error from "../components/Error";
import styles from "./Announcements.module.css";
import Badge from "../components/Badge";
import { Download } from "lucide-react";

const Announcements = () => {
  const [announcements, setAnnouncements] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(true);

  useEffect(() => {
    // Fetch announcements from API or service
    const fetchA = async () => {
      setIsLoading(true);
      const response = await getAllAnnouncementsAndNews(page, 5);
      console.log("response:", response);
      if (response.success) {
        setAnnouncements((prev) => [...prev, ...response.data]);
        setHasNextPage(response.meta.currentPage < response.meta.totalPages);
      } else {
        setError("Failed to load announcements.");
      }
      setIsLoading(false);
    };
    fetchA();
  }, [page]);

  //==========
  // Load more announcements
  //==========
  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  console.log(announcements);
  console.log(isLoading);
  console.log(error);
  console.log(page);
  console.log(hasNextPage);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "#b11616ff",
      }}
    >
      <NavBar />
      <main className="container" style={{ flex: "1" }}>
        <div className={styles.header}>
          <h1 style={{ marginTop: "130px" }} className={styles.title}>
            Recent News And Announcements
          </h1>
          <p>
            Stay updated with the latest news and announcements from our school
          </p>
        </div>
        {isLoading && <Loading message="Loading Announcements" />}
        {error && <Error message={error} />}

        {/* Annoucements grid */}
        <div className={styles.announcementGrid}>
          {announcements.map((announce) => (
            <AnnounceCard key={announce.id} announce={announce} />
          ))}
        </div>

        {hasNextPage && (
          <Button onClick={loadMore} disabled={isLoading}>
            {isLoading ? "Loading..." : "Load More Announcements"}
          </Button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Announcements;

//=========================
//Announcement Card
//==========================
const AnnounceCard = ({ announce }) => {
  return (
    <div className={styles.announcementCard} key={announce.id}>
      <div
        className={styles.banner}
        style={{
          background: `url(/assets/images/${announce.banner_image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.announcementContent}>
        {/* priority */}
        <Badge
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            zIndex: 1,
          }}
          text={announce.priority}
          type={announce.priority.toLowerCase()}
        />
        {/* Category */}
        <Badge text={announce.category} type="medium" />
        {/* title */}
        <h2>{announce.title}</h2>
        {/* issued by */}
        <p>Issued by: {announce.issued_by}</p>
        {/* content */}
        <p>{announce.content}</p>
        {/* tags */}
        <div className={styles.tags}>
          {announce.tags.map((tag, index) => (
            <Badge key={index} text={tag} type="low" />
          ))}
        </div>
        {/* Meta */}
        <div className={styles.meta}>
          <div>
            <p>Posted:</p>
            <span>{new Date(announce.createdAt).toLocaleDateString()}</span>
          </div>
          <div>
            <p>Starts:</p>
            <span>{new Date(announce.start_date).toLocaleDateString()}</span>
          </div>
          <div>
            <p>Ends:</p>
            <span>{new Date(announce.end_date).toLocaleDateString()}</span>
          </div>
          <div>
            <p>updated: </p>
            <span>{new Date(announce.updatedAt).toLocaleDateString()}</span>
          </div>
        </div>
        {/* attachements */}
        {announce &&
          announce.attachments &&
          announce.attachments.length > 0 && (
            <div className={styles.attachments}>
              <h3>Attachments:</h3>
              <ul>
                {announce.attachments.map((attachment, index) => (
                  <li key={index}>
                    <a
                      href={`/assets/attachments/${attachment}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {attachment}
                      <Download />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>
    </div>
  );
};
