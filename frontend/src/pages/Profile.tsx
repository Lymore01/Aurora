import { Link, Outlet, useLocation } from "react-router-dom";
import PageLayout from "./PageLayout";
import { FaRegUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineLogout } from "react-icons/hi";

const Profile = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname == path;
  return (
    <PageLayout>
      <div className="w-full max-h-screen h-screen pt-20 ">
        <div className="w-full h-full flex flex-row px-4 md:px-10 xl:px-[50px] ">
          <section className="w-1/5 h-full p-10 ">
            <div className="w-full h-full flex flex-col justify-start items-start gap-10">
              <h1 className="font-semibold font-DreamToBerich lg:text-lg">My Account</h1>
              <div className="w-full flex flex-col justify-start items-start gap-4 text-gray-800">
                <Link
                  to={"/profile/profile-info"}
                  className={`w-full flex justify-start items-center gap-2 ${
                    isActive("/profile/profile-info") ? "text-chocolate" : ""
                  }`}
                >
                  <FaRegUser className="text-[24px]" />
                  <p className="">Profile Info</p>
                </Link>
                <hr className="border-1 w-full border-gray-500" />
                <Link
                  to={"/profile/notifications"}
                  className={`w-full flex justify-start items-center gap-2 ${
                    isActive("/profile/notifications") ? "text-chocolate" : ""
                  }`}
                >
                  <IoMdNotificationsOutline className="text-[24px]" />
                  <p className="">Notifications</p>
                </Link>
                <hr className="border-1 w-full border-gray-500" />
                <Link
                  to={"/profile/favourites"}
                  className={`w-full flex justify-start items-center gap-2 ${
                    isActive("/profile/favourites") ? "text-chocolate" : ""
                  }`}
                >
                  <IoHeartOutline className="text-[24px]" />
                  <p className="">Favourites</p>
                </Link>
                <hr className="border-1 w-full border-gray-500" />
                <Link
                  to={"/profile/order-history"}
                  className={`w-full flex justify-start items-center gap-2 ${
                    isActive("/profile/order-history") ? "text-chocolate" : ""
                  }`}
                >
                  <AiOutlineShoppingCart className="text-[24px]" />
                  <p className="">Order History</p>
                </Link>
                <hr className="border-1 w-full border-gray-500" />
                <button className="w-full flex justify-start items-center gap-2 ">
                  <HiOutlineLogout className="text-[24px]" />
                  <p className=" ">Log Out</p>
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-1">
            <Outlet />
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default Profile;
