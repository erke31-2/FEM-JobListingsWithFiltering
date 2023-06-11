import { Job } from "../types/types";
import TopPart from "./TopPart";
type Props = {
  job: Job;
  query: string[];
  handleQueryClick: (value: string) => void;
};
const JobCard = ({ job, handleQueryClick, query }: Props) => {
  return (
    <div className={`${job.featured && "border-left"} job-card`}>
      <TopPart job={job} />
      <div className="divider" />

      <ul className="bot-right">
        <li
          className={`tag ${query.includes(job.role) && "selected-tag"}`}
          onClick={() => handleQueryClick(job.role)}
        >
          {job.role}
        </li>
        <li
          className={`tag ${query.includes(job.level) && "selected-tag"}`}
          onClick={() => handleQueryClick(job.level)}
        >
          {job.level}
        </li>
        {job.languages.map((l) => (
          <li
            className={`tag ${query.includes(l) && "selected-tag"}`}
            key={l}
            onClick={() => handleQueryClick(l)}
          >
            {l}
          </li>
        ))}
        {job.tools &&
          job.tools.map((tool) => (
            <li
              className={`tag ${query.includes(tool) && "selected-tag"}`}
              key={tool}
              onClick={() => handleQueryClick(tool)}
            >
              {tool}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default JobCard;
