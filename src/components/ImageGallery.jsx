import { useState } from "react";
import ImageModal from "./ImageModal";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img13 from "../assets/img13.png";
import img14 from "../assets/img14.png";
import img15 from "../assets/img15.png";
import img16 from "../assets/img16.png";

import img18 from "../assets/img18.png";
import img19 from "../assets/img19.png";
import img20 from "../assets/img20.png";
import img21 from "../assets/img21.png";
import img22 from "../assets/img22.png";
import img23 from "../assets/img23.png";
import img24 from "../assets/img24.png";
import img25 from "../assets/img25.png";
import img26 from "../assets/img26.png";
import img27 from "../assets/img27.png";
import img28 from "../assets/img28.png";
import img29 from "../assets/img29.png";

import img30 from "../assets/img30.png";
import img31 from "../assets/img31.png";
import img32 from "../assets/img32.png";
import img33 from "../assets/img33.png";
import img34 from "../assets/img34.png";
import img35 from "../assets/img35.png";
import img36 from "../assets/img36.png";
import img37 from "../assets/img37.png";
import img38 from "../assets/img38.png";
import img39 from "../assets/img39.png";
import img40 from "../assets/img40.png";
import img41 from "../assets/img41.png";
import img42 from "../assets/img42.png";
import img43 from "../assets/img43.png";
import img44 from "../assets/img44.png";
import img45 from "../assets/img45.png";
import img46 from "../assets/img46.png";
import img47 from "../assets/img47.png";
import img48 from "../assets/img48.png";
import img49 from "../assets/img49.png";
import img50 from "../assets/img50.png";
import img51 from "../assets/img51.png";
import img52 from "../assets/img52.png";
import img53 from "../assets/img53.png";
import img54 from "../assets/img54.png";
import img55 from "../assets/img55.png";
import img56 from "../assets/img56.png";
import img57 from "../assets/img57.png";
import img58 from "../assets/img58.png";
import img59 from "../assets/img59.png";
import img60 from "../assets/img60.png";
import img61 from "../assets/img61.png";
import img62 from "../assets/img62.png";
import img63 from "../assets/img63.png";
import img64 from "../assets/img64.png";
import img65 from "../assets/img65.png";

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
  {
    src: img1,
    description:
      "Wear Red Day reminds us that every heartbeat matters. Your support helps us provide life-saving cardiac care for children in need."
  },
  {
    src: img2,
    description:
      "Winter weather updates ensure our families stay safe while accessing critical pediatric services during severe conditions."
  },
  {
    src: img3,
    description:
      "Our dedicated caregivers work tirelessly to bring comfort, healing, and hope to every child who walks through our doors."
  },
  {
    src: img4,
    description:
      "Community health initiatives allow us to extend pediatric care beyond hospital walls and into neighborhoods."
  },
  {
    src: img5,
    description:
      "Through donor generosity, we continue expanding specialized treatment programs for children facing complex illnesses."
  },
  {
    src: img7,
    description:
      "Family-centered care ensures parents and guardians remain active partners in their child’s healing journey."
  },
  {
    src: img8,
    description:
      "Every smile in our halls represents resilience, courage, and the power of compassionate healthcare."
  },
  {
    src: img9,
    description:
      "Preventative screenings and early diagnosis programs help children live healthier, brighter futures."
  },
  {
    src: img10,
    description:
      "Our pediatric specialists collaborate daily to deliver advanced treatments tailored to every child’s needs."
  },
  {
    src: img11,
    description:
      "Volunteer programs bring joy, laughter, and comfort to patients during their hospital stay."
  },
  {
    src: img12,
    description:
      "Innovative medical technology helps us improve recovery outcomes for critically ill children."
  },
  {
    src: img13,
    description:
      "Mental health support services ensure children receive holistic care for both body and mind."
  },
  {
    src: img14,
    description:
      "From emergency services to long-term therapy, we are here for families every step of the way."
  },
  {
    src: img15,
    description:
      "Your donations directly fund life-saving treatments, equipment upgrades, and patient support programs."
  },
  {
    src: img16,
    description:
      "Specialized pediatric units provide compassionate care in safe, child-friendly environments."
  },
  {
    src: img18,
    description:
      "Community partnerships strengthen our mission to make quality pediatric care accessible to all."
  },
  {
    src: img19,
    description:
      "Awareness campaigns empower families with knowledge about childhood health and prevention."
  },
  {
    src: img20,
    description:
      "Behind every success story is a team committed to excellence in pediatric medicine."
  },
  {
    src: img21,
    description:
      "Fundraising events help us sustain essential programs that serve thousands of children annually."
  },
  {
    src: img22,
    description:
      "Child life specialists create comforting experiences that ease fear and promote healing."
  },
  {
    src: img23,
    description:
      "State-of-the-art facilities allow us to deliver world-class pediatric treatment close to home."
  },
  {
    src: img24,
    description:
      "Our outreach clinics provide vital healthcare services to underserved communities."
  },
  {
    src: img25,
    description:
      "Every contribution helps us invest in research that advances pediatric medicine."
  },
  {
    src: img26,
    description:
      "We celebrate the bravery of every child who inspires us with their strength and determination."
  },
  {
    src: img27,
    description:
      "Educational workshops equip families with tools to manage long-term pediatric conditions."
  },
  {
    src: img28,
    description:
      "Seasonal donation drives ensure families receive support during challenging times."
  },
  {
    src: img29,
    description:
      "Our mission is rooted in compassion, innovation, and unwavering dedication to children."
  },
  {
    src: img30,
    description:
      "Advanced neonatal care gives newborns the strongest possible start in life."
  },
  {
    src: img31,
    description:
      "Rehabilitation programs help children regain strength, mobility, and independence."
  },
  {
    src: img32,
    description:
      "Support groups connect families facing similar medical journeys, building community and resilience."
  },
  {
    src: img33,
    description:
      "Emergency pediatric teams are ready 24/7 to provide immediate, life-saving interventions."
  },
  {
    src: img34,
    description:
      "Nutrition and wellness programs promote healthy growth and development."
  },
  {
    src: img35,
    description:
      "Your generosity allows us to expand access to specialized pediatric surgeries."
  },
  {
    src: img36,
    description:
      "Together, we are shaping a future where every child receives exceptional healthcare."
  },
  {
    src: img37,
    description:
      "Innovative therapies and research breakthroughs drive better outcomes for young patients."
  },
  {
    src: img38,
    description:
      "Compassionate nurses provide comfort, reassurance, and expert care around the clock."
  },
  {
    src: img39,
    description:
      "Community donors make it possible to provide financial assistance to families in need."
  },
  {
    src: img40,
    description:
      "Special events celebrate milestones and honor the strength of our pediatric patients."
  },
  {
    src: img41,
    description:
      "Telehealth services connect families with pediatric experts from the comfort of home."
  },
  {
    src: img42,
    description:
      "Dedicated research teams work tirelessly to advance treatments for rare childhood conditions."
  },
  {
    src: img43,
    description:
      "Family resource centers offer guidance, support, and practical assistance during hospital stays."
  },
  {
    src: img44,
    description:
      "Child-friendly spaces are designed to reduce stress and promote emotional well-being."
  },
  {
    src: img45,
    description:
      "Our hospital thrives because of community support and shared commitment to children’s health."
  },
  {
    src: img46,
    description:
      "Advanced diagnostic tools allow for faster, more accurate pediatric evaluations."
  },
  {
    src: img47,
    description:
      "We honor the courage of our patients and the dedication of those who care for them."
  },
  {
    src: img48,
    description:
      "Specialized therapy programs help children overcome developmental challenges."
  },
  {
    src: img49,
    description:
      "Each donation brings us closer to transforming pediatric healthcare for future generations."
  },
  {
    src: img50,
    description:
      "Community volunteers play an essential role in supporting our mission."
  },
  {
    src: img51,
    description:
      "Pediatric emergency services ensure children receive immediate expert care."
  },
  {
    src: img52,
    description:
      "Funded research initiatives pave the way for groundbreaking pediatric treatments."
  },
  {
    src: img53,
    description:
      "We are committed to delivering compassionate, high-quality care to every child."
  },
  {
    src: img54,
    description:
      "Family engagement programs strengthen the support system around each young patient."
  },
  {
    src: img55,
    description:
      "Preventative care services help families build healthier futures together."
  },
  {
    src: img56,
    description:
      "Generous donors make it possible to continuously improve hospital facilities."
  },
  {
    src: img57,
    description:
      "Special pediatric clinics address unique health challenges faced by children."
  },
  {
    src: img58,
    description:
      "Every milestone achieved by our patients reminds us why our mission matters."
  },
  {
    src: img59,
    description:
      "Community health fairs promote awareness and preventative care education."
  },
  {
    src: img60,
    description:
      "Your support fuels programs that bring hope to children and families every day."
  },
  {
    src: img61,
    description:
      "We strive to create a healing environment built on trust and compassion."
  },
  {
    src: img62,
    description:
      "Advanced pediatric care means brighter futures for the next generation."
  },
  {
    src: img63,
    description:
      "Together, we can ensure no child is denied the care they deserve."
  },
  {
    src: img64,
    description:
      "Ongoing community engagement strengthens our commitment to serving families."
  },
  {
    src: img65,
    description:
      "Your generosity helps us continue delivering exceptional pediatric healthcare."
  }
];
  return (
    <div className="mt-12 px-4 max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-2">
      {images.map((image, index) => (
        <div
          key={index}
          onClick={() => setSelectedImage(image)}  // ✅ onClick here
          className="cursor-pointer"
        >
          <div className="aspect-[4/5] overflow-hidden shadow-md">
            <img
              src={image.src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover hover:scale-105 transition duration-300"
            />
          </div>
        </div>
      ))}

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          close={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}