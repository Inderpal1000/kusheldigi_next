// "use client"
// import { useEffect, useState, useRef } from "react";
// import "./Bigbanner8.css";

// const Result1 = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const descriptionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold:0.5 }
//     );

//     if (descriptionRef.current) {
//       observer.observe(descriptionRef.current);
//     }

//     return () => {
//       if (descriptionRef.current) {
//         observer.unobserve(descriptionRef.current);
//       }
//     };
//   }, []);

//   return (
//   <section className="mmcainBcoSe">
//      <div className="mainBcoSe">
//      <div className="containCom">
        
//         <div className="bcomcImd">
//         <p className="smallcomtext">
//         we are experts in 
//         </p>
//         <div className="logoImgcbom">
//             <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png" alt="" />
//         </div>
    
//         </div>
     
//       <p ref={descriptionRef} className={`descriptionCon3 ${!isVisible ? "visible" : ""}`}>
//       As a certified bigcommerce partner, Kushel Digi Solutions has a successful proven track record in offering modern BigCommerce solutions to grow your business.Our experts work to make sure that your online store is not  just functional but optimized for success.
//       </p>
//     </div>
//     <div className="maSecImgaec">
//         <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743491265/6777948_preview-e1602745344619_d13gsu.webp" alt="" />
//     </div>
//    </div>
//   </section>
//   );
// };

// export default Result1;

// "use client"
// import { useEffect, useState, useRef } from "react";
// import "./Bigbanner8.css";

// const Result1 = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const descriptionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold:0.5 }
//     );

//     if (descriptionRef.current) {
//       observer.observe(descriptionRef.current);
//     }

//     return () => {
//       if (descriptionRef.current) {
//         observer.unobserve(descriptionRef.current);
//       }
//     };
//   }, []);

//   return (
//   <section className="mmcainBcoSe">
//      <div className="mainBcoSe">
//      <div className="containCom">
        
//         <div className="bcomcImd">
//         <p className="smallcomtext">
//         we are experts in 
//         </p>
//         <div className="logoImgcbom">
//             <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png" alt="" />
//         </div>
    
//         </div>
     
//       <p ref={descriptionRef} className={`descriptionCon3 ${isVisible ? "visible" : ""}`}>
//       As a certified bigcommerce partner, Kushel Digi Solutions has a successful proven track record in offering modern BigCommerce solutions to grow your business.Our experts work to make sure that your online store is not  just functional but optimized for success.
//       </p>
//     </div>
//     <div className="maSecImgaec">
//         <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743491265/6777948_preview-e1602745344619_d13gsu.webp" alt="" />
//     </div>
//    </div>
//   </section>
//   );
// };

// export default Result1;




"use client";
import { useEffect, useState, useRef } from "react";
import "./Bigbanner8.css";

const Result1 = ({weExpert}) => {
  const [scrollRatio, setScrollRatio] = useState(0);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (descriptionRef.current) {
        const rect = descriptionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;

        // Define start and end points for transition effect
        const start = elementTop - windowHeight;
        const end = elementTop + elementHeight;

        let ratio = (scrollTop - start) / (end - start);
        ratio = Math.max(0, Math.min(1, ratio));

        setScrollRatio(ratio);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="mmcainBcoSe">
      <div className="mainBcoSe">
        <div className="containCom">
          <div className="bcomcImd">
            <p className="smallcomtext">we are experts in</p>
            <div className="logoImgcbom">
              <img
                src={weExpert?.logo}
                alt=""
              />
            </div>
          </div>

          {/* Dynamic color transition */}
          <p
            ref={descriptionRef}
            className="descriptionCon3 secondary-heading"  
            style={{
              color: `rgb(${Math.floor(0 + 128 * scrollRatio)}, ${Math.floor(
                0 + 128 * scrollRatio
              )}, ${Math.floor(0 + 128 * scrollRatio)})`,
              transition: "color 0.3s ease-in-out",
            }}
          >
            As a certified BigCommerce partner, Kushel Digi Solutions has a
            successful proven track record in offering modern BigCommerce
            solutions to grow your business. Our experts work to make sure that
            your online store is not just functional but optimized for success.
          </p>
        </div>
        <div className="maSecImgaec">
          <img
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743675292/agency-screenshots-jpg_w0uszs.webp"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Result1;