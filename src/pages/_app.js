// import { Layout } from "~components"
// import Router from "next/router";
// import "node_modules/slick-carousel/slick/slick.css";
// import "node_modules/react-modal-video/css/modal-video.min.css";
// import "~fonts/fontawesome-5/css/all.min.css";
// import "~styled/scss/bootstrap.scss";
// import "~styled/scss/global.scss";
// import { GlobalHeaderProvider, GlobalHeaderContext } from "../context/GlobalHeaderContext";
// import { useEffect, useState } from "react";
// import Loader from "~components/Preloader";
// function MyApp({ Component, pageProps }) {

//   const [loader, setLoader] = useState(true);
//   const [fadeIn, setFadeIn] = useState(false);

//   // Initial load
//   useEffect(() => {
//     setTimeout(() => {
//       setLoader(false);
//       setTimeout(() => setFadeIn(true), 20); // slight delay for CSS transition
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   Router.onRouteChangeStart = (url) => {
//     // Some page has started loading
//     setLoader(true);
//     setFadeIn(false);

//   };

//   Router.onRouteChangeComplete = (url) => {
//     // Some page has finished loading
//     setTimeout(setLoader(false), 1000) // set state to pass to loader prop
//     setTimeout(() => setFadeIn(true), 20);
//   };
//     // Scroll-based fade-in (for elements with .scroll-fade)
//   useEffect(() => {
//     if (loader) return; // wait until main loader is gone
//     if (typeof window === "undefined") return;

//     const elements = document.querySelectorAll(".scroll-fade");
//     if (!elements.length) return;

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//             // If you only want it once, unobserve after first reveal:
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         threshold: 0.15, // 15% visible
//       }
//     );

//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, [loader]);
  
//   if (loader) {
//     return (<Loader show={loader} />)
//   }
//   return (<GlobalHeaderProvider>
//     <Layout>
//       {/* <Loader show={loader}/>
//         <Component {...pageProps} /> */}
//       <div className={`page-fade ${fadeIn ? "show" : ""}`}>
//         <Component {...pageProps} />
//       </div>
//     </Layout>
//   </GlobalHeaderProvider>)
// }

// export default MyApp

import { Layout } from "~components";
import Router from "next/router";
import "node_modules/slick-carousel/slick/slick.css";
import "node_modules/react-modal-video/css/modal-video.min.css";
import "~fonts/fontawesome-5/css/all.min.css";
import "~styled/scss/bootstrap.scss";
import "~styled/scss/global.scss";
import { GlobalHeaderProvider } from "../context/GlobalHeaderContext";
import { useEffect, useState } from "react";
import Loader from "~components/Preloader";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);

  // Initial load: show loader, then fade-in page
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);

      // wait a frame so CSS can apply initial state, then add .show
      requestAnimationFrame(() => {
        setFadeIn(true);
      });
    }, 2000); // your existing 2s preloader

    return () => clearTimeout(timer);
  }, []);

  // Handle route changes with loader + fade
  useEffect(() => {
    const handleStart = () => {
      setFadeIn(false);
      setLoader(true);
    };

    const handleComplete = () => {
      setLoader(false);

      requestAnimationFrame(() => {
        setFadeIn(true);
      });
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  // Scroll-based fade-in (for .scroll-fade elements)
  useEffect(() => {
    if (loader) return; // don’t run while loader is active
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = document.querySelectorAll(".scroll-fade");
    if (!elements.length) return;

    // If user prefers less motion, just show everything
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add("show"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            // unobserve once shown (saves work)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.15, // start animation a bit before fully in view
        rootMargin: "0px 0px -10% 0px", // trigger slightly earlier near bottom
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [loader]); // run when loader finishes / after route change

  if (loader) {
    return <Loader show={loader} />;
  }

  return (
    <GlobalHeaderProvider>
      <Layout>
        {/* whole-page fade wrapper */}
        <div className={`page-fade ${fadeIn ? "show" : ""}`}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </GlobalHeaderProvider>
  );
}

export default MyApp;
