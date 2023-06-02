import React from "react";
import BusinessCard from "./BusinessCard";
import pic1 from "../assets/pic1.png";
import pic2 from "../assets/pic2.png";
import pic3 from "../assets/pic3.png";

const BusinessCardGallery = () => {
  // Assuming you have the API data stored in a variable called `businessCardsData`
  const businessCardsData = [
    {
      id: 1,
      name: "James Hilston",
      first_name: "James",
      last_name: "Hilston",
      current_title: "Machine Learning Engineer",
      location: "San Francisco Bay Area",
      phone_number: "123-456-7890",
      personal_email: "jameshilston@example.com",
      linkedIn: "linkedin.com/in/jameshilston",
      experience: [
        {
          title: "Senior Machine Learning Engineer at Google Oc...",
          pics: pic1,
        },
        {
          title: "Junior Machine Learning Engineer at Spotify Jun...",
          pics: pic2,
        },
      ],
      education: [
        {
          title: "Standford University, M.S., Computer Sciences Oct...",
          pics: pic3,
        },
      ],
    },
    // More business cards...
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {businessCardsData.map((card) => (
        <BusinessCard
          key={card.id}
          name={card.name}
          email={card.personal_email}
          phoneNumber={card.phone_number}
          title={card.current_title}
          company={card.company}
          area={card.location}
          education={card.education}
          experience={card.experience}
        />
      ))}
    </div>
  );
};

export default BusinessCardGallery;
