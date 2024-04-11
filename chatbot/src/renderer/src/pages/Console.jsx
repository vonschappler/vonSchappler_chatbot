import { Grid, Divider } from "@mui/material";

import ChatMessage from "../ui/ChatMessage";
import User from "../ui/User";

// const { chats } = (await import("../dev-data/chats.json")) ?? [];

import { chats } from "../dev-data/chats";
import { users } from "../dev-data/users";
import ChatInput from "../ui/ChatInput";
// const { users } = (await import("../dev-data/users.json")) ?? [];

const Console = () => {
  return (
    <Grid
      container
      className="!grid !grid-flow-col grid-cols-[1fr_auto] !grid-rows-[1fr_auto]"
    >
      <Grid
        item
        className=" h-[100%] !grow overflow-y-auto !scroll-smooth border-x-0 border-y-0 border-b-[1px] border-solid border-von-lightGray/50"
      >
        {chats.map((chat, i) => {
          return <ChatMessage body={chat} key={i} />;
        })}
      </Grid>
      <Grid item className="!grow">
        <ChatInput className="!w-[100%]" />
      </Grid>
      <Grid
        item
        className="row-span-3 h-[100%] w-[200px] overflow-y-auto border-x-0 border-y-0 border-l-[1px] border-solid border-von-lightGray/50"
      >
        {users.map((user, i) => {
          return <User body={user} key={i} />;
        })}
      </Grid>
    </Grid>
  );
};

export default Console;
