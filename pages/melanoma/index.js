import React, { useEffect } from "react";
import { useState } from "react";
import InputFrame from "../../components/InputFrame";
import * as tf from "@tensorflow/tfjs";

const GetTested = () => {
  const [isLoading, setLoading] = useState(true);
  const [model, setModel] = useState(null);

  const loadModel = async () => {
    const mod = await tf.loadLayersModel("./model/model.json");
    setModel(mod);
  };

  useEffect(() => {
    setLoading(true);
    loadModel();
    setLoading(false);
  }, [setLoading]);

  return (
    <main className="px-5 pt-5 bg-gray-50 min-h-screen">
      <div >
        <button onClick={() => router.push('/')} className="bg-white print:hidden font-semibold opacity-80 hover:opacity-60 ml-4 mb-4 text-sm rounded-lg px-2 py-1 border flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>Go Back
        </button>
      </div>
      <div className="ml-4">
        {isLoading ? (
          <div>
            Loading
          </div>
        ) : (
          <InputFrame model={model} />
        )}
      </div>
    </main>
  );
};

export default GetTested;