import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    // console.log(admin)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-5xl font-bold text-purple-500 text-center'>Dashboard</h2>
                <Outlet></Outlet>
                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label> 
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                {/* <!-- Sidebar content here --> */}
                <li><Link to='/dashboard'>My Appointments</Link></li>
                <li><Link to='/dashboard/myreview'>My Review</Link></li>
                 <li><Link to='/dashboard/users'>All Users</Link></li>
                 <li><Link to='/dashboard/adddoctor'>Add Doctor</Link></li>
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;