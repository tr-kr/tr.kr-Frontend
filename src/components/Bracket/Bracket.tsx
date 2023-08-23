import { useEffect, useState } from 'react';
import Final from './Final';
import Qualifer from './Qualifer';
import SemiFinal from './SemiFinal';
import axios from 'axios';

const Bracket = () => {
  const [bracket, setBracket] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('http://3.34.170.230/api/tournament/1');
      console.log(data.data);
    };
    fetchData();
  });

  return (
    <div className="flex justify-center items-center w-[900px] h-[500px] bg-[#101415] border-[1px] border-solid border-[#374c52]">
      <div className="flex justify-between items-center w-[610px]">
        <div className="flex flex-col justify-between items-center h-[200px]">
          <Qualifer />
          <Qualifer />
        </div>
        <div>
          <SemiFinal />
        </div>
        <div>
          <Final />
        </div>
      </div>
    </div>
  );
};

export default Bracket;
