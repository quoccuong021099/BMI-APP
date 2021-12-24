import makeStyles from "@material-ui/core/styles/makeStyles";

export const useAppStyle = makeStyles({
  root: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#182a4e",
    color: "#fff",
  },
});

export const useHomeStyle = makeStyles({
  root: {},
});

export const useHeaderStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#182a4e !important",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    width: "30px",
  },
  button: {
    backgroundColor: "#2d4980",
    color: "#fff",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#4f6aa1",
    },
  },
}));

export const useBMIStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "1024px !important",
    display: "block",
    margin: "0 auto",
    padding: "20px 0",
  },
  title: {
    textAlign: "center",
    letterSpacing: "6px",
  },
  divider: {
    backgroundColor: "#fff",
    marginTop: "40px",
  },
}));

export const useFormBMIStyle = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
  },
  group: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    padding: "10px",
    width: "100%",
    display: "flex",
  },
  input: {
    margin: "0 5px",
  },
  button: {
    backgroundColor: "#2d4980",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4f6aa1",
    },
    padding: "10px 30px",
    borderRadius: "32px",
  },
}));
