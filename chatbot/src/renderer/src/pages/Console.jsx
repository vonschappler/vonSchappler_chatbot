import { Grid } from "@mui/material";

import ChatMessage from "../ui/ChatMessage";

import { chats } from "../dev-data/chats";
import { editors, mods, users } from "../dev-data/users";

import ChatInput from "../ui/ChatInput";
import Accordion from "../ui/Accordion";
import User from "../ui/User";

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
      <Grid item className=" row-span-3  h-[100%] w-[250px] overflow-y-auto">
        <Accordion
          list={editors}
          title="Editors"
          aria_control="editor-content"
          id="editor-header"
        >
          {editors.map((item, i) => {
            return <User body={item} key={i} />;
          })}
        </Accordion>
        <Accordion
          list={mods}
          title="Moderators"
          aria_control="mods-content"
          id="mods-header"
        >
          {mods.map((item, i) => {
            return <User body={item} key={i} />;
          })}
        </Accordion>
        <Accordion
          list={users}
          title="Viewers"
          aria_control="users-content"
          id="users-header"
        >
          {users.map((item, i) => {
            return <User body={item} key={i} />;
          })}
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Console;
