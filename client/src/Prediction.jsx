import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Prediction = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage(file);
    setResult(null); 
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const Prediction = async () => {
    if (!image) {
      alert("Please select an image first!");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", image);

      const response = await axios.post(
        "http://localhost:5000/predict",
        formData
      );

      navigate(
        "/result",{
        state: {
        result: response.data,
        preview: preview
      }
    })
    } catch (err) {
      console.error(err);
      alert("Error connecting to the ML model. Please check your backend.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
 
  );
};

export default Prediction;