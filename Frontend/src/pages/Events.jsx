import React from "react";
import styles from "../styles/Events.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { fetchEvents } from "../services/events";

const Events = () => {
  const [filterType, setFilterType] = React.useState("all");
  const [allEvents, setAllEvents] = React.useState([]); //  original fetched data
  const [events, setEvents] = React.useState([]); //  filtered data
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();

  // -----------------------------------------
  // Fetch events once on mount
  // -----------------------------------------
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetchEvents();

        if (res.success) {
          setAllEvents(res.data);
          setEvents(res.data); // default view
        } else {
          setError(res.message || "Failed to load events");
        }
      } catch (err) {
        setError("Something went wrong loading events.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // -----------------------------------------
  // Apply filtering when filterType changes
  // -----------------------------------------
  React.useEffect(() => {
    if (filterType === "all") {
      setEvents(allEvents);
      return;
    }

    const now = new Date();

    const filtered = allEvents.filter((event) => {
      const eventDate = new Date(event.date);

      if (filterType === "upcoming") return eventDate >= now;
      if (filterType === "past") return eventDate < now;

      return true;
    });

    setEvents(filtered);
  }, [filterType, allEvents]);

  // -----------------------------------------
  // Render
  // -----------------------------------------

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />

      <main className="container" style={{ flex: 1 }}>
        <h1 className={styles.title} style={{ marginTop: "130px" }}>
          Events in Our School Community
        </h1>

        {/* FILTER BUTTONS */}
        <div
          className={styles.eventsGrid}
          style={{ marginTop: "50px", top: "90px" }}
        >
          <Button
            onClick={() => setFilterType("all")}
            variant={filterType === "all" ? "primary" : "outline"}
            style={{ marginRight: "10px", borderRadius: "20px" }}
          >
            All Events
          </Button>

          <Button
            onClick={() => setFilterType("upcoming")}
            variant={filterType === "upcoming" ? "primary" : "outline"}
            style={{ marginRight: "10px", borderRadius: "20px" }}
          >
            Upcoming Events
          </Button>

          <Button
            onClick={() => setFilterType("past")}
            variant={filterType === "past" ? "primary" : "outline"}
            style={{ borderRadius: "20px" }}
          >
            Past Events
          </Button>
        </div>

        {/* LOADING */}
        {isLoading && <p className={styles.loading}>Loading events...</p>}

        {/* ERROR */}
        {error && <p className={styles.error}>{error}</p>}

        {/* EMPTY */}
        {!isLoading && !error && events.length === 0 && (
          <p className={styles.noEventsMessage}>
            No {filterType === "all" ? "" : filterType} events to display.
          </p>
        )}

        {/* EVENTS LIST */}
        <div className={styles.eventsList} style={{ marginTop: "30px" }}>
          {events.map((event) => (
            <div key={event.id} className={styles.eventCard}>
              <img
                src={event.image}
                alt={event.title}
                className={styles.eventImage}
              />

              <div className={styles.eventDetails}>
                <h2 className={styles.eventTitle}>{event.title}</h2>
                <p className={styles.eventDate}>
                  Date: {new Date(event.date).toLocaleDateString()}
                </p>
                <p className={styles.eventDescription}>{event.description}</p>
              </div>

              <div className={styles.eventActions}>
                <Button
                  onClick={() => navigate(`/events/${event.id}`)}
                  variant="primary"
                  style={{ borderRadius: "20px" }}
                >
                  See Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
