import { useState } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Accordion({ title, content }) {
  const [isCheck, setCheck] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          width: "100%",
          height: "60px",
          border:  "1px solid #eee",
          // backgroundColor: " #eee",
          borderRadius: "20px"
        }}
      >
        <h1 style={{ fontSize: "1.2rem" }}>{title}</h1>
        <div onClick={() => {setCheck((e) => !e);}}style={{cursor: 'pointer'}}>
          {isCheck ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </div>
      </div>
      {isCheck && (
        <div
          style={{
            margin: "0",
            color: "#fff",
            width: "100%",
            paddingBottom: "40px",
            borderBottom:  "1px solid #E5E7EA",
            alignContent: "center",
          }}
        >
          {content}
        </div>
      )}
    </>
  );
}

export default Accordion;