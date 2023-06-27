import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";

const customStyles = {
  content: {
    width: "50%",
    height: "50%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Admin_Trade = () => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [details, setDetails] = useState([]);
  const [toUpdate, setToUpdate] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 const navigate = useNavigate();

  // console.log(toUpdate?._id);
  // console.log(title);
  // console.log(description);
  
  // console.log(`https://balboabackend-production-35f3.up.railway.app/trade-finance/${toUpdate?._id}`);

  // useEffect(() => {
  //   axios
  //     .get("https://balboabackend-production-35f3.up.railway.app/trade-finance")
  //     .then((res) => {
  //       console.log(res.data[0]);
  //       setDetails(res.data);
  //     })
  //     .catch((err) => console.log(err.message));
  // }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    navigate("http://localhost:3000/admin");
    setIsOpen(false);
  };

  // const saveModal = () => {
  //   // setIsOpen(false);
  // };

  return (
    <div>
      <h1 className="text-[24px] font-bold text-center mb-5">Trade Finance</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Paragraph</th>
        </tr>
        {details?.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.title}</td>
              <td>{val.description}</td>
              <td>
                <button
                  className="btn bg-secondary w-[100px]  m-3"
                  onClick={() => {
                    axios
                      .get(`https://balboabackend-production-35f3.up.railway.app/trade-finance/${val._id}`)
                      .then((res) => {
                        console.log(res.data);
                        setToUpdate(res.data);
                        setTitle(res.data.title);
                        setDescription(res.data.description);
                        setIsOpen(true);
                      })
                      .catch((err) => console.log(err.message));
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-[24px] font-medium text-primary">Change Text</h2>
        <form>
          <input
            className="input_field_admin"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="input_field_admin h-[150px]"
            placeholder="Detail"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <button
            className="btn btn_outline w-[100px] mt-3 mr-3"
            onClick={() => {
              axios
                .put(
                  `https://balboabackend-production-35f3.up.railway.app/trade-finance/${toUpdate._id}`,
                  {
                    title,
                    description,
                  }
                )
                .then((res) => {
                  alert("Updated");
                  setIsOpen(false);
                })
                .catch((err) => console.log(err.message));
            }}
          >
            Save
          </button>
          <button
            className="btn bg-secondary w-[100px] mt-3"
            onClick={closeModal}
          >
            Close
          </button>
        </form>
      </Modal>
    </div>
  );
};
export default Admin_Trade;
