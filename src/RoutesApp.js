import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { SignUp } from "./pages/SignUp/SignUp";

export const RoutesApp = ({ courses }) => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<Home />} />
			{/* <Route path="/" element={<Home courses={courses} />} /> */}
			{/* <Route path="/courses" element={<ListCourses courses={courses} />} />
            <Route path="/singnup/:id" element={<SingnUp courses={courses} />} /> */}
			<Route path="/signup" element={<SignUp />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};
