import React from "react";
import ServiceCard from "./ServiceCard";

const services = [
  { title: "web design",  details: "Elegant, user-focused designs that tell your brand’s story." },
  { title: "web develop", details: "Seamless, responsive websites built for performance." },
  { title: "adds-on",     details: "Smart details and features that elevate every project." },
];

export default function Services() {
  return (
    <section id="service" className="section-container services">
      {services.map((s, i) => (
        <ServiceCard key={i} title={s.title} details={s.details} />
      ))}
    </section>
  );
}
