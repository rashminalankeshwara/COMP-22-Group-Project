import { Box } from "@mui/material";

const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`https://comp-22-group-project.onrender.com/assets/${image}`}
      />
    </Box>
  );
};

export default UserImage;
// connectionto db host