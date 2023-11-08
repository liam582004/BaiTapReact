import React from "react";

export default function Face({ glassReview }) {
  return (
    <div className="text-center my-5">
      <div className="face-img">
        <img src="./img/model.jpg" alt="face" height={250} />
        {glassReview && (
          <>
            <div className="review-glass">
              <img src={glassReview.url} alt={glassReview.name} />
            </div>
            <div className="review-text">
              <h5>
                {glassReview.name} - {glassReview.price}$
              </h5>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
