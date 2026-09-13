import React, { useEffect, useMemo, useState } from "react";
import {
  Phone,
  Volume2,
  VolumeX,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";

const MAROON = "#8e2f4e";

const WEDDING_TARGET = new Date(
  "2026-11-26T19:30:00+05:30"
);

const COUPLE = {
  groom: {
    name: "Aryan kapoor",
    parents:
      "S/o Mr. Rajesh Kapoor & Mrs. Meena Kapoor",
    text:
      "A gentle soul with a poet's heart and an architect's mind — Aryan finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.",
    image: "/assets/groom-frame.jpg",
  },

  bride: {
    name: "Aarna Nair",
    parents:
      "D/o Mr. Suresh Nair & Mrs. Lakshmi Nair",
    text:
      "A free spirit wrapped in grace — Aarna moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.",
    image: "/assets/bride-frame.jpg",
  },
};

const WISHES = [
  {
    name: "Priya",
    text:
      "Congratulations on finding your forever! May your marriage be filled with love that grows stronger each day, laughter that never fades, dreams that come true, and memories you will cherish forever.",
  },
  {
    name: "Rahul",
    text:
      "May your marriage be filled with endless love, shared dreams, warm laughter, and beautiful adventures. Wishing you both a wonderful life together, surrounded by happiness, peace, and love.",
  },
  {
    name: "Samartha",
    text:
      "Wishing you both a lifetime filled with love, laughter, and countless beautiful moments together.",
  },
];

const EVENTS = [
  {
    day: "Thursday",
    date: "26 November 2026",
    name: "Haldi",
    time: "7:30 pm",
  },
  {
    day: "Friday",
    date: "27 November 2026",
    name: "Wedding Ceremony",
    time: "11:00 am",
  },
];

function countdownFor(target) {
  const diff = Math.max(
    0,
    target.getTime() - Date.now()
  );

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(
      (diff % 86400000) / 3600000
    ),
    mins: Math.floor(
      (diff % 3600000) / 60000
    ),
    secs: Math.floor(
      (diff % 60000) / 1000
    ),
  };
}

function useCountdown(target) {
  const [time, setTime] = useState(() =>
    countdownFor(target)
  );

  useEffect(() => {
    const id = setInterval(() => {
      setTime(countdownFor(target));
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  return time;
}

/* =====================================================
   SCROLL REVEAL
   Elements fade/slide in when they enter the viewport and
   fade/slide out again when they leave it.
===================================================== */
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    if (!elements.length) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

/* =====================================================
   ORNAMENT
===================================================== */

function Ornament() {
  return (
    <div className="ornament">
      <span />
      <b>❧</b>
      <i>◦</i>
      <b>❧</b>
      <span />
    </div>
  );
}

/* =====================================================
   TAJ
===================================================== */

function TajWatermark() {
  return (
    <svg
      className="taj-watermark"
      viewBox="0 0 800 400"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect
          x="86"
          y="190"
          width="20"
          height="210"
        />

        <rect
          x="694"
          y="190"
          width="20"
          height="210"
        />

        <path d="M120 400V230h100v-30h65v30h30v-80h30v-35h40v35h30v80h30v-30h65v30h100v170z" />

        <path d="M286 400V218q0-94 114-124 114 30 114 124v182z" />

        <path d="M335 400V285q0-58 65-76 65 18 65 76v115z" />

        <circle
          cx="400"
          cy="82"
          r="17"
        />

        <rect
          x="395"
          y="40"
          width="10"
          height="42"
        />
      </g>
    </svg>
  );
}

/* =====================================================
   LANTERN
===================================================== */

function Lantern({ side }) {
  return (
    <div
      className={`lantern lantern-${side}`}
      aria-hidden="true"
    >
      <div className="lantern-chain" />
      <div className="lantern-cap" />

      <div className="lantern-body">
        <span />
        <span />
        <span />
      </div>

      <div className="lantern-base" />
      <div className="lantern-glow" />
    </div>
  );
}

/* =====================================================
   LOTUS
===================================================== */

function LotusCorner({ side, bottom = false }) {
  return (
    <div
      className={`lotus-corner ${side} ${
        bottom ? "bottom" : ""
      }`}
      aria-hidden="true"
    >
      <div className="lotus-flower">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>

      <div className="lotus-leaf" />
    </div>
  );
}

/* =====================================================
   COUNTDOWN
===================================================== */

function CountdownPair({ time }) {
  return (
    <div className="countdown-pair">
      <div className="count-box">
        <strong>
          {String(time.days).padStart(2, "0")}
        </strong>
        <span>Days</span>
      </div>

      <div className="count-box">
        <strong>
          {String(time.hours).padStart(2, "0")}
        </strong>
        <span>Hours</span>
      </div>

      <div className="count-box">
        <strong>
          {String(time.mins).padStart(2, "0")}
        </strong>
        <span>Mins</span>
      </div>

      <div className="count-box">
        <strong>
          {String(time.secs).padStart(2, "0")}
        </strong>
        <span>Secs</span>
      </div>
    </div>
  );
}

/* =====================================================
   FINAL COUNTDOWN
===================================================== */

function FinalCountdown({ time }) {
  return (
    <section
      className="final-countdown"
      id="gallery"
    >
      <div className="final-title" data-reveal="up">
        "Awaiting the Big Day with Open Hearts"
      </div>

      <div className="final-layout" data-reveal="scale">
        <div className="final-side">
          <div>
            <strong>
              {String(time.days).padStart(2, "0")}
            </strong>
            <span>Days</span>
          </div>

          <div>
            <strong>
              {String(time.mins).padStart(2, "0")}
            </strong>
            <span>Mins</span>
          </div>
        </div>

        <div className="figure-stage-final">
          <img
            src="/assets/couple-reference.png"
            className="couple-figure"
            alt="Bride and groom"
          />

          <div className="figure-shadow" />
        </div>

        <div className="final-side">
          <div>
            <strong>
              {String(time.hours).padStart(2, "0")}
            </strong>
            <span>Hours</span>
          </div>

          <div>
            <strong>
              {String(time.secs).padStart(2, "0")}
            </strong>
            <span>Secs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   MAIN PAGE
===================================================== */

export default function WeddingHomepage() {
  const time = useCountdown(WEDDING_TARGET);
  useScrollReveal();

  const [loading, setLoading] =
    useState(true);

  const [musicOn, setMusicOn] =
    useState(false);

  const [wishIndex, setWishIndex] =
    useState(0);

  const [wishDirection, setWishDirection] =
    useState("next");

  const [eventIndex, setEventIndex] =
    useState(0);

  const [eventDirection, setEventDirection] =
    useState("next");

  const [form, setForm] = useState({
    name: "",
    wish: "",
  });

  const [submitted, setSubmitted] =
    useState(false);

  const [active, setActive] =
    useState("home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  /* =====================================================
     NAVIGATION OBSERVER
  ===================================================== */

  useEffect(() => {
    const ids = [
      "home",
      "story",
      "wishes",
      "events",
      "gallery",
    ];

    const handleScroll = () => {
      let current = "home";

      ids.forEach((id) => {
        const section =
          document.getElementById(id);

        if (!section) return;

        const rect =
          section.getBoundingClientRect();

        if (
          rect.top <=
            window.innerHeight * 0.45 &&
          rect.bottom >=
            window.innerHeight * 0.25
        ) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const currentWish = useMemo(
    () => WISHES[wishIndex],
    [wishIndex]
  );

  const currentEvent = useMemo(
    () => EVENTS[eventIndex],
    [eventIndex]
  );

  function go(id) {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  function openMaps() {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(
          "Fiestaa Resort, Bengaluru"
        ),
      "_blank",
      "noopener,noreferrer"
    );
  }

  function changeWish(direction) {
    setWishDirection(direction);

    setWishIndex((index) => {
      if (direction === "next") {
        return (
          (index + 1) %
          WISHES.length
        );
      }

      return (
        (index - 1 + WISHES.length) %
        WISHES.length
      );
    });
  }

  function changeEvent(direction) {
    setEventDirection(direction);

    setEventIndex((index) => {
      if (direction === "next") {
        return (
          (index + 1) %
          EVENTS.length
        );
      }

      return (
        (index - 1 + EVENTS.length) %
        EVENTS.length
      );
    });
  }

  function submitWish(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.wish.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setForm({
      name: "",
      wish: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  }

  return (
    <div
      className={`wedding-page ${
        loading
          ? "is-loading"
          : "is-ready"
      }`}
    >
      {/* =================================================
          LOADER
      ================================================= */}

      <div
        className={`page-loader ${
          loading
            ? ""
            : "page-loader-hide"
        }`}
      >
        <div className="loader-flower">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
          <b />
        </div>
      </div>

      {/* =================================================
          FLOATING BUTTONS
      ================================================= */}

      <div className="floating-actions">
        <a
          href="tel:+910000000000"
          aria-label="Call"
        >
          <Phone size={20} />
        </a>

        <button
          type="button"
          onClick={() =>
            setMusicOn((value) => !value)
          }
        >
          {musicOn ? (
            <Volume2 size={20} />
          ) : (
            <VolumeX size={20} />
          )}
        </button>
      </div>

      {/* =================================================
          NAV
      ================================================= */}

      <nav className="top-nav">
        <div className="nav-inner">
          <button
            className={
              active === "home"
                ? "active"
                : ""
            }
            onClick={() =>
              go("home")
            }
          >
            Home
          </button>

          <button
            className={
              active === "story"
                ? "active"
                : ""
            }
            onClick={() =>
              go("story")
            }
          >
            Story
          </button>

          <button
            className={
              active === "gallery"
                ? "active"
                : ""
            }
            onClick={() =>
              go("gallery")
            }
          >
            Gallery
          </button>
        </div>
      </nav>

      <main>

        {/* =================================================
            HERO
        ================================================= */}

        <section
          className="hero"
          id="home"
        >
          <LotusCorner side="left" />
          <LotusCorner side="right" />

          <LotusCorner
            side="left"
            bottom
          />

          <LotusCorner
            side="right"
            bottom
          />

          <Lantern side="left" />
          <Lantern side="right" />

          <div className="hero-panel">
            <div className="hero-script">
              Save the Date
            </div>

            <Ornament />

            <h1>
              Aryan kapoor &amp; Aarna Nair
            </h1>

            <Ornament />

            <div className="date-row">
              <span>NOV</span>

              <b>
                26 &amp; 27
              </b>

              <span>2026</span>
            </div>

            <p className="venue">
              Fiestaa Resort
            </p>

            <button
              className="map-button"
              onClick={openMaps}
            >
              <MapPin size={19} />
              Open In Maps
            </button>

            <div className="hero-taj">
              <TajWatermark />
            </div>

            <div className="hero-figure-stage">
              <img
                src="/assets/couple-reference.png"
                className="couple-figure hero-couple"
                alt="Bride and groom"
              />

              <div className="figure-shadow" />
            </div>
          </div>
        </section>

        {/* =================================================
            COUNTDOWN
        ================================================= */}

        <section className="countdown-section">
          <div className="section-script" data-reveal="up">
            "Officially Husband and Wife in"
          </div>

          <div className="countdown-centered" data-reveal="scale">
            <CountdownPair time={time} />

            <div className="countdown-figure">
              <img
                src="/assets/couple-reference.png"
                className="couple-figure"
                alt=""
              />

              <div className="figure-shadow" />
            </div>
          </div>
        </section>

        {/* =================================================
            STORY
        ================================================= */}

        <section
          className="story-section"
          id="story"
        >
          <div className="story-card bride-row">
            <div className="profile-photo" data-reveal="left">
              <img
                src={COUPLE.bride.image}
                alt="Aarna Nair"
              />
            </div>

            <div className="profile-copy" data-reveal="right">
              <h2>Aarna Nair</h2>

              <h3>
                {COUPLE.bride.parents}
              </h3>

              <p>
                {COUPLE.bride.text}
              </p>
            </div>
          </div>

          <div className="story-card groom-row">
            <div className="profile-copy" data-reveal="left">
              <h2>Aryan kapoor</h2>

              <h3>
                {COUPLE.groom.parents}
              </h3>

              <p>
                {COUPLE.groom.text}
              </p>
            </div>

            <div className="profile-photo" data-reveal="right">
              <img
                src={COUPLE.groom.image}
                alt="Aryan Kapoor"
              />
            </div>
          </div>
        </section>

        {/* =================================================
            WISHES
        ================================================= */}

        <section
          className="wishes-section"
          id="wishes"
        >
          {/* LEFT TEXT — NOW ALWAYS VISIBLE */}
          <div className="wishes-title" data-reveal="left">
            <span>
              Wishes for
            </span>

            <span>
              the couple
            </span>
          </div>

          {/* RIGHT CARD */}
          <div className="wish-area" data-reveal="right">

            <div
              className={`wish-card wish-${wishDirection}`}
              key={wishIndex}
            >
              <div className="wish-content">
                <h2>
                  {currentWish.name}
                </h2>

                <Ornament />

                <p>
                  {currentWish.text}
                </p>
              </div>
            </div>

            <div className="wish-controls">
              <button
                onClick={() =>
                  changeWish("prev")
                }
                aria-label="Previous wish"
              >
                <ChevronLeft
                  size={32}
                />
              </button>

              <span>
                {wishIndex + 1} of{" "}
                {WISHES.length}
              </span>

              <button
                onClick={() =>
                  changeWish("next")
                }
                aria-label="Next wish"
              >
                <ChevronRight
                  size={32}
                />
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            WISH FORM
        ================================================= */}

        <section className="wish-form-section">
          <div className="form-decoration form-decoration-left" />
          <div className="form-decoration form-decoration-right" />

          <form
            className="wish-form"
            data-reveal="scale"
            onSubmit={submitWish}
          >
            <h2>
              Send your wishes
            </h2>

            <Ornament />

            <input
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              placeholder="Your Name"
              required
            />

            <div className="textarea-wrap">
              <textarea
                value={form.wish}
                onChange={(e) =>
                  setForm({
                    ...form,
                    wish: e.target.value,
                  })
                }
                placeholder="Your Wishes"
                rows={5}
                required
              />

              <span>✦</span>
            </div>

            <button
              className="submit-button"
              type="submit"
            >
              Submit
              <Send size={17} />
            </button>

            {submitted && (
              <p className="success">
                Your wishes were sent. ♥
              </p>
            )}
          </form>
        </section>

        {/* =================================================
            EVENTS
        ================================================= */}

        <section
          className="events-section"
          id="events"
        >
          {/* LEFT TEXT — NOW ALWAYS VISIBLE */}
          <div className="event-left" data-reveal="left">
            <h2>
              Join the celebration on
            </h2>

            <div className="event-dot" />

            <div className="event-arrows">
              <button
                onClick={() =>
                  changeEvent("prev")
                }
                aria-label="Previous event"
              >
                <ChevronLeft
                  size={32}
                />
              </button>

              <button
                onClick={() =>
                  changeEvent("next")
                }
                aria-label="Next event"
              >
                <ChevronRight
                  size={32}
                />
              </button>
            </div>
          </div>

          {/* RIGHT EVENT CARD */}
          <div className="event-card-wrap" data-reveal="right">

            {/* FLORAL LINE ART */}
            <div className="floral-corner floral-tl">
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
            </div>

            <div className="floral-corner floral-tr">
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
            </div>

            <div className="floral-corner floral-bl">
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
            </div>

            <div className="floral-corner floral-br">
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
              <span>❀</span>
              <span>❧</span>
            </div>

            <TajWatermark />

            <div
              className={`event-card event-${eventDirection}`}
              key={eventIndex}
            >
              <div className="event-day">
                {currentEvent.day}
              </div>

              <h2>
                {currentEvent.date}
              </h2>

              <Ornament />

              <div className="event-name-time">
                <span>
                  {currentEvent.name}
                </span>

                <b>
                  {currentEvent.time}
                </b>
              </div>

              <p className="location-label">
                Location :
              </p>

              <p className="location-value">
                Fiestaa Resort
              </p>

              <button
                className="map-button"
                onClick={openMaps}
              >
                <MapPin size={18} />
                Open In Maps
              </button>
            </div>
          </div>
        </section>

        {/* =================================================
            FINAL
        ================================================= */}

        <FinalCountdown time={time} />

        {/* =================================================
            FOOTER
        ================================================= */}

        <footer className="footer" data-reveal="up">

  {/* MAIN BRAND AREA */}
  <div className="footer-brand">

    <p className="footer-main-text">
      Wedding Invitation website by{" "}
      <b>INVITATIONNATION</b>
    </p>

    {/* PURPLE LOGO */}
    <div className="footer-logo">
  <a
  href="https://invitationnation.in/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Invitation Nation"
>
  <img
    src="/assets/invitation-logo.svg"
    alt="Invitation Nation"
  />
</a>
</div>

  </div>


  {/* LOWER FOOTER */}
  <div className="footer-bottom">

    <div className="footer-links">

      <button type="button">
        <span className="footer-icon">●</span>
        Report a Problem
      </button>

      <button type="button">
        <span className="footer-icon">✉</span>
        Contact Support
      </button>

      <button type="button">
        <span className="footer-icon">◈</span>
        Privacy Policy
      </button>

    </div>


    <div className="powered">
      POWERED BY{" "}
      <b>INVITATION NATION</b>
    </div>


    <div className="footer-line" />


    <div className="copyright">
      © 2026 Invitation Nation. All rights reserved.
      Crafted with care for your forever.
    </div>

  </div>

</footer>
      </main>
    </div>
  );
}