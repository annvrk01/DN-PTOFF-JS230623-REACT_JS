import React , { useEffect} from "react"
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { removeUser } from "../../../redux/reducer/userSlice";
import { fetchUser} from "./../../../redux/api/user/index"
function User () {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log('users', users)
  const handleCreateUser = () => {
    navigate("add");
  }
  const handleRemoveUser = (tendangnhap) => {
    const myAction = removeUser(tendangnhap);
    dispatch(myAction);
  }

  const handleUpdateStudent = (tendangnhap) => {
    // const update = 
    navigate("edit/" + tendangnhap);

  }
  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return (
    <div>
      <Container>
        <Row  >
          <Col xs={10} ><h1> Quản Lí Nhân Viên </h1> </Col>
          <Col xs={2}   >
            <Button variant="primary" className="btn-create" onClick={() => {
              handleCreateUser();
            }}
            > Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>

            <Table className="tg">
              <thead>
                <tr>
                  <th className="tg-0lax">Tên đăng nhập	</th>
                  <th className="tg-0lax">Email	</th>
                  <th className="tg-0lax">Tên người dùng	</th>
                  <th className="tg-0lax">Vai trò	</th>
                  <th className="tg-0lax">Thời gian đào tạo </th>
                  <th className="tg-0lax">Thời gian cập nhật	</th>
                  <th className="tg-0lax" style={{ width: 300 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {users?.map((item) => (
                  <tr key={item.id }>
                    <td className="tg-0lax">{item.tendangnhap}</td>
                    <td className="tg-0lax">{item.email}</td>
                    <td className="tg-0lax">{item.tennguoidung}</td>
                    <td className="tg-0lax">{item.vaitro}</td>
                    <td className="tg-0lax">{item.thoigiandaotao}</td>
                    <td className="tg-0lax">{item.thoigiancapnhat}</td>
                    <td className="d-flex gap-2">
                      <Button variant="danger"
                        onClick={() => {
                          handleRemoveUser(item.tendangnhap);
                        }}
                      >
                        Delete
                      </Button>

                      <Button variant="warning"
                        onClick={() => {
                          handleUpdateStudent(item.tendangnhap);
                        }}
                      >
                        Update
                      </Button>
                      {/* <Button variant="info"
                        onClick={() => {
                          handleDetailsStudent(item);
                        }}
                      >
                        Xem chi tiet
                      </Button> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>

      </Container>

    </div>
  );
}

export default User;
