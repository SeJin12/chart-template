import styled from "styled-components";
import { FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const Container = styled.div`
  display: flex;
  padding: 5px 20px;
  justify-content: end;
  align-items: center;
  gap: 10px;
  height: 35px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px; /* 아이콘과 텍스트 사이의 간격 */
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #0a111c;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  gap: 2px; /* 아이콘과 텍스트 사이의 간격 */

  &:hover {
    background-color: #f0f0f0; /* hover 시 배경색 변경 */
    border-color: #555555; /* hover 시 테두리 색 변경 */
  }
`;

const LogoutButtonText = styled.span`
  color: #0a111c;
  font-family: malgun;
  font-size: 12px;
`;

const UserText = styled.span`
  color: #0a111c;
  font-family: malgun;
  font-size: 13px;
`;

export default function HeaderBar() {
  return (
    <Container>
      <UserInfo>
        <FaUser />
        <UserText>관리자</UserText>
      </UserInfo>
      <LogoutButton>
        <MdLogout />
        <LogoutButtonText>로그아웃</LogoutButtonText>
      </LogoutButton>
    </Container>
  );
}
