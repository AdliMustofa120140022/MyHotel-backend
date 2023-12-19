import { Sidebar } from "../../../components";
import Table from "react-bootstrap/Table";
import { BsSearch } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaTrash, FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const ListOrder = () => {
  const data = [
    {
      id: 1,
      nama: "Nama 1",
      nama_kamar: "Kamar 1",
      check_in: "Check-in 1",
      check_out: "Check-out 1",
      tambahan: "Tambahan 1",
    },
    {
      id: 2,
      nama: "Nama 2",
      nama_kamar: "Kamar 2",
      check_in: "Check-in 2",
      check_out: null,
      tambahan: "Tambahan 2",
    },
  ];

  return (
    <div
      className="row w-100 min-vh-100 d-flex"
      style={{ backgroundColor: "#E8F3F9" }}
    >
      <Sidebar className={"col"} />
      <div
        className="col overflow-x-scroll"
        style={{ marginLeft: "15%", marginTop: "2%" }}
      >
        <div className="container-fluid">
          <h1>Cek Pesanan</h1>

          <div className="d-flex justify-content-between">
            <InputGroup className="my-3 w-50">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                className="rounded-start-4 border-0"
                style={{
                  backgroundColor: "#fff",
                }}
              >
                <BsSearch />
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Cari"
                className="border-0 rounded-end-4"
              />
            </InputGroup>
          </div>

          <Table border={""} hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Nama Kamar</th>
                <th>Check-in</th>
                <th>Check-out</th>
                <th>Tambahan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td className="text-truncate">{item.id}</td>
                  <td className="text-truncate">{item.nama}</td>
                  <td className="text-truncate">{item.nama_kamar}</td>
                  <td className="text-truncate">{item.check_in}</td>
                  <td className="text-truncate">{item.check_out ? item.check_out : "Belum Checkout"}</td>
                  <td className="text-truncate">{item.tambahan}</td>
                  <td className="">
                    <button className="btn">
                        {item.check_out ? 
                        <FaCheckSquare /> :
                        <MdCheckBoxOutlineBlank /> 
                        }
                    </button>
                    <button className="btn">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>

        <div>
        </div>
      </div>
    </div>
  );
};

export default ListOrder;
