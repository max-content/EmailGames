import React, { useEffect, useState } from "react";
import axios from "axios";

const PuppyPhoto = () => {
  const [photoUrl, setPhotoUrl] = useState("");

  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        setPhotoUrl(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching puppy photo:", error);
      });
  }, []);

  return (
    <div>
      {photoUrl && (
        <div>
          <h2>Random Puppy Photo</h2>
          <img src={photoUrl} alt="Puppy" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default PuppyPhoto;