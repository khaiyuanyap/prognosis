import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { predict } from "./modelLogic";

const InputFrame = ({ model }) => {
  let selectedImgRef = useRef(null);

  const [error, setError] = useState(null);
  const [imgFileUrl, setImgFileUrl] = useState("");
  const [predLoading, setPredLoading] = useState(false);
  const [prediction, setPrediction] = useState([]);

  const onFileChange = (e) => {
    const { files } = e.target;

    if (!files[0].type.startsWith("image/")) {
      setError("Only 'jpeg/png' format images");
      return setImgFileUrl("");
    }
    setImgFileUrl(URL.createObjectURL(files[0]));
  };

  // Handle predict

  const handlePredict = (e) => {
    setPredLoading(true);
    predict(selectedImgRef, model).then((top3) => {
      setTimeout(() => {
        setPredLoading(false);
        setPrediction(top3);
      }, 3000);
    });
  };

  return (
    <div>
      <div>
        <h2>Get Tested For Skin Cancer</h2>
      </div>
      {imgFileUrl !== "" && (
        <div>
          <div>
            <div>
              <div></div>
              <h4>Image</h4>
            </div>
            <img
              src={imgFileUrl}
              ref={(ele) => (selectedImgRef = ele)}
              alt=""
            />
          </div>
          <div>
            {predLoading ? (
              <div>
                Loading
              </div>
            ) : (
              prediction.length !== 0 && (
                <div>
                  <div>
                    <div></div>
                    <h4>Predictions</h4>
                  </div>
                  <div>
                    {prediction !== [] &&
                      prediction?.map((pred, index) => (
                        <div
                          key={index}
                        >
                          <h4>
                            {pred?.className}
                          </h4>
                          <h4>
                            {(pred?.probability * 100).toFixed(2)}%
                          </h4>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
      <div>
        <div>
          <div>
            <input type="file" onChange={onFileChange}></input>
            {error && (
              <h6>
                {error}
              </h6>
            )}
          </div>
          {imgFileUrl && (
            <div>
              <div onClick={handlePredict}>
                <h3>Predict</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InputFrame;