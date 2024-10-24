import styled from "styled-components";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

const Container = styled.div`
  display: flex;
  width: 220px;
  min-width: 220px;
`;

 
const InnerContainer = styled.div`
  background-color: #141822;
  flex: 1;
  padding: 5px 20px;
`;

const SiteTitle = styled.p`
  color: white;
  text-align: center;
  letter-spacing: 1px;
  font-size: 15px;
  font-family: malgun;
`;

const ParentMenu = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.1px solid #bbbbbb;
  padding: 10px 10px;
  justify-content: space-between;
  background-color: transparent;
  flex:1;
  cursor: pointer;
`;

const ParentMenuTitle = styled.span`
  color: white;
  font-size: 14px;
  font-family: malgun;
`;

const ParentMenuIcon = styled.div`
  display: flex;
  align-items: center;
`;

const MENUS = ["공통", "회원", "회비"];

export default function SideBar() {
  return (
    <Container>
      <InnerContainer>
        <SiteTitle>정보관리시스템</SiteTitle>
        {MENUS.map((menu) => (
          <ParentMenu onClick={() => console.log(menu)}>
            <ParentMenuTitle>{menu}</ParentMenuTitle>
            <ParentMenuIcon>
              <MdOutlineKeyboardArrowDown color="white" />
            </ParentMenuIcon>
          </ParentMenu>
        ))}
      </InnerContainer>
    </Container>
  );
}
