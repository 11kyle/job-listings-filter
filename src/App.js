import { useCallback, useEffect, useState } from 'react';
import { Card, Title, Info, Logo, Company } from './components/card';
import { Slug, RemoveSlug } from './components/slug';
import { Badge } from './components/badge';

import jobOpenings from './utils/data.json';
import { Filter } from './components/filter';

// ADD THIS TO LESSONS LEARNED //
// *************************** //
// Loading images from a json file need to be stored in the public directory
// The syntax for the json file is 
// "logo": "./images/photosnap.svg",
// You don't need to change directory out of the folder that the json is located

function App() {
  const [jobs, setJobs] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [numberOfKeywords, setNumberOfKeywords] = useState(0);

  const filterJobs = useCallback(
    () => {
      if (keywords.length < 1) {
        setJobs([...jobOpenings]);
      } else {
        if (keywords.length < numberOfKeywords) {
          for (let key in keywords) {
            setJobs([...jobOpenings.filter((job) => job.role === keywords[key] || job.level === keywords[key] || job.languages.includes(keywords[key]) || job.tools.includes(keywords[key]))]);
          }
        } else {
          for (let key in keywords) {
            setJobs([...jobs.filter((job) => job.role === keywords[key] || job.level === keywords[key] || job.languages.includes(keywords[key]) || job.tools.includes(keywords[key]))]);
          }
        }
      }
      setNumberOfKeywords(keywords.length);
    },
    [keywords, jobs, numberOfKeywords],
  );

  useEffect(() => {
    filterJobs();
  }, [keywords.length, filterJobs])

  // Add new keyword to filter
  const addToFilter = (newKeyword) => {
    // Check to see if array includes newKeyword
    if (!keywords.includes(newKeyword)) {
      setKeywords([...keywords, newKeyword]);
    }
  }

  // Remove keyword from filter
  const removeFromFilter = (keyword) => {
    setKeywords([...keywords.filter((item) => item !== keyword)]);
  }

  // Clear filter
  const clearFilter = () => {
    setKeywords([]);
    setJobs(jobOpenings);
  }

  useEffect(() => {
    setJobs(jobOpenings);
  }, []);

  return (
    <div>
      <header>
        <div className="bg-customDesaturatedCyan bg-mobile md:bg-desktop bg-cover bg-no-repeat bg-center w-full min-h-[156px]"></div>
      </header>
      <main className="lg:mx-auto mx-2 -mt-7 max-w-[1000px]">

        <Filter handleClick={() => clearFilter()}>
          {keywords.map((keyword) => (
            <RemoveSlug key={keyword} handleClick={() => removeFromFilter(keyword)}>{keyword}</RemoveSlug>
          ))}
        </Filter>

        {jobs && jobs.map((job) => {
          const {id, company, logo, featured, position, role, level, postedAt, contract, location, languages, tools} = job;

          return (
            <Card key={id} isNew={job.new}> 
              <Logo src={logo} alt="company logo" />
              <div>
                <div className="flex flex-row items-center gap-x-2">
                  <Company>{company}</Company>
                  {job.new && <Badge isNew={job.new}>New!</Badge>}
                  {featured && <Badge isFeatured={featured}>Featured</Badge>}
                </div>
                <Title>{position}</Title>
                <div className="flex flex-row gap-x-2">
                  <Info>{postedAt}</Info><Info>&#8226;</Info><Info>{contract}</Info><Info>&#8226;</Info><Info>{location}</Info>
                </div>
              </div>
              <div className="flex flex-row gap-2 flex-wrap border-t border-slate-300 md:border-none py-4 md:py-0 mt-4 md:mt-0 md:ml-auto">
                <Slug key={role} handleClick={() => addToFilter(role)}>{role}</Slug>
                <Slug key={level} handleClick={() => addToFilter(level)}>{level}</Slug>
                {languages.map((language) => (
                  <Slug key={language} handleClick={() => addToFilter(language)}>{language}</Slug>
                ))}
                {tools.map((tool) => (
                  <Slug key={tool} handleClick={() => addToFilter(tool)}>{tool}</Slug>
                ))}
              </div>
            </Card>
          )
        })}
      </main>
    </div>
  );
}

export default App;
