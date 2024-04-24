import {
  Grid,
  MenuItem,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { chatMessageOpts } from "../constants/botConstants";
import { useState } from "react";
import { chats } from "../dev-data/chats";

const ChatInput = ({ className = "" }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chats);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newMessage = message;
  //   alert(newMessage);
  //   setMessages([...messages, message]);
  //   console.log(messages);
  //   setMessage("");
  // };

  // const handleChange = (e) => {
  //   setMessage(e.target.value);
  //   console.log({ chatValue: message });
  // };

  return (
    <TextField
      hiddenLabel
      className="w-full !rounded-none !border-x-0 !border-y-0 border-l-[1px] !border-solid  !border-von-lightGray/50  !bg-von-lightGray/20 !py-0"
      variant="filled"
      size="small"
      // value={message}
      // onChange={handleChange}
      InputProps={{
        startAdornment: (
          <TextField
            hiddenLabel
            // id="filled-select-currency"
            select
            defaultValue="streamer"
            variant="filled"
            className="!mr-2 !bg-transparent"
          >
            {chatMessageOpts.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        ),
        endAdornment: (
          <IconButton
            className="bg-transparent  !text-von-darkGray  hover:!bg-transparent hover:!text-von-lightGray"
            // type="submit"
            // onClick={(e) => handleSubmit(e)}
          >
            <Send />
          </IconButton>
        ),
      }}
    />
  );
};

export default ChatInput;
