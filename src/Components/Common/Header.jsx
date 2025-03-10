import HomeIcon from "../../assets/icons/home.svg";
import Notification from "../../assets/icons/notification.svg";
import Logo from "../../assets/images/logo.svg";
import { useAuth } from "../../Hooks/useAuth";
import { useProfile } from "../../Hooks/useProfile";
import Logout from "../auth/Logout";
import { Link } from "react-router-dom";

const Header = () => {
    const { auth } = useAuth();
    const { state } = useProfile();

    const user = state?.user ?? auth?.user;
    const avatarUrl = user?.avatar
        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`
        : "/default-avatar.png"; // ✅ Fallback image if no avatar

    return (
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
            <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
                <Link to="/">
                    <img
                        className="max-w-[100px] lg:max-w-[140px]"
                        src={Logo}
                        alt="logo"
                    />
                </Link>

                <div className="flex items-center space-x-4">
                    <Link to="/" className="btn-primary">
                        <img src={HomeIcon} alt="Home" />
                        Home
                    </Link>
                    <button className="icon-btn">
                        <img src={Notification} alt="Notification" />
                    </button>

                    <Logout />

                    {/* Profile Link */}
                    <Link to="/me" className="flex-center !ml-8 gap-3">
                        <span className="text-lg font-medium lg:text-xl">
                            {user?.firstName} {user?.lastName}
                        </span>
                        
                        {/* ✅ Ensuring a Perfectly Rounded Avatar */}
                        <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src={avatarUrl}
                                alt="User Avatar"
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;
