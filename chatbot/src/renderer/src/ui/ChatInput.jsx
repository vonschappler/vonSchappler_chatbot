import {
  Grid,
  MenuItem,
  IconButton,
  TextField,
  Autocomplete,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { chatMessageOpts } from "../constants/botConstants";
import { useState } from "react";
import { chats } from "../dev-data/chats";

const ChatInput = ({ className = "" }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(chats);

  // #TODO: find a way to make this chat input work properly

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
    <Grid container className={`chatField ${className}`}>
      <Grid item>
        <TextField
          hiddenLabel
          // id="filled-select-currency"
          select
          defaultValue="streamer"
          variant="filled"
        >
          {chatMessageOpts.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item className="grow">
        <TextField
          hiddenLabel
          className="w-full !rounded-none !border-x-0 !border-y-0 border-l-[1px] !border-solid  !border-von-lightGray/50  !bg-von-lightGray/20 !py-0"
          variant="filled"
          size="small"
          // value={message}
          // onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <IconButton
          className="!rounded-none !bg-von-lightGray/20 !text-von-darkGray !transition-all !duration-700 hover:!bg-von-lightGray"
          // type="submit"
          // onClick={(e) => handleSubmit(e)}
        >
          <Send />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ChatInput;
