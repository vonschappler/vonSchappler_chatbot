import { Card, CardContent, Avatar, Divider, Grid } from "@mui/material";

const ChatMessage = ({ body }) => {
  const { tags, source, parameters } = body;
  const msgTime = new Date(tags["tmi-sent-ts"] * 1);
  const h = msgTime.getHours();
  const m = msgTime.getMinutes();
  const s = msgTime.getSeconds();

  return (
    <Grid
      container
      className="flex flex-row
      items-center gap-3 p-1 odd:bg-von-darkGray/10 even:bg-von-lightGray/10 "
    >
      <Grid item>
        <Avatar src="/img/vonBow_v2.png" />
      </Grid>
      <Grid item className="!grow">
        <Grid container className="flex !flex-col gap-1">
          <Grid item>
            <p style={{ color: tags.color }} className="font-title">
              <strong>
                <span>({`${h}:${m}:${s}`}) </span>
                {tags["display-name"]}:
              </strong>
            </p>
          </Grid>
          <Grid item className="w-full">
            <Divider className=" !border-von-teal" />
          </Grid>
          <Grid item>
            <span> {parameters}</span>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    // <Card className="mb-4 flex flex-row items-center px-4">
    //   <Avatar src="/img/vonBow_v2.png" />
    //   <CardContent className="flex w-[100%] flex-col gap-2">
    //     <p style={{ color: tags.color }} className="font-title">
    //       <strong>
    //         <span>({`${h}:${m}:${s}`}) </span>
    //         {tags["display-name"]}:
    //       </strong>
    //     </p>
    //     <Divider />

    //   </CardContent>
    // </Card>
  );
};

export default ChatMessage;
