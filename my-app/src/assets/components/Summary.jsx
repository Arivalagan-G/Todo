import React from 'react';

const Summary = ({ registrationId, personal, ticketType, workshops, paymentMethod, referralCode }) => {
  return (
    <div className="summary">
      <h3>Registration Summary</h3>
      <p><strong>Registration ID:</strong> {registrationId}</p>
      <p><strong>Name:</strong> {personal.firstName} {personal.lastName}</p>
      <p><strong>Email:</strong> {personal.email}</p>
      <p><strong>Phone:</strong> {personal.phone}</p>
      <p><strong>Ticket:</strong> {ticketType}</p>
      <p><strong>Workshops:</strong> {workshops.join(", ")}</p>
      <p><strong>Payment:</strong> {paymentMethod}</p>
      <p><strong>Referral:</strong> {referralCode || "N/A"}</p>
    </div>
  );
};

export default Summary;
