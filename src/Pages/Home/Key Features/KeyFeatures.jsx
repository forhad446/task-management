import Card from "../../Shared/Card/Card";
import { FaRegClock, FaTasks, FaTools } from "react-icons/fa";
import { MdOutlineManageHistory, MdOutlineNotificationsActive, MdDashboard } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { GrSecure } from "react-icons/gr";

const KeyFeatures = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl text-center font-bold py-10">Key Features</h1>
            <p className="px-5 text-center">
                Streamline teamwork with our Task Management Platform. Collaborate effortlessly in real time, assign tasks, and customize lists. Stay organized with deadline tracking, file sharing, and notifications. Seamlessly integrate with tools, access tasks on-the-go, and analyze progress. Enjoy a user-friendly interface with robust security. Achieve goals efficiently and effectively across diverse industries.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 px-3">
                <Card
                    icon={<FaRegClock size={40} />}
                    title="Real-Time Collaboration"
                    body="Effortlessly collaborate with team members in real time, ensuring everyone stays updated and in sync. Share tasks, updates, and progress seamlessly."></Card>
                <Card
                    icon={<FaTasks size={40} />}
                    title="Customizable Task Lists"
                    body="Tailor task lists to match your project requirements or personal preferences. Organize tasks by category, priority, or specific project milestones."></Card>
                <Card
                    icon={<MdOutlineManageHistory size={40} />}
                    title="Deadline Management"
                    body="Stay on top of project timelines with built-in deadline tracking. Receive reminders and alerts to ensure timely task completion."></Card>
                <Card
                    icon={<MdOutlineNotificationsActive size={40} />}
                    title="Notifications and Reminders"
                    body="Receive instant notifications and reminders, keeping you updated on task progress, upcoming deadlines, and important discussions."></Card>
                <Card
                    icon={<FaTools size={40} />}
                    title="Integration with Third-Party Tools"
                    body="Seamlessly integrate with popular tools like Google Calendar, Slack, or Trello, enhancing your workflow and ensuring compatibility with existing tools."></Card>
                <Card
                    icon={<SiGoogleanalytics size={40} />}
                    title="Analytics and Reporting"
                    body="Gain valuable insights into project progress and team performance. Analyze data to optimize workflows and track productivity."></Card>
                <Card
                    icon={<MdDashboard size={40} />}
                    title="Customizable Dashboard"
                    body="Personalize your dashboard to showcase the information most relevant to you. Tailor your view to focus on what matters most for your workflow."></Card>
                <Card
                    icon={<GrSecure size={40} />}
                    title="Secure and Reliable"
                    body="Rest assured knowing your data is secure and backed up. Our platform employs robust encryption and reliable backup systems to safeguard your information."></Card>
            </div>
        </div>
    );
};

export default KeyFeatures;