// isMatched : 사용자가 매칭되었는지 여부 확인
export const getPath = (path, isMatched) => {
  return path === "/mentor" && isMatched ? "/chat" : path;
};