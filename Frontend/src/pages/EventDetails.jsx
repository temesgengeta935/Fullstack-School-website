import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";
import { fetchEventById } from "../services/events";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import ImageGallery from "../components/common/ImageGallery";
import styles from "./EventDetails.module.css";

const EventDetails = () => {
  const [eventData, setEventData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const params = useParams();
  const { id } = params;
  React.useEffect(() => {
    //fetchEvent
    const fetchEvent = async () => {
      setIsLoading(true);
      const response = await fetchEventById(id);
      if (response.success) {
        setEventData(response.data);
      } else {
        setError(response.message || "Failed to load event details");
      }
      setIsLoading(false);
    };
    fetchEvent();
  }, [id]);
  console.log("event data", eventData);
  console.log("id:", id);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <main
        className="container"
        style={{
          flex: "1",
          // backgroundColor: "#a03030ff",
        }}
      >
        <div style={{ marginTop: "80px", width: "100%", color: "white" }}>
          {isLoading ? (
            <Loading message="Loading event" />
          ) : error ? (
            <Error
              message={
                error || "Error showing event details, please try again!"
              }
            />
          ) : (
            <div style={{ width: "100%" }}>
              {/* top image */}
              <div style={{ position: "relative" }}>
                <img
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "20px",
                  }}
                  src={eventData?.images[0]}
                  alt="event image"
                />
                <div className={styles.contents}>
                  <h2
                    style={{
                      margin: "0",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    {eventData?.title} -{" "}
                    {new Date(eventData?.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </h2>
                  <p>{eventData?.description}</p>
                </div>
                {/* image gallery */}
                <ImageGallery images={eventData?.images} />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails;
