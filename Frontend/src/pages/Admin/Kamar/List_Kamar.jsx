import { Sidebar } from "../../../components";
import Table from 'react-bootstrap/Table';
import { BsSearch } from "react-icons/bs";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaEdit, FaTrash } from "react-icons/fa";

function ListKamar() {
    const data = [
      {
        id: 1,
        nama_kamar: "Kamar 1",
        deskripsi: "Deskripsi 1",
        alamat: "Alamat 1",
        kota: "Kota 1",
        longlat: "-6.200000, 106.816666",
        harga: 12313,
        status: "Tersedia",
      },
      {
        id: 2,
        nama_kamar: "Kamar 2",
        deskripsi: "Deskripsi 2",
        alamat: "Alamat 2",
        kota: "Kota 2",
        longlat: "-6.200000, 106.816666",
        harga: 3414142,
        status: "Terpakai",
      }
    ];

    return (
      <div className="row w-100 min-vh-100 d-flex" style={{backgroundColor: "#E8F3F9"}}>
        <Sidebar className={'col'}/>
        <div className="col overflow-x-scroll" style={{marginLeft: "15%", marginTop: "2%"}}>
          <div className="container-fluid">
            <h1>Kamar</h1>

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
                  <button className="btn text-white" style={{backgroundColor:"#138FD4"}}>Tambah Kamar</button>
                </div>
            </div>

            <Table border={""} hover>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama Kamar</th>
                  <th>Deskripsi</th>
                  <th>Alamat</th>
                  <th>Kota</th>
                  <th>Longlat</th>
                  <th>Harga</th>
                  <th>Status</th>
                  <th className="text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                  {
                    data.map((item) => (
                      <tr key={item.id}>
                        <td className="text-truncate">{item.id}</td>
                        <td className="text-truncate">{item.nama_kamar}</td>
                        <td className="text-truncate">{item.deskripsi}</td>
                        <td className="text-truncate">{item.alamat}</td>
                        <td className="text-truncate">{item.kota}</td>
                        <td className="text-truncate">{item.longlat}</td>
                        <td className="text-truncate">{new Intl.NumberFormat('id-ID', {
                              style: 'currency',
                              currency: 'IDR'
                            }).format(item.harga)}</td>
                        <td>
                          <button style={{backgroundColor:"#138FD4"}} className="btn py-0 px-4 text-white">
                            {item.status}
                          </button>
                        </td>
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
  
  export default ListKamar;