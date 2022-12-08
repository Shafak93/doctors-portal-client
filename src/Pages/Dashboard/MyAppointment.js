import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://doctors-portal-6ca0.onrender.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          console.log(res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setAppointments(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-xl font-bold">
        I have {appointments.length} appointments
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Appoint ID</th>
              <th>Name</th>
              <th>Appoint Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appoint, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{appoint.patientName}</td>
                <td>{appoint.date}</td>
                <td>{appoint.slot}</td>
                <td>{appoint.treatment}</td>
                <td>
                  {appoint.price && !appoint.paid && (
                    <Link to={`/dashboard/payment/${appoint._id}`}>
                      {" "}
                      <button className="btn btn-xs btn-success">
                        Pay
                      </button>{" "}
                    </Link>
                  )}
                  {/* {(appoint.price && appoint.paid) &&  <span className='btn btn-xs btn-success'>Pay</span>} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
