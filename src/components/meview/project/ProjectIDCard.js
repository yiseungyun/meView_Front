import styled from "styled-components";
import ProjectReviewCard from "./ProjectReviewCard";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 32px 20px;
  border-top: 8px solid var(--Gray-14);
`;
const NickName = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: var(--Gray-01);
  padding-left: 8px;
  display: flex;
  position: relative;
  align-items: center;
  padding: 0 0 6px 0;
  .nickname {
    cursor: pointer;
  }

  .arrow {
    position: absolute;
    right: 0;
    cursor: pointer;
  }
`;

function ProjectIDCard({ nickname, reviews }) {
  const navigate = useNavigate();
  const handleNickNameClick = () => {
    navigate("/meview/nicknamereview");
  };

  return (
    <Container>
      <NickName>
        <span className="nickname" onClick={handleNickNameClick}>
          {nickname}
        </span>
        <img
          className="arrow"
          src="/image/rightarrow.svg"
          alt="arrow"
          onClick={handleNickNameClick}
        />
      </NickName>
      {reviews.map((review) => (
        <ProjectReviewCard
          key={review.id}
          chipName={review.chip_name}
          reviewDescription={review.review_description}
        />
      ))}
    </Container>
  );
}

export default ProjectIDCard;

