import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const companyJobs = useSelector((state) => state.jobs.company.content);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyJobsAction(params.company));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {companyJobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
