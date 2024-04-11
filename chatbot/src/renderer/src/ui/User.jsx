import { Card, CardContent, Avatar, Divider, Grid } from "@mui/material";

const User = ({ body }) => {
  const { tags, source, parameters } = body;

  return (
    <Grid
      container
      className="flex flex-col items-center gap-4 px-2 py-1 odd:bg-von-darkGray/10 even:bg-von-lightGray/10"
    >
      <Grid item>
        <Avatar
          src="/img/vonHi5_v2.png"
          className="max-h-[20px] max-w-[20px]"
        />
      </Grid>
      <Grid item>
        <p
          style={{ color: tags.color }}
          className="flex w-[100%] py-0 font-title"
        >
          <strong>{tags["display-name"]}</strong>
        </p>
      </Grid>
    </Grid>
  );
};

export default User;
