import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1000px;

  background-color: #0c134f;
`;

export const VideoButton = styled.button<{ isMuted: boolean }>`
  position: relative;

  top: -100px;
  left: 50px;

  background-color: transparent;
  border: none;
`;
