import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/hello"
            style={(params) => (params.isActive ? { color: "red" } : undefined)}
          >
            {" "}
            Hello
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/tasks"> My tasks </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
