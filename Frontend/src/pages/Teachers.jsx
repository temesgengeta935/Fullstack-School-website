import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styles from "./Teachers.module.css";
import { getAllTeachers } from "../services/teachers";
import Loading from "../components/Loading";
import Error from "../components/Error";
import Button from "../components/Button";

const Teachers = () => {
  const [teachers, setTeachers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(false);

  React.useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setLoading(true);
        setError(null);
        const perPage = 10;
        const response = await getAllTeachers(page, perPage);

        if (response.success) {
          setTeachers(response.data);
          setHasNextPage(page < response.meta.totalPages);
        } else {
          setError("Failed to load teachers. Please try again later.");
        }
      } catch (err) {
        setError("Failed to load teachers. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [page]);

  console.log("Teachers:", teachers);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <main className="container" style={{ flex: "1" }}>
        <div className={styles.teachersHeader}>
          <h1 style={{ marginTop: "130px" }}>Our Faculty</h1>
          <p>
            Our Faculty Meet our dedicated and experienced teachers committed to
            providing quality education and mentorship
          </p>
        </div>

        {/* Loading */}
        {loading && <Loading message="Loading Teachers." />}
        {/* Error */}
        {error && <Error message={error} />}

        {/* Teacher Grid */}
        {!loading && !error && teachers.length > 0 && (
          <div className={styles.teacherGrid}>
            {teachers.map((teacher) => (
              <div key={teacher.id} className={styles.teacherCard}>
                <div
                  className={styles.teacherPhotoContainer}
                  style={{
                    background: `url(/assets/images/${teacher.photo})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                <h3>{teacher.name}</h3>
                <p className={styles.teacherDepartment}>
                  Department: {teacher.department}
                </p>
                <p className={styles.teacherBio}>{teacher.bio}</p>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {!loading && !error && hasNextPage && (
          <Button
            onClick={() => setPage(page + 1)}
            style={{ margin: "20px auto", display: "block" }}
          >
            Load More
          </Button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Teachers;
