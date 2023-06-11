import { Job } from "../types/types";

type Props = {
  job: Job;
};

const TopPart = ({ job }: Props) => {
  return (
    <div className="left">
      <div className="job-logo">
        <img src={job.logo} alt="job-logo" className="job-logo-img" />
      </div>
      <div className="top-left">
        <div className="company">
          <h2>{job.company}</h2>

          <ul className="new-feature">
            {job.new && <li className="new-bg">NEW!</li>}
            {job.featured && <li className="feature-bg">FEATURED</li>}
          </ul>
        </div>
        <h2 className="position">{job.position}</h2>
        <div className="info">
          <p>{job.postedAt}</p>
          <p>﹡</p>
          <p>{job.contract}</p>
          <p>﹡</p>
          <p>{job.location}</p>
        </div>
      </div>
    </div>
  );
};
export default TopPart;
