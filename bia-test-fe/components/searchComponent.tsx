import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { FaSearch } from "react-icons/fa";
import Box from "@mui/material/Box";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.05),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.1),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchInput({ value, onChange }: Props) {
  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <FaSearch />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search for a country..."
          inputProps={{ "aria-label": "search" }}
          value={value}
          onChange={onChange}
        />
      </Search>
    </Box>
  );
}
