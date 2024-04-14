import { Card, CardContent, Avatar, Divider, Grid } from "@mui/material";

const User = ({ body }) => {
  const { user_name, profile_image_url } = body;

  const handleClick = ({ user }) => {
    alert(`clicked on user ${user}`);
  };

  return (
    <Grid
      container
      className="flex flex-col items-center gap-4 px-2 py-1 odd:bg-von-darkGray/10 even:bg-von-lightGray/10"
    >
      <Grid item>
        <Avatar src={profile_image_url} className="max-h-[20px] max-w-[20px]" />
      </Grid>
      <Grid item>
        <p
          className="flex w-[100%] py-0"
          onClick={(user_name) => handleClick(user_name)}
        >
          <strong>{user_name}</strong>
        </p>
      </Grid>
    </Grid>
  );
};

export default User;
