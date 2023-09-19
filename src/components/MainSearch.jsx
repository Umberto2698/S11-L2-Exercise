import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction } from "../redux/actions/index";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.searched.content);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(query));
    sessionStorage.setItem("searched-jobs", query);
  };

  useEffect(() => {
    if (sessionStorage.getItem("searched-jobs")) {
      dispatch(getJobsAction(sessionStorage.getItem("searched-jobs")));
      setQuery(sessionStorage.getItem("searched-jobs"));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <div className="d-flex justfy-content-between align-items-center">
            <Form className="flex-grow-1 me-2" onSubmit={handleSubmit}>
              <Form.Control
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="type and press Enter"
                required
              />
            </Form>
            <Link to="/favourite">
              <Button variant="info">Favourite</Button>
            </Link>
          </div>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
