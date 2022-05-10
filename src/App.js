// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Class from "./components/Class/Class.js";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./components/Navbar/Navbar";
import Task from "./components/Task/Task.js";
import Hackathon from "./components/Hackathon/Hackathon.js";
import Capstone from "./components/Capstone/Capstone.js";
import Queries from "./components/Queries/Queries.js";
import Requirements from "./components/Requirements/Requirements.js";
import Application from "./components/Application/Application.js";
import Interviewtask from "./components/Interviewtask/Interviewtask.js";
import LeaveApplication from "./components/LeaveApplication/LeaveApplication";
import MockInterview from "./components/MockInterview/MockInterview";
import Certificate from "./components/Certificate/Certificate";

function App() {
	return (
		<div className="app">
			<div className="subappdiv">
				<div className="navDiv">
					<Navbar />
				</div>
				<div className="restDiv">
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/class" element={<Class />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/task" element={<Task />} />
						<Route path="/hackathon" element={<Hackathon />} />
						<Route path="/capstone" element={<Capstone />} />
						<Route path="/queries" element={<Queries />} />
						<Route
							path="/requirements"
							element={<Requirements />}
						/>
						<Route
							path="/application"
							element={<Application />}
						/>
						<Route
							path="/interview"
							element={<Interviewtask />}
						/>
						<Route path="/leave" element={<LeaveApplication />} />
						<Route
							path="/mockinterview"
							element={<MockInterview />}
						/>
						<Route
							path="/certificate"
							element={<Certificate />}
						/>
					</Routes>
				</div>
			</div>
		</div>
	);
}

export default App;
