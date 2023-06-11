import JobCard from "./components/JobCard";
import FilterInput from "./components/FilterInput";
import { useMemo, useState } from "react";
import { Job } from "./types/types";
import data from "../data/data.json"

const App = () => {
  const [jobs, setJobs] = useState<Job[]>(data)
  const [query, setQuery] = useState<string[]>([]);

  // const filterJobs =
  //   query.length > 0
  //     ? jobs?.filter((job) =>
  //         query.every((q) => {
  //           //role, level, languages, tools
  //           const roleMatch = job.role === q;
  //           const levelMatch = job.level === q;
  //           const languagesMatch = job.languages.includes(q);
  //           const toolsMatch = job.tools?.includes(q) ?? false;
  //           return roleMatch || levelMatch || languagesMatch || toolsMatch;
  //         })
  //       )
  //     : jobs;
  const filterJobs = useMemo(() => {
    if (query.length > 0) {
      return jobs?.filter((job) =>
        query.every((q) => {
          const roleMatch = job.role === q;
          const levelMatch = job.level === q;
          const languagesMatch = job.languages.includes(q);
          const toolsMatch = job.tools?.includes(q) ?? false;
          return roleMatch || levelMatch || languagesMatch || toolsMatch;
        })
      );
    } else {
      return jobs;
    }
  }, [jobs, query]);

  const handleQueryClick = (value: string) => {
    if (query.includes(value)) {
      setQuery(query.filter((q) => q !== value));
    } else {
      setQuery([...query, value]);
    }
  };

  const clearQuery = () => {
    setQuery([]);
  };

  return (
    <>
      <header className="header">
        <div className="overlay" />
        {query.length !== 0 && (
          <FilterInput
            query={query}
            handleQueryClick={handleQueryClick}
            clearQuery={clearQuery}
          />
        )}
      </header>
      <main className="container">
        {filterJobs?.map((job) => (
          <JobCard
            job={job}
            key={job.id}
            handleQueryClick={handleQueryClick}
            query={query}
          />
        ))}
      </main>
    </>
  );
};
export default App;
