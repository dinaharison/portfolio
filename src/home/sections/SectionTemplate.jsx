import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function SectionTemplate({ id, component: Component }) {
  const { state } = useLocation();
  const { targetId } = state || {};

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView();
    }
  }, [targetId]);

  return (
    <section id={id} className="relative w-full min-h-screen md:min-h-[89vh]">
      <Component></Component>
    </section>
  );
}

export default SectionTemplate;
