import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../../pages/Home";
import { Container, Grid, makeStyles } from "@material-ui/core";
import NotFoundPage from "../../pages/NotFound";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AppRoutes() {
  const classes = useStyles();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="not-fonud-404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="not-fonud=404" />} />
    </Routes>
  );
}

export default AppRoutes;
