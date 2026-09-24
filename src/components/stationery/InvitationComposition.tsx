"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArabicCalligraphy } from "@/components/stationery/ArabicCalligraphy";
import {
  coupleLine,
  formatEventWhen,
  weddingConfig,
  type InvitationEventCopy,
} from "@/config/invitation";

const reveal = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function EventWhen({ event }: { event: InvitationEventCopy }) {
  const date = event.date.trim();
  const time = event.time.trim();
  if (!date && !time) return null;

  const together = formatEventWhen(event);
  if (date && time && together.length <= 32) {
    return <p className="stationery-date">{together}</p>;
  }

  return (
    <p className="stationery-date">
      {date ? <span className="stationery-when">{date}</span> : null}
      {time ? <span className="stationery-when">{time}</span> : null}
    </p>
  );
}

function EventBlock({
  event,
  heading,
}: {
  event: InvitationEventCopy;
  heading: "h1" | "h2";
}) {
  const titleClass =
    event.title.trim().length > 10 ? "stationery-title is-long" : "stationery-title";
  const Title = heading;

  return (
    <section className="stationery-event">
      {event.content.trim() ? (
        <p className="stationery-kicker stationery-invite">{event.content}</p>
      ) : null}
      {event.title.trim() ? <Title className={titleClass}>{event.title}</Title> : null}
      <EventWhen event={event} />
      {event.venue.trim() ? <p className="stationery-venue">{event.venue}</p> : null}
      {event.address.trim() ? <p className="stationery-address">{event.address}</p> : null}
    </section>
  );
}

export function InvitationComposition({ events }: { events: InvitationEventCopy[] }) {
  const reduce = useReducedMotion();
  const [first, ...rest] = events;

  return (
    <motion.div
      className="stationery-copy"
      initial={reduce ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduce ? 0 : 0.09,
            delayChildren: reduce ? 0 : 0.04,
          },
        },
      }}
    >
      <motion.div variants={reveal}>
        <ArabicCalligraphy />
      </motion.div>
      {weddingConfig.preface.trim() ? (
        <motion.p className="stationery-kicker" variants={reveal}>
          {weddingConfig.preface}
        </motion.p>
      ) : null}
      <motion.p className="stationery-names" variants={reveal}>
        {coupleLine()}
      </motion.p>
      {first ? (
        <motion.div className="stationery-event-wrap" variants={reveal}>
          <EventBlock event={first} heading="h1" />
        </motion.div>
      ) : null}
      {rest.map((event) => (
        <motion.div className="stationery-event-wrap" key={event.title} variants={reveal}>
          <EventBlock event={event} heading="h2" />
        </motion.div>
      ))}
    </motion.div>
  );
}
