import { useEffect, useMemo, useState } from "react";
import "./LoaderIntro.css";

export default function LoaderIntro({ onFinish }) {
  const fullText = useMemo(() => "WATECH", []);
  const subtitle = "MARINE NAVIGATION & OFFSHORE TECHNICAL SUPPORT";

  const [typed, setTyped] = useState("");
  const [percent, setPercent] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const resetScroll = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = "0";
    document.body.style.width = "100%";

    return () => {
      resetScroll();
    };
  }, []);

  useEffect(() => {
    const TOTAL = 5000;
    const FADE_DURATION = 1200;
    const PAUSE_AFTER_TYPING = 1800;
    const typingDuration = TOTAL - PAUSE_AFTER_TYPING - FADE_DURATION;
    const intervalMs = Math.max(120, Math.round(typingDuration / fullText.length));

    let i = 0;
    let typingTimer = 0;
    let fadeTimer = 0;
    let finishTimer = 0;

    typingTimer = window.setInterval(() => {
      i += 1;
      const nextText = fullText.slice(0, i);
      setTyped(nextText);
      const progress = Math.min(100, Math.round((i / fullText.length) * 100));
      setPercent(progress);

      if (i >= fullText.length) {
        window.clearInterval(typingTimer);
        setPercent(100);
      }
    }, intervalMs);

    fadeTimer = window.setTimeout(() => {
      setFade(true);
    }, TOTAL - FADE_DURATION);

    finishTimer = window.setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      onFinish?.();
    }, TOTAL);

    return () => {
      window.clearInterval(typingTimer);
      window.clearTimeout(fadeTimer);
      window.clearTimeout(finishTimer);
    };
  }, [fullText, onFinish]);

  return (
    <div className={`loaderIntro ${fade ? "loaderIntro--fade" : ""}`}>
      <div className="loaderIntro__inner">
        <div className="loaderIntro__title">{typed}</div>
        <div className="loaderIntro__subtitle">{subtitle}</div>
      </div>

      <div className="loaderIntro__barWrap">
        <div className="loaderIntro__barTrack">
          <div
            className="loaderIntro__barFill"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="loaderIntro__percent">{percent}%</div>
      </div>
    </div>
  );
}
