import { useEffect, useRef } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
// import { USER } from "../../../constants/index"
import { addUser, updateUser } from "../../../redux/reducer/userSlice";

function UserAdd () {
  //  gọi hàm dispatch() để gửi một hành động đến store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let { id } = useParams();
  const users = useSelector(state => state.users)
  const inputTendangnhapRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputTennguoidungRef = useRef(null);
  const inputVaitroRef = useRef(null);
  const inputThoigiandaotaoRef = useRef(null);
  const inputThoigiancapnhatRef = useRef(null);
  const handleSubmit = () => {
    const item = {
      tendangnhap: inputTendangnhapRef?.current?.value,
      email: inputEmailRef?.current?.value,
      tennguoidung: inputTennguoidungRef?.current?.value,
      vaitro: inputVaitroRef?.current?.value,
      Thoigiandaotao: inputThoigiandaotaoRef?.current?.value,
      Thoigiancapnhat: inputThoigiancapnhatRef?.current?.value
    }

    if (!id) {
      const actionAdd = addUser(item);
      dispatch(actionAdd);
    } else {
      const actionUpdate = updateUser(item);
      dispatch(actionUpdate);
    }
    navigate(-1);
  }

  useEffect(() => {
    // nếu có id thuộc trường hợp chỉnh sửa
    if (!id) return;
    const user = users.find((x) => Number(x.id) === Number(id));
    if (user) {
      inputTendangnhapRef.current.value = user.Tendangnhap;
      inputEmailRef.current.value = user.Email;
      inputTennguoidungRef.current.value = user.Tennguoidung;
      inputVaitroRef.current.value = user.Vaitro;
      inputThoigiandaotaoRef.current.value = user.Thoigiandaotao;
      inputThoigiancapnhatRef.current.value = user.Thoigiancapnhat;
    
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);  // Quay lại trang trước đó
  };

  return (
    <Container>
      <h2> Add User</h2>

      <Form>
        <Form.Group className="mb-3" controlId="formGroupTendangnhap">
          <Form.Label>Tên đăng nhập :</Form.Label>
          <Form.Control type="text" ref={inputTendangnhapRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" ref={inputEmailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupTennguoidung">
          <Form.Label>Tên người dùng:</Form.Label>
          <Form.Control type="text" ref={inputTennguoidungRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupVaitro">
          <Form.Label>Vai Trò:</Form.Label>
          <Form.Control type="text" ref={inputVaitroRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupThoigiandaotao">
          <Form.Label>Thời gian đào tạo: </Form.Label>
          <Form.Control type="text" ref={inputThoigiandaotaoRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGroupThoigiancapnhat">
          <Form.Label>Thời gian cập nhật:</Form.Label>
          <Form.Control type="datetime" ref={inputThoigiancapnhatRef} />
        </Form.Group>
      </Form>

      
      

      <Row >
        <Col className="d-flex gap-2">
          <Button onClick={handleSubmit}>
          {id ? "Update" : " Add "}
          </Button>
          <Button variant="secondary" onClick={handleGoBack}  >
            Back
          </Button>
        </Col>
      </Row>

    </Container>
  );
}

export default UserAdd;
