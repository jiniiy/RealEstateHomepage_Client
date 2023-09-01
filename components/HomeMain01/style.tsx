import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1000px;

  background-color: #0c134f;
`;

export const VideoButton = styled.button<{ isMuted: boolean }>`
  position: relative;

  z-index: 999;

  top: -200px;
  left: 50px;

  font-size: 50px;

  background-color: transparent;
  border: none;
`;
