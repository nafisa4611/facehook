import { useRef } from "react";
import EditIcon from "../../assets/icons/edit.svg";
import { actions } from "../../actions";
import { useProfile } from "../../Hooks/useProfile";
import useAxios from "../../Hooks/useAxios";

const ProfileImage = () => {
    const { state, dispatch } = useProfile();
    const { api } = useAxios();
    const fileUploaderRef = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploaderRef.current.click();
    };

    const updateImageDisplay = async () => {
        try {
            const fileInput = fileUploaderRef.current;
            if (!fileInput.files.length) return; // Prevent empty uploads

            const formData = new FormData();
            formData.append("avatar", fileInput.files[0]); // Only append the first file

            const response = await api.post(
                `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}/avatar`,
                formData
            );

            if (response.status === 200) {
                dispatch({
                    type: actions.profile.IMAGE_UPDATED,
                    data: response.data, // Updates user avatar
                });
            }
        } catch (error) {
            dispatch({
                type: actions.profile.DATA_FETCH_ERROR,
                error: error.message,
            });
        }
    };

    return (
        <div className="relative mb-8 w-[180px] h-[180px] lg:w-[218px] lg:h-[218px] rounded-full overflow-hidden">
            {/* Profile Image */}
            <img
                className="w-full h-full object-cover rounded-full"
                src={
                    state?.user?.avatar
                        ? `${import.meta.env.VITE_SERVER_BASE_URL}/${state.user.avatar}`
                        : "/default-avatar.png"
                }
                alt={state?.user?.firstName || "User"}
            />

            {/* Edit Button & File Upload */}
            <form id="form" encType="multipart/form-data">
                <button
                    className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
                    onClick={handleImageUpload}
                    type="button"
                >
                    <img src={EditIcon} alt="Edit" />
                </button>
                <input
                    id="file"
                    type="file"
                    ref={fileUploaderRef}
                    onChange={updateImageDisplay} // Directly handles file change
                    accept="image/*" // Restricts file selection to images
                    hidden
                />
            </form>
        </div>
    );
};

export default ProfileImage;
