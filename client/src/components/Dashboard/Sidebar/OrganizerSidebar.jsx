import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdCategory,
  MdConfirmationNumber,
  MdPeopleAlt,
  MdArrowBack,
  MdEvent,
} from "react-icons/md";

const linkClass = ({ isActive }) =>
  `flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
    isActive
      ? "bg-gray-700 text-yellow-300 font-semibold"
      : "text-white hover:text-yellow-400"
  }`;

const OrganizerSidebar = () => {
  return (
    <div className="h-full p-6 space-y-6 bg-gray-800">
      <h2 className="text-2xl font-bold text-green-400 mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-3">
        <NavLink to="/dashboard/admin" className={linkClass}>
          <MdDashboard size={20} />
          Dashboard Overview
        </NavLink>
        <NavLink to="/dashboard/admin/users" className={linkClass}>
          <MdPeopleAlt size={20} />
          Manage Users
        </NavLink>
        <NavLink to="/dashboard/admin/tickets" className={linkClass}>
          <MdConfirmationNumber size={20} />
          Manage Tickets
        </NavLink>
        <NavLink to="/dashboard/admin/categories" className={linkClass}>
          <MdCategory size={20} />
          Manage Categories
        </NavLink>
        <NavLink to="/dashboard/admin/event" className={linkClass}>
          <MdEvent size={20} />
          Manage Event
        </NavLink>
        <NavLink to="/" className={linkClass}>
          <MdArrowBack size={20} />
          Back
        </NavLink>
      </nav>
    </div>
  );
};

export default OrganizerSidebar;
