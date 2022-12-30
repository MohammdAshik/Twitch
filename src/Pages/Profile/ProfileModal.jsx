import React, { useContext } from "react";
import { ImImage } from "react-icons/im";
import { BsPersonCircle } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";
import { TiHome } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

const ProfileModal = ({ modalData, setModalData, refetch }) => {
  const { name } = modalData;
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    const name = data.name;
    const education = data.education;
    const address = data.address;
    const img = data.image[0];
    const formData = new FormData();
    formData.append("image", img);
    // upload image in imbb
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.success) {
          const photo = data.data.url;
          const updatedDoc = {
            name,
            education,
            address,
            photo,
          };

          fetch(`http://localhost:5000/update_user?email=${user.email}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedDoc),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                setModalData("");
                refetch();
              }
            });
        }
      });
  };

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="edit-profile" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-[13px] border-b">Edit Profile</h3>
          <form onSubmit={handleSubmit(onSubmit)} className="my-3">
            {/* photo */}
            <div>
              <p className="font-bold text-[13px] flex items-center border-b pb-1">
                <ImImage className="mr-1 text-xl " /> Edit Profile Image
              </p>
              <input
                type="file"
                {...register("image")}
                className="file-input file-input-ghost w-full max-w-xs"
                required
              />
            </div>
            {/* Name */}
            <div>
              <p className="font-bold text-[13px] flex items-center border-b pb-1">
                <BsPersonCircle className="mr-1 text-xl " /> Edit Name
              </p>
              <input
                type="text"
                {...register("name")}
                defaultValue={name}
                className="input w-full bg-primary/10 h-[40px] my-3"
                required
              />
            </div>
            {/* college */}
            <div>
              <p className="font-bold text-[13px] flex items-center border-b pb-1">
                <TbSchool className="mr-1 text-xl " /> Add Education
              </p>
              <input
                type="text"
                {...register("education")}
                defaultValue={modalData?.education}
                placeholder="college/univercity name"
                className="input w-full bg-primary/10 h-[40px] my-3"
                required
              />
            </div>
            {/* Address */}
            <div>
              <p className="font-bold text-[13px] flex items-center border-b pb-1">
                <TiHome className="mr-1 text-xl " /> Address
              </p>
              <input
                type="text"
                {...register("address")}
                defaultValue={modalData?.address}
                placeholder="Address"
                className="input w-full bg-primary/10 h-[40px] my-3"
                required
              />
            </div>
            <div className="modal-action">
              <button
                onClick={() => setModalData("")}
                className="btn btn-primary btn-outline btn-xs text-white my-3"
              >
                Cancell
              </button>
              <input
                type="submit"
                value="save change"
                className="btn btn-primary btn-xs text-white my-3"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
