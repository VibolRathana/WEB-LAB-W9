import { useState } from "react";

export default function DeleteModal() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsVisible(true)}
        className="bg-red-500 text-white p-2"
      >
        Delete Item
      </button>

      {isVisible && (
        <div className="p-4 bg-yellow-100 border">
          <p>Are you sure?</p>

          <button
            onClick={() => setIsVisible(false)}
            className="bg-gray-500 text-white p-2"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
}