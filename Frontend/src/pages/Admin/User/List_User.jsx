import { Sidebar } from "../../../components";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEdit, FaTrash } from "react-icons/fa";

function ListUser() {
    const data = [
      {
        id: 1,
        username: "Username 1",
        password: "Password 1",
        role: "Role 1",
      },
      {
        id: 2,
        username: "Username 2",
        password: "Password 2",
        role: "Role 2",
      }
    ];

    return (
      <div className="row w-100 min-vh-100 d-flex" style={{backgroundColor: "#E8F3F9"}}>
        <Sidebar className={'col'}/>
        <div className="col overflow-x-scroll" style={{marginLeft: "15%", marginTop: "2%"}}>
          <div className="container-fluid">
            <h1>User</h1>

            <div className="d-flex justify-content-between">
                <InputGroup className="my-3 w-50">
                    <InputGroup.Text id="inputGroup-sizing-default" className="rounded-start-4 border-0" style={{
                        backgroundColor : '#fff'
                    }}>
                    <BsSearch />
                    </InputGroup.Text>
                    <Form.Control
                    aria-label="Default"
                    aria-describedby="inputGroup-sizing-default"
                    placeholder="Cari"
                    className="border-0 rounded-end-4"
                    />
                </InputGroup>
                <div className="d-flex align-items-center">
                  <button className="btn text-white" style={{backgroundColor:"#138FD4"}}>
                    Tambah User
                  </button>
                </div>
            </div>

            <Table border={""} hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Role</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                  {
                    data.map((item) => (
                      <tr key={item.id}>
                        <td className="text-truncate">{item.id}</td>
                        <td className="text-truncate">{item.username}</td>
                        <td className="text-truncate">{item.password}</td>
                        <td className="text-truncate">{item.role}</td>
                        <td className="">
                          <button className="btn">
                            <FaEdit/>
                          </button>
                          <button className="btn">
                            <FaTrash/>
                          </button>
                        </td>
                      </tr>
                    ))
                  }
              </tbody>
            </Table>
          </div>

          <div>
          </div>
        </div>
      </div>
    );
  }
  
  export default ListUser;