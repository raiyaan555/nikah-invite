"use client";

import { wedding } from "@/config/wedding";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WeddingDate() {
  const { month, year, days } = wedding.date.display;

  return (
    <Section id="wedding-date">
      <SectionHeading label={wedding.copy.saveTheDate} />
      <div className="date-block">
        <p className="date-month">{month}</p>
        <p className="date-year">{year}</p>
        <span className="date-rule" />
        <div className="date-pair">
          {days.map((item, index) => (
            <div className="date-pair-day" key={item.day}>
              {index > 0 ? (
                <span className="date-pair-join" aria-hidden="true">
                  &
                </span>
              ) : null}
              <div className="date-pair-col">
                <p className="date-weekday">{item.weekday}</p>
                <p className="date-day">{item.day}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
