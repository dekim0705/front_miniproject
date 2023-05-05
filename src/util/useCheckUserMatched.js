import { useEffect, useState } from 'react';
import MatchingAxiosApi from '../api/MatchingAxiosApi';

const useCheckUserMatched = (userNum) => {
  const [isMatched, setIsMatched] = useState(false);

  useEffect(() => {
    const checkUserMatched = async (memberNum) => {
      try {
        const response = await MatchingAxiosApi.isMatched(memberNum);
        setIsMatched(response.data);
      } catch (error) {
        console.error('매칭 여부 확인 실패 : ', error);
      }
    };

    if (userNum) {
      checkUserMatched(userNum);
    }
  }, [userNum]);

  return isMatched;
};

export default useCheckUserMatched;