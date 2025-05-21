import React from "react";
import { motion } from "framer-motion";
import { profileDetails } from "../data/profileDetails";
import Avatar from "boring-avatars";

const TeamCards = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <h1 className="text-3xl font-bold text-white text-center mb-10">
        Our Team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        {profileDetails.map((profile, index) => (
          <motion.div
            key={index}
            whileHover={{ rotateY: 8, rotateX: 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-80 bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform perspective-1000"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="w-24 h-24 mx-auto mb-4">
              <div>
                <Avatar name={profile.fullName} />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold">{profile.fullName}</h2>
              <p className="text-sm text-gray-400">@{profile.nickName}</p>
              <p className="text-gray-300 text-sm mt-2 mb-4">{profile.bio}</p>
              <div className="flex justify-center gap-4 text-blue-400 text-sm">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
                <a
                  href={profile.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;
