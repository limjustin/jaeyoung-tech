import React from 'react';
import SectionHeader from '../section-header';
import Image from '../image';
import './style.scss';

function TimeStampSection({ title, timestamps }) {
  if (!timestamps || timestamps.length < 2) return null;
  return (
    <div className="timestamp-section">
      <SectionHeader title={title} />
      <div className="body">
        {timestamps.map((timestamp, index) =>
          index === 0 ? null : (
            <div className="timestamp" key={index}>
              <div className="job-wrapper">
                <div className="job-thumbnail">
                  <Image className="job-thumbnail" src={timestamp.activityDescription} alt="experience_logo"/>
                </div>
                <ul className="job-description">
                  <div className="job">
                    <div className="job-title">{timestamp.job}</div>
                    <div className="job-date">{timestamp.date}</div>
                  </div>
                    {timestamp.jobDescriptions.map((jobDescription, index) => {
                      const splitIndex = jobDescription.indexOf(':');
                      if (splitIndex !== -1) {
                        const beforeColon = jobDescription.slice(0, splitIndex + 1);
                        const afterColon = jobDescription.slice(splitIndex + 1);
                        return (
                          <li className="description" key={index}>
                            <strong>{beforeColon}</strong>
                            {afterColon}
                          </li>
                        );
                      }
                      return (
                        <p className="description" key={index}>
                          {jobDescription}
                        </p>
                      );
                    })}
                </ul>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default TimeStampSection;
